import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://js-intro-auth.netlify.com">
      <header>
        <Link to="/">JS App</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;
