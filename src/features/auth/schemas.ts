import { z } from "zod";

export const loginSchema =  z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required"),
  });

export const registerSchema = z.object({
    name: z.string().min(1,'Required'),
    email: z.string().email(),
    password: z.string().min(6,'Minimum of 6 characters required')
})