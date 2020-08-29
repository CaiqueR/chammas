import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Chammas Engenharia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
