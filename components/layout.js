import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Chris Barnard';
export const siteTitle = 'A Trader\'s Journey to Becoming World Class';

export default function Layout({ children, home, about }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Follow my journey on becoming one of the world's top traders"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.navigationTop}>
          <nav className={styles.mainNavigation} role='navigation'>
            <Link href="/" className={styles.menuName}>{name}</Link>
            <Link href="/" className={styles.menuSiteTitle}>{siteTitle}</Link>
            <div className={styles.menuNavButtons}>
                <Link href="/" className={home ? styles.menuButtonSelected : styles.menuButton}>Home</Link>
                <Link href="/about/" className={about ? styles.menuButtonSelected : styles.menuButton}>About</Link>
            </div>
          </nav>
        </div>
        <>
          <Image
            priority
            src="/images/banner-photo.jpg"
            // className={utilStyles.borderCircle}
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
