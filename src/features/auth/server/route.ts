import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { loginSchema, registerSchema } from "../schemas";
import { createAdminClient } from '@/lib/appwrite';
import { ID } from 'node-appwrite';
import { setCookie } from 'hono/cookie'
import { AUTH_COOKIE } from '../constants';
// import { redirect } from "next/navigation";

const app = new Hono()
.post(
    '/login',
    //middleware
    zValidator('json', loginSchema),
    async (c) => {
        const {email, password} = c.req.valid('json')
        console.log({email, password})
        
        return c.json({email, password})
})
.post(
    '/register',
    //middleware
    zValidator('json', registerSchema),
    async (c) => {
        const {name, email, password} = c.req.valid('json')

        const { account } = await createAdminClient()
        const user = await account.create(
            ID.unique(),
            email,
            password,
            name
        );
        const session = await account.createEmailPasswordSession(email, password);

        setCookie(c, AUTH_COOKIE, session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            maxAge: 60*60*24*30
        })

        // cookies().set("my-custom-session", session.secret, {
        //     path: "/",
        //     httpOnly: true,
        //     sameSite: "strict",
        //     secure: true,
        //   });
        
        
        return c.json({success: true, data: user})
})

export default app
