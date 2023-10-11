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
                <h2>Chris Barnard's Book Club</h2>
                <p>To be developed...</p>
            </section> 
        </Layout>
    )
}
