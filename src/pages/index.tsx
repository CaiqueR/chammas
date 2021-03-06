import React from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Section } from "../components/Section/Section";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import { Dialog } from "../components/Dialog/Dialog";

const Home: React.FC = () => {
  return (
    <>
      <Dialog />

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
