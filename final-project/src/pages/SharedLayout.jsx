import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className="main-container-pages"> 
          <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default SharedLayout;