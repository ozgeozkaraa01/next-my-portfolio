import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps, router }) {
  const getPageTitle = (router) => {
    switch (router.pathname) {
      case "/bookmarks":
        return "Özgenur Özkara - Bookmarks";
      case "/projects":
        return "Özgenur Özkara - Projects";
      default:
        return "Özgenur Özkara";
    }
  };

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextSeo
        title={getPageTitle(router)}
        description="Personal portfolio website of Özgenur Özkara"
      />
      <Head>
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_800_800/0/1671976917166?e=2147483647&v=beta&t=jqC4evYtmj4UJRpJosBclfifHwWjCLWKzyyDoiWFkuE"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
