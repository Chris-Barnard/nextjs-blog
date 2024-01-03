import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import Markdown from '../../components/react-markdown';
import utilStyles from '../../styles/utils.module.css';
import sizeOf from 'image-size';
import { join } from 'path';
import Seo from '../../components/seo';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  const imageSizes = {};
  // We want to iterate through all the images in the post and grab their image size
  const iterator = postData.contentMd.matchAll(/\!\[.*]\((.*)\)/g)
  let match = false
  while (!(match = iterator.next()).done) {
    const [, src] = match.value
    try {
      const { width, height } = sizeOf(join('public', src))
      imageSizes[src] = { width, height }
    } catch(err) {
      console.error(`Can't get dimensions for ${src}`, err)
    }
  }
  return {
    props: {
      postData,
      imageSizes
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, imageSizes }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Seo postData={postData} />
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <Markdown content={postData.contentMd} imageSizes={imageSizes} />
      </article>
    </Layout>
  );
}
