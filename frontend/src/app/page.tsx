import { Card, Modal, NewCoffeeForm } from "@/components";
import { CoffeeList } from "@/components/CoffeeList";
import { AxiosInstance } from "@/services/coffeeService";
import { poppins, bebas, mvstCoffeeLogo, coffeeBeansImg } from "@/styles";
import { topViewCoffeeImg, layout } from "@/styles";
import { Coffee } from "@/types/Coffee";
import Image from "next/image";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const coffees = (await AxiosInstance.get("/coffee")).data as Coffee[];

  const show = searchParams?.show;
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
        <Link href={"/?show=true"}>
          <button className={`${layout.button} ${poppins.className}`}>
            Create
          </button>
        </Link>
      </div>
      <div className={layout.container}>
        <div className={layout.content}>
          <span className={`${layout.homeTitle} ${bebas.className}`}>
            Roasted Coffee
          </span>
          <span className={`${layout.homeSubtitle} ${poppins.className}`}>
            Choose a coffee from below or create your own{" "}
          </span>
          <Link href={"/?show=true"}>
            <button className={`${layout.button} ${poppins.className}`}>
              Create your own coffee
            </button>
          </Link>
        </div>
        <div className={layout.contentFooter}>
          <span className={`${layout.homeFooter} ${bebas.className}`}>
            mvst exclusive coffee
          </span>
        </div>
        <CoffeeList coffees={coffees} />
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
      {show && <Modal title="Create New" Content={NewCoffeeForm} />}
    </main>
  );
}
