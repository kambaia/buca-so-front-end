import Layout from "@components/layout";
import { Bainner } from "@components/shared/Bainner";
import { MainLayout } from "@components/MainLayout";
import { getServerSidePropsWithSession } from "@utils/getServerSidePropsWithSession";
import Head from "next/head";
import { TNextPageWithLayout } from "./_app";

const Home: TNextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>GDDKIA - Strona główna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Bainner />
        <MainLayout/>
      </Layout>
    </>
  );
};

export const getServerSideProps = getServerSidePropsWithSession;

export default Home;
