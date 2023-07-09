import Navigation from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main data-testid='main-content'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
