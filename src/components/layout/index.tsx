import { MainContent } from "src/styles/genelStyle";
import { ReactNode } from "react";
import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";

const Layout = ({ children }: any) => {
  return(
  <>
    <Header />
     { children }
    <Footer />
  </>)
};
export default Layout;
