"use server";

import axios, { AxiosError } from "axios";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FormState } from "@/components/NewCoffeeForm";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:4001",
});

const COFFEE_TYPES = ["arabic", "robusta"] as const;
const coffeeEnum = z.enum(COFFEE_TYPES);

const coffeeFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(255, "Name must be shorter than 255 characters"),
  price: z.number().min(0, "Price must be non-negative"),
  type: coffeeEnum,
  description: z
    .string()
    .trim()
    .min(1, "Enter a description")
    .max(255, "Description must be shorter than 255 characters"),
  image: z.string().trim().url("Must be a valid URL"),
});

export async function createCoffee(formState: FormState, formData: FormData) {
  const coffeeFormData = Object.fromEntries(formData);
  const validatedCoffeeFormData = coffeeFormSchema.safeParse({
    ...coffeeFormData,
    price: parseFloat(formData.get("price")),
  });

  if (!validatedCoffeeFormData.success) {
    const formFieldErrors = validatedCoffeeFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        price: formFieldErrors?.price,
        type: formFieldErrors?.type,
        description: formFieldErrors?.description,
        image: formFieldErrors?.image,
      },
    };
  }

  try {
    await AxiosInstance.post("/coffee", {
      ...validatedCoffeeFormData.data,
    });
    revalidatePath("/");
    return {
      message: "Coffee created!",
      type: "success",
    };
  } catch (error) {
    if (error instanceof AxiosError && error.status === 400) {
      return {
        message: `Coffee with name "${validatedCoffeeFormData.data.name}" already exists`,
        type: "error",
      };
    }
    return {
      message: "Something went wrong with saving the coffee, please try again",
      type: "error",
    };
  }
}
