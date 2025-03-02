import { Poppins, Bebas_Neue } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
