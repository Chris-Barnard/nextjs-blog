import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
            <title>first post</title>
        </Head>
        <h1>first post</h1>
        <h2>
            <Link href="/">back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
