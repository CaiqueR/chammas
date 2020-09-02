import React from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Section } from "../components/Section/Section";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Chammas Engenharia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Section />
      </main>
    </div>
  );
};

export default Home;
