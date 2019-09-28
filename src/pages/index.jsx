import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sketch from '../components/sketch';
import Logo from '../components/logo';
import Social from '../components/social';

import sketch from '../scripts/phi';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Logo />
      <Social />
      <Sketch sketch={sketch} />
    </Layout>
  );
};

export default IndexPage;
