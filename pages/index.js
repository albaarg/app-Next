import Head from "next/head";
import requests from "../components/Api/requests";
//import Image from "next/image";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Results from "../components/Results/Results";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
