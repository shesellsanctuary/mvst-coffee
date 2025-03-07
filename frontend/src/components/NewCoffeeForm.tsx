"use client";
import { createCoffee } from "@/services/coffeeService";
import { dm_sans, formStyle } from "@/styles";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const initialState: FormState = {
  errors: {},
  message: "",
  type: "success",
};

type messageType = "success" | "error";

export type FormState = {
  errors: {
    name?: string;
    type?: string;
    price?: string;
    description?: string;
    image?: string;
  };
  message?: string;
  type: messageType;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={formStyle.confirmBtn} type="submit" disabled={pending}>
      Confirm
    </button>
  );
};
export const NewCoffeeForm = () => {
  const [formState, formAction] = useFormState<FormState, FormData>(
    (state, formData) => createCoffee(state, formData),
    initialState
  );
  const router = useRouter();

  useEffect(() => {
    if (formState.message) {
      if (formState.type === "success") {
        toast.success(formState.message);
        router.push("/");
      } else {
        toast.error(formState.message);
      }
    }
  }, [formState.message, formState.type, router]);

  return (
    <form
      action={formAction}
      className={`${dm_sans.className} ${formStyle.form}`}
    >
      <div
        className={formStyle.formInput}
        style={{
          gridRow: "span 1",
          gridColumn: "span 3",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name your coffee here"
        />
        <span className={formStyle.errorFeedback}>
          {formState.errors?.name}
        </span>
      </div>
      <div
        className={formStyle.formInput}
        style={{
          gridRow: "span 1",
          gridColumn: "span 1",
        }}
      >
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="0.00"
          step="0.01"
        />
        <span className={formStyle.priceInput}>€</span>
        <span className={formStyle.errorFeedback}>
          {formState.errors?.price}
        </span>
      </div>
      <div
        className={formStyle.formInput}
        style={{
          gridRow: "span 1",
          gridColumn: "span 4",
        }}
      >
        <label htmlFor="type">Type</label>
        <div className={formStyle.typeInput}>
          <input type="radio" id="arabic" name="type" value="arabic" />
          <label htmlFor="arabic">
            <span>Arabic</span>
          </label>
          <input type="radio" id="robusta" name="type" value="robusta" />
          <label htmlFor="robusta">
            <span>Robusta</span>
          </label>
        </div>
        <span className={formStyle.errorFeedback}>
          {formState.errors?.type}
        </span>
      </div>
      <div
        className={formStyle.formInput}
        style={{
          gridRow: "span 1",
          gridColumn: "span 4",
        }}
      >
        <label htmlFor="image">Upload Image</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Paste image URL here"
        />
        <span className={formStyle.errorFeedback}>
          {formState.errors?.image}
        </span>
      </div>
      <div
        className={formStyle.formInput}
        style={{
          gridRow: "span 1",
          gridColumn: "span 4",
        }}
      >
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Add a description"
        ></input>
        <span className={formStyle.errorFeedback}>
          {formState.errors?.description}
        </span>
      </div>
      <div className={formStyle.formBtns}>
        <Link href="/">
          <button className={formStyle.discardBtn} type="button">
            Discard
          </button>
        </Link>
        <SubmitButton />
      </div>
    </form>
  );
};
