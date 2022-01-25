import Navbar from "./navbar";
import Footer from "./footer1";
import TryBlock from "./TryBlock";

export default function Layout({ children }) {
  return (
    <>
       <Navbar /> 
      <main>{children}</main>
      <TryBlock/>
      <Footer />
    </>
  );
}
