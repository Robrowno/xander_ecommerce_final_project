import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default SharedLayout;