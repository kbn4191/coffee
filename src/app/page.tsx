import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header/header";
import Product from "./component/product/product";

export default function Home() {
  return (
   <main>
    <Header/>
    <Product/>
   </main>
  );
}
