import { Card } from "@/components/Card";
import { AxiosInstance } from "@/services/coffeeService";
import layout from "../styles/layout.module.scss";
import { poppins, bebas, mvstCoffeeLogo, coffeeBeansImg } from "@/styles";
import { topViewCoffeeImg } from "@/styles";
import Image from "next/image";
export default async function Home() {
  const coffees = (await AxiosInstance.get("/coffee", {})).data;

  if (!coffees) return <div>Loading...</div>;

  return (
    <main className={layout.home}>
      <div className={layout.overlay}></div>
      <div
        className={layout.background}
        style={{ backgroundImage: `url(${topViewCoffeeImg.src})` }}
      ></div>
      <div className={layout.header}>
        <Image
          src={mvstCoffeeLogo}
          alt="mvst coffee logo"
          className={layout.headerLogo}
        />
        <button className={`${layout.button} ${poppins.className}`}>
          Create
        </button>
      </div>
      <div className={layout.container}>
        <div className={layout.content}>
          <span className={`${layout.homeTitle} ${bebas.className}`}>
            Roasted Coffee
          </span>
          <span className={`${layout.homeSubtitle} ${poppins.className}`}>
            Choose a coffee from below or create your own{" "}
          </span>
          <button className={`${layout.button} ${poppins.className}`}>
            Create your own coffee
          </button>
        </div>
        <div className={layout.contentFooter}>
          <span className={`${layout.homeFooter} ${bebas.className}`}>
            mvst exclusive coffee
          </span>
        </div>
        <div className={`${layout.homeFilter} ${poppins.className}`}>
          FILTER
        </div>
        <div className={layout.cardGrid}>
          {coffees.map(({ id, name, description, type, image, price }) => (
            <Card
              key={id}
              title={name}
              description={description}
              type={type}
              price={price}
              imgSrc={image}
            />
          ))}
        </div>
      </div>
      <div
        className={layout.footer}
        style={{ backgroundImage: `url(${coffeeBeansImg.src})` }}
      >
        <Image
          src={mvstCoffeeLogo}
          alt="mvst coffee logo"
          className={layout.footerImg}
        />
      </div>
    </main>
  );
}
