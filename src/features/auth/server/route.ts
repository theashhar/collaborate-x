import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
// import { z } from 'zod'<
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
.post(
    '/login',
    //middleware
    zValidator('json', loginSchema),
    (c) => {
        const {email, password} = c.req.valid('json')
        console.log({email, password})
        
        return c.json({email, password})
})
.post(
    '/register',
    //middleware
    zValidator('json', registerSchema),
    (c) => {
        const {name, email, password} = c.req.valid('json')
        console.log({name, email, password})

        return c.json({name, email, password})
})

export default app