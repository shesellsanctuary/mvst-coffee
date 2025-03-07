"use server";

import axios, { AxiosError } from "axios";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { FormState } from "@/components/NewCoffeeForm";

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_COFFEE_SERVICE_URL,
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

export async function createCoffee(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const coffeeFormData = Object.fromEntries(formData);
  const price = formData.get("price")?.toString();
  const validatedCoffeeFormData = coffeeFormSchema.safeParse({
    ...coffeeFormData,
    price: price && parseFloat(price),
  });

  if (!validatedCoffeeFormData.success) {
    const formFieldErrors = validatedCoffeeFormData.error.flatten().fieldErrors;
    if (formFieldErrors) {
      const { name, price, type, description, image } = formFieldErrors;
      return {
        errors: {
          name: name && name[0],
          price: price && price[0],
          type: type && type[0],
          description: description && description[0],
          image: image && image[0],
        },
        message: "",
        type: "error",
      };
    }
  }

  try {
    await AxiosInstance.post("/coffee", {
      ...validatedCoffeeFormData.data,
    });
    revalidatePath("/?show=false");

    return {
      errors: {},
      message: "Coffee created!",
      type: "success",
    };
  } catch (error) {
    if (error instanceof AxiosError && error.status === 400) {
      return {
        errors: {},
        message: `Coffee with name "${validatedCoffeeFormData.data?.name}" already exists`,
        type: "error",
      };
    }
    return {
      errors: {},
      message: "Something went wrong with saving the coffee, please try again",
      type: "error",
    };
  }
}
