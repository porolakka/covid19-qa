import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {config.siteMetadata.ogImage ? (
            <meta property="og:image" content={config.siteMetadata.ogImage} />
          ) : null}
          <meta property="twitter:card" content="summary_large_image" />
          {config.siteMetadata.ogImage ? (
            <meta property="twitter:image" content={config.siteMetadata.ogImage} />
          ) : null}
          {config.siteMetadata.favicon ? (
            <link rel="shortcut icon" type="image/svg" href={config.siteMetadata.favicon} />
          ) : null}
          <noscript key="noscript"></noscript>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
            function navBarClose() {
              document.getElementById("navbar").classList.toggle("responsive");
            }
            document.addEventListener('click',function(e){
              if(e.target && e.target.tagName.toLowerCase() === 'a'){
                navBarClose();
              }
           });
            `,
            }}
          />
          <div id="qon-chatwidget-div"></div>
          <script type="text/javascript" src="https://khma-covid19.qontextual.jp/chatwidget/qon-chatwidget-loader.js"></script>
          <script
              defer
              dangerouslySetInnerHTML={{
                 __html: `
              chatLoader = new QonChatWidgetLoader(
              'qon-chatwidget-div','https://khma-covid19.qontextual.jp/chat-widget.html?dataset=FAQ',
              {
                  headerBackgroundColor: '#1D3861',
                  bannerImageSrc: './header.jpeg',
                  fontSource: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap',
                  fontFamily: 'Noto Sans JP',
                  greetingMessage: 'ご覧いただき、ありがとうございます。ご質問を選択いただくか、短文で入力し検索してください',
                  helpfulFeedbackMessage: 'お役に立ててよかったです。',
                  noResultMessage: '<p>申し訳ございません。お問い合わせページからお問い合わせください。</p>',
                  backgroundColor: '#FFF',
                  chatWidgetHeight: 2048,
                  launcherBackgroundColor: '#1D3861',
                  launcherMessage: '質問',
                  sentMessageBackgroundColor: '#1D3861',
                  sentMessageTextColor: '#FFF',
                  receivedMessageIconSrc: './chatbot.png',
                  receivedMessageBackgroundColor: '#f4f7f9',
                  suggestBackgroundColor: '#FFF',
                  suggestTextColor: '#000',
                  suggestHoverColor: 'rgba(29, 56, 97, 0.1)',
                  suggestAccentColor: '#F5A9A8',
                  receivedMessageTextColor: '#000',
                  linkTextColor: '#0000EE',
                  inputBackgroundColor: '#FFF',
                  inputTextColor: '#1D3861',
                  zIndex: '100',
                  launcherRight: 0,
                  launcherBottom: 50,
                  launcherSizeSm: 45,
                  launcherRightSm: 0,
                  // llauncherLeftSm: 0,
                  launcherBottomSm: 50,
              });
            `,
            }}
          />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
