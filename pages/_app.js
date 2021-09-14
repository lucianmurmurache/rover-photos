import '../styles/globals.scss';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
        <meta name='description' content={Component.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
