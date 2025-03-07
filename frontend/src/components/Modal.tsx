import Link from "next/link";
import { bebas, coffeeBeansImg, colors, dm_sans, modalStyle } from "@/styles";
import Image from "next/image";

type ModalProps = {
  title: string;
  Content: React.ElementType;
};

export const Modal = ({ title, Content }: ModalProps) => {
  return (
    <div
      className={modalStyle.mvstModal}
      style={{ backgroundColor: colors.cardBackground, color: colors.darkText }}
    >
      <div className={modalStyle.overlay}></div>
      <div className={`${dm_sans.className} ${modalStyle.modalHeader} `}>
        <Link style={{ color: colors.lightText, padding: "0px 32px" }} href="/">
          X
        </Link>
      </div>
      <div className={modalStyle.modalContainer}>
        <span
          className={`${bebas.className} ${modalStyle.modalTitle}`}
          style={{ color: colors.lightText }}
        >
          {title}
        </span>
        <Content />
      </div>
      <div className={modalStyle.modalFooter}>
        <Image
          src={coffeeBeansImg}
          className={modalStyle.image}
          alt="coffee beans"
        />
      </div>
    </div>
  );
};
