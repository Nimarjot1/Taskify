import { z } from "zod";
export const signInSchema = z.object({
    email: z.string().email("invalid email address"),
    password: z.string().min(6,"Password is required"),
});

export const signUpSchema=z.object({
    email: z.string().email("invalid email address"),
    password: z.string().min(8,"Password must be 8 characters"),
    name: z.string().min(3,"Name must ne atleat 3 characters"),
    confirmPassword: z.string().min(8,"Password must be 8 characters"),
}).refine((data)=>data.password === data.confirmPassword,{
    path: ["confirmPassword"],
    message: "Password do not match",
});
