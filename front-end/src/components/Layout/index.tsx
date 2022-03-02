import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  headerShown?: boolean;
  footerShown?: boolean;
  classNames?: string;
};

const Layout: React.FC<Props> = ({
  headerShown = true,
  footerShown = true,
  classNames = "",
  children,
}) => {
  return (
    <div>
      {headerShown && <Header />}
      <div className={classNames}>{children}</div>
      {footerShown && <Footer />}
    </div>
  );
};

export default Layout;
