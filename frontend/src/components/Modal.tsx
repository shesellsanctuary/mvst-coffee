import Link from "next/link";
import { bebas, colors, dm_sans, modalStyle } from "@/styles";

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
      <div className={`${dm_sans.className} ${modalStyle.modalHeader} `}>
        <Link style={{ color: colors.lightText }} href="/">
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
    </div>
  );
};
