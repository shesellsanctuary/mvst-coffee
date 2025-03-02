import React from "react";
import card from "../styles/card.module.scss";
import colors from "../styles/colors.module.scss";
import Image from "next/image";
import { poppins } from "@/styles";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
  price: number;
  type: string;
};

export const Card = ({ title, description, type, imgSrc, price }: Props) => {
  return (
    <div className={card.card}>
      <span
        className={`${card.cardType} ${poppins.className}`}
        style={{
          backgroundColor:
            type === "arabic" ? colors.lightTurquise : colors.darkGray,
        }}
      >
        {type}
      </span>
      {/* <Image
        src={imgSrc}
        alt="coffee image"
        className={card.cardImg}
        width={250}
        height={200}
      /> */}
      <p className={`${card.cardTitle} ${poppins.className}`}>{title}</p>
      <p className={`${card.cardDescription} ${poppins.className}`}>
        {description}
      </p>
      <p className={`${card.cardPrice} ${poppins.className}`}>{`${price.toFixed(
        2
      )} €`}</p>
    </div>
  );
};
