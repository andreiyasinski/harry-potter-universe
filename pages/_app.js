import { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import theme from '../theme/theme';
import Layout from '../components/layout/layout';
import App from 'next/app';

import { useRouter } from 'next/dist/client/router';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  progress: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
  },
}));

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => url !== router.pathname && setLoading(true);
    const handleComplete = (url) =>
      url !== router.pathname && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Eagle+Lake&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/static/images/favicon.svg"></link>
        <title>Harry Potter Universe</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          {loading ? (
            <CircularProgress color="secondary" className={classes.progress} />
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            list-style: none;
          }
        `}</style>
      </ThemeProvider>
    </>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export async function getStaticProps(appContext) {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
}

export default MyApp;
