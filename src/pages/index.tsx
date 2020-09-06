import React from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Section } from "../components/Section/Section";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Head>
        <title>Chammas Engenharia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Section />
      </main>

      <Footer />
    </>
  );
};

export default Home;
