import { colors, dm_sans, formStyle } from "@/styles";
import Link from "next/link";

export const NewCoffeeForm = () => {
  return (
    <form action="" className={`${dm_sans.className} ${formStyle.form}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gridRow: "span 1",
          gridColumn: "span 3",
        }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name your coffee here" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gridRow: "span 1",
          gridColumn: "span 1",
        }}
      >
        <label htmlFor="price">Price</label>
        <input type="number" id="price" placeholder="0.00" />
        <span className={formStyle.priceInput}>€</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gridRow: "span 1",
          gridColumn: "span 4",
        }}
      >
        <label htmlFor="type">Type</label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "16px",
          }}
        >
          <input type="radio" id="a25" name="amount" />
          <label htmlFor="a25" style={{ borderColor: colors.borderColor }}>
            <span>Arabic</span>
          </label>
          <input type="radio" id="a24" name="amount" />
          <label htmlFor="a24" style={{ borderColor: colors.borderColor }}>
            <span>Robusta</span>
          </label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gridRow: "span 1",
          gridColumn: "span 4",
        }}
      >
        <label htmlFor="image">Upload Image</label>
        <input type="text" id="image" placeholder="Paste image URL here" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gridRow: "span 1",
          gridColumn: "span 4",
        }}
      >
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Add a description"
        ></input>
      </div>
      <div className={formStyle.formBtns}>
        <Link href="/">
          <button className={formStyle.discardBtn} type="button">
            Discard
          </button>
        </Link>
        <button className={formStyle.confirmBtn} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};
