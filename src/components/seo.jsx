/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ title, description, meta, lang }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          settings {
            siteLanguage
            siteShortTitle
            siteShortDescription
            siteLogo
            siteFBAppID
            siteFBPageUser
            siteTwitterCard
            siteTwitterUser
          }
        }
      }
    }
  `);

  const metaLang = lang || site.siteMetadata.siteLanguage;
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = site.siteMetadata.siteUrl + site.siteMetadata.settings.siteLogo;

  return (
    <Helmet
      htmlAttributes={{ lang: metaLang }}
      title={metaTitle}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: 'canonical', href: site.siteMetadata.siteUrl }]}
      meta={[
        // base meta tags
        { name: 'description', content: metaDescription },
        { image: 'image', content: metaImage },
        // facebook graph tags
        { property: 'og:url', content: site.siteMetadata.siteUrl },
        { property: 'og:title', content: site.siteMetadata.settings.siteShortTitle },
        { property: 'og:description', content: site.siteMetadata.settings.siteShortDescription },
        { property: 'og:image', content: metaImage },
        { property: 'fb:app_id', content: site.siteMetadata.settings.siteFBAppID },
        // twitter card tags
        { name: 'twitter:card', content: site.siteMetadata.settings.siteTwitterCard },
        { name: 'twitter:site', content: site.siteMetadata.settings.siteTwitterUser },
        { name: 'twitter:description', content: site.siteMetadata.settings.siteShortDescription },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  title: null,
  description: null,
  meta: [],
  lang: 'en',
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
};

export default SEO;
