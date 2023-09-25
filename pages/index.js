import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Chris.  I'm a trader specializing in the Futures and Forex Markets.  Follow me on my journey to become one of the top 5% of traders that can thrive in today's difficult trading world.</p>
        <p>
            I am a former poker player and data scientist that has always enjoyed studying the markets and investing.
            I started primarily as long term value investor and bitcoin HODLer.
            Now I'm trying to make my mark swing trading in the futures and forex world.
        </p>
        <p>
            I love being outdoors and having the freedom and flexibility to pursue my passions.
            Trading is a vehicle for me to be able to have the time to do the things I love, while still being able to afford the lifestyle that I want in today's inflation charged world.
            It also scratches my competive itch, attempting to beat the best in the world, and bring some of that Wall St money back to spend in my local community here in rural Colorado.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
