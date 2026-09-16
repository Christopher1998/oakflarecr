import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200),

  company: z.string().trim().max(150).optional(),

  projectType: z.enum([
    "website",
    "web-app",
    "mobile-app",
    "backend",
    "other",
  ]),

  budget: z.enum([
    "under-1000",
    "1000-2500",
    "2500-5000",
    "5000-plus",
    "not-sure",
  ]),

  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about the project.")
    .max(5000),

  website: z.string().max(0).optional(),

  startedAt: z.number(),
});

export type ContactFormData = z.infer<typeof contactSchema>;