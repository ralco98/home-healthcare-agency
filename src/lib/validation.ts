import { z } from "zod";

export const enquiryFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  preferredContactMethod: z.enum(["email", "phone"], {
    errorMap: () => ({ message: "Please select your preferred contact method" }),
  }),
  enquiryType: z.enum([
    "Arrange a visit",
    "Ask about availability",
    "Learn about care services",
    "Discuss fees and funding",
    "Professional referral",
    "Careers",
    "Other",
  ], {
    errorMap: () => ({ message: "Please select an enquiry type" }),
  }),
  preferredVisitDate: z.string().optional(),
  message: z.string().min(10, "Please provide a few details so we can assist you better (at least 10 characters)"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm your consent for us to process your enquiry" }),
  }),
});

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>;

export const careersFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a contact phone number"),
  position: z.string().min(1, "Please select the role you are applying for"),
  experienceYears: z.string().min(1, "Please indicate your relevant experience"),
  coverNote: z.string().min(20, "Please tell us briefly about yourself and why you would like to join our team"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm consent to process your application details" }),
  }),
});

export type CareersFormData = z.infer<typeof careersFormSchema>;
