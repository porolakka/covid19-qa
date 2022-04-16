const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://khma-covid19.org/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://user-images.githubusercontent.com/10286653/92694366-e960fe00-f381-11ea-8a92-4dad1146b833.png',
    logoLink: 'https://covid19-qa.netlify.app/',
    title:
      "<a href='https://khma-covid19.org/'>新型コロナ情報まとめサイト</a>",
    githubUrl: 'https://github.com/porolakka/covid19-qa/tree/master',
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
      enabled: true,
      indexName: 'test_KHMA',
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
    links: [
      {text: '元サイトのFacebookページ', link: 'https://www.facebook.com/khmacovid19taskforce'},
      { text: 'NPO法人関西健康・医療学術連絡会', link: 'http://www.khma.jp/' }
    ],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://www.khma-covid19.org/'>目次 </a><div class='greenCircle'></div><a href='https://khma-covid19.qontextual.jp/user/dirfaq'>QontextualによるQ&A</a>",
  },
  siteMetadata: {
    title: '在宅・福祉施設向け 新型コロナウイルス（COVID-19） Q&Aサイト',
    description: 'NPO法人関西健康・医療学術連絡会が2020年4月に公開した在宅・福祉施設向けの「新型コロナウイルス(COVID-19)情報まとめサイト」をもとにして Gatsby.js+Markdownで静的サイトを生成し、GitHubでホストしている保存用サイトです。',
    ogImage: null,
    docsLocation: 'https://github.com/porolakka/covid19-qa/tree/master/content',
    favicon: 'https://raw.githubusercontent.com/porolakka/covid19-qa/master/src/components/images/favicon.ico?token=ACOPMPJTM26NMH56JV5FB7C7LHNIE',
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
          src: 'src/logo400.jpg',
          sizes: `400x400`,
          type: `image/jpg`,
        },
      ],
    },
  },
};

module.exports = config;
