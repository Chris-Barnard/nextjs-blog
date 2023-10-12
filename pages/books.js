import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function About() {
    return (
        <Layout books>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1 className={utilStyles.headingXl}>Chris Barnard's Book Club</h1>
                <p>To be developed...</p>
            </section> 
        </Layout>
    )
}
