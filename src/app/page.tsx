import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header/header";
import Product from "./component/product/product";

import dynamic from 'next/dynamic'
const Banners = dynamic(() => import('./component/banner/banner'), { ssr: false })
const FAQ = dynamic(() => import('./component/faq/Faq'), { ssr: false })

export default function Home() {
  return (
    <>
   
    <Header/>
    <Product/>
    <Banners/>
    <FAQ/>
    </>
  
  );
}
