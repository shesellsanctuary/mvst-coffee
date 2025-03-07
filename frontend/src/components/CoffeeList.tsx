"use client";
import { coffeeListStyle, poppins } from "@/styles";
import { Coffee } from "@/types/Coffee";
import { useState } from "react";
import { Card } from "./Card";

type CoffeeListProps = {
  coffees: Coffee[];
};

export const CoffeeList = ({ coffees }: CoffeeListProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const tabs = ["all", "arabic", "robusta"];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const filteredCoffees =
    selectedTab === "all"
      ? coffees
      : coffees.filter((coffee) => coffee.type === selectedTab);

  return (
    <>
      <div className={`${coffeeListStyle.homeFilter} ${poppins.className}`}>
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className={`${coffeeListStyle.filterTab} ${
              tab === selectedTab ? coffeeListStyle.active : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={coffeeListStyle.cardGrid}>
        {filteredCoffees.map(
          ({ id, name, description, type, image, price }) => (
            <Card
              key={id}
              name={name}
              description={description}
              type={type}
              price={price}
              imageUrl={image}
            />
          )
        )}
      </div>
    </>
  );
};
