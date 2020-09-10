const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://user-images.githubusercontent.com/10286653/92694366-e960fe00-f381-11ea-8a92-4dad1146b833.png',
    logoLink: 'https://hasura.io/learn/1',
    title:
      "<a href='https://hasura.io/learn/2'>在宅・福祉施設向け新型コロナ（COVID-19）情報まとめサイト</a>",
    githubUrl: 'https://github.com/porolakka/covid19-qa',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/khmacovid19" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/basicprevention', // add trailing slash if enabled above
      '/disinfection',
      '/mask',
      '/homerecuperation',
      '/outbreakprevention',
      '/covid19confirmation',
      '/underlyingdisease',
      '/switchtohome',
      '/commuter',
      '/hrm',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://hasura.io' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://www.khma-covid19.org/'>Original </a><div class='greenCircle'></div><a href='https://www.khma-covid19.org/links-1'>Q&A Search</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
