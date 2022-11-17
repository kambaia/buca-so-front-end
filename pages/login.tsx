import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
//import { defaultDynamicImportConfig } from '@constants/app';
import Loading from '@components/shared/Loading';
import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";
const DynamicLoginForm = dynamic(() => import('@forms/LoginForm'), {
  ssr:false,
  loading:  Loading,
});

const LoginView: React.FC = () => {
  const router = useRouter();
  const {data: session, status} = useSession();
  return (
    <>
      <Head>
        <title>GDDKIA - Logowanie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session && <>
        <Header/>
        <DynamicLoginForm />

        <Footer/>
        
      </>}
    </>
  );
};

export default LoginView;
