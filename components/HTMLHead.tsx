import Head from "next/head";

export default () => (
  <Head>
    <title>V létě do kina | letní kina Praha</title>

    {/* Global Site Tag (gtag.js) - Google Analytics */}
    {/* TODO: is this the best way to load? */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=UA-121779324-1`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-121779324-1');
            `
      }}
    />

    <meta name="viewport" content="width=device-width" />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/static/apple-touch-icon-ipad-retina-152x152.png"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700"
      rel="stylesheet"
    />
  </Head>
);
