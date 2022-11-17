import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export const getServerSidePropsWithSession: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });
  return {
    props: { session },
  };
};
