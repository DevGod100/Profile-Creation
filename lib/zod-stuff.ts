import {z} from 'zod'


export const profileSchema = z.object({
    name: z.string().min(3, { message: "Your name should not be that short!" }).max(45),
    email: z.string().email(),
    image: z.any(), // No specific validation for image
});