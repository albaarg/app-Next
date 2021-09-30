import Head from "next/head";
//import Image from "next/image";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
    </div>
  );
}
