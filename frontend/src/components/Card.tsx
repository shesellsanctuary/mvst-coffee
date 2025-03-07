import React from "react";
import Image from "next/image";
import { poppins, cardStyle, colors } from "@/styles";

type Props = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  type: string;
};

export const Card = ({ name, description, type, imageUrl, price }: Props) => {
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
        src={imageUrl}
        alt="card image"
        className={cardStyle.cardImg}
        width={250}
        height={200}
      />
      <p className={`${cardStyle.cardTitle} ${poppins.className}`}>{name}</p>
      <p className={`${cardStyle.cardDescription} ${poppins.className}`}>
        {description}
      </p>
      <p
        className={`${cardStyle.cardPrice} ${poppins.className}`}
      >{`${price.toFixed(2)} €`}</p>
    </div>
  );
};
