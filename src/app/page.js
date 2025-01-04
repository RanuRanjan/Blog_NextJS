'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
     
     <h1>Welcome to my Blog</h1>
     <Link href='/product'>Product</Link>
    </div>
  );
}
