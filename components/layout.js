import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Navbar from './navbar';

const name = 'Chris Barnard . blog';
export const siteTitle = 'A Trader\'s Journey to Becoming World Class';

export default function Layout({ children, home, about, books }) {
  const curPage = home ? "home" : about ? "about" : books ? "books" : "other";
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Navbar name={name} siteTitle={siteTitle} curPage={curPage}/>
        <>
          <Image
            priority
            className={styles.bannerPhoto}
            src="/images/banner-photo.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt=""
          />
        </>
      </header>
      <div className={styles.contentContainer}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
