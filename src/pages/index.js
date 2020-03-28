import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h1>It's the collest plase</h1>
      <p>Log in to play around</p>
      <Link to="/dashboard">Go to the dashboard</Link>
    </Layout>
  );
};
