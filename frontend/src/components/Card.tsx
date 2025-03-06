import React from "react";
import Image from "next/image";
import { poppins, cardStyle, colors } from "@/styles";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
  price: number;
  type: string;
};

export const Card = ({ title, description, type, imgSrc, price }: Props) => {
  return (
    <div className={cardStyle.card}>
      <span
        className={`${cardStyle.cardType} ${poppins.className}`}
        style={{
          backgroundColor:
            type === "arabic" ? colors.lightTurquise : colors.darkGray,
        }}
      >
        {type}
      </span>
      <Image
        src={imgSrc}
        alt="coffee image"
        className={cardStyle.cardImg}
        width={250}
        height={200}
      />
      <p className={`${cardStyle.cardTitle} ${poppins.className}`}>{title}</p>
      <p className={`${cardStyle.cardDescription} ${poppins.className}`}>
        {description}
      </p>
      <p
        className={`${cardStyle.cardPrice} ${poppins.className}`}
      >{`${price.toFixed(2)} €`}</p>
    </div>
  );
};
