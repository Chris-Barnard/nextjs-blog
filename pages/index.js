import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const description = 'Follow my journey on becoming one of the world\'s top traders' 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NextSeo
        title={siteTitle}
        description={description}
        canonical='https://chrisbarnard.blog/'
        openGraph={{
            type: 'website',
            url: 'https://chrisbarnard.blog',
            title: `${siteTitle}`,
            description: `${description}`,
            locale: 'en_EN',
            images: [
                {
                    url: '/images/banner-photo.jpg'
                }
            ],
            siteName: 'chrisbarnard.blog'
        }}
        twitter={{
            handle: '@cb_poker',
            site: 'chrisbarnard.blog',
            cardType: 'summary_large_image',
        }}
      />
      <section className={utilStyles.padding1px}>
        <h2 className={utilStyles.headingXl}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image, blurb }) => (
            <li className={utilStyles.listItem} key={id}>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              <Link className={utilStyles.headingLg} href={`/posts/${id}`}>{title}</Link>
              <Link href={`/posts/${id}`}>
                  <Image
                    className={utilStyles.blurbImage}
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto'}}
                    alt={title}
                  />
              </Link>
              <Link className={utilStyles.blurb} href={`/posts/${id}`}>{blurb}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
