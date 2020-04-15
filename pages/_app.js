import { useEffect } from 'react';
import { Provider } from "react-redux";
import withReduxStore from '../utils/withRedux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import theme from '../theme/theme';
import Layout from '../components/layout/layout';
import App from 'next/app'

function MyApp({ Component, pageProps, reduxStore }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Eagle+Lake&display=swap" rel="stylesheet"></link>
      </Head>
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            list-style: none;
          }
        `}</style>
        </ThemeProvider>
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default withReduxStore(MyApp)