// components/seo.js
import { NextSeo } from 'next-seo';

export default function Seo({ postData }) {
    const { title, blurb, image, id } = postData

    return (
        <>
            <NextSeo
                title={title}
                description={blurb}
                canonical={`https://chrisbarnard.blog/posts/${id}`}
                openGraph={{
                    type: 'website',
                    url: 'https://chrisbarnard.blog',
                    title: `${title} | originally posted on chrisbarnard.blog`,
                    description: blurb,
                    locale: 'en_EN',
                    images: [
                        {
                            url: image,
                            width: 800,
                            height: 600,
                            alt: `${title} on chrisbarnard.blog`
                        },
                    ],
                    site_name: 'chrisbarnard.blog'
                }}
                twitter={{
                    handle: '@cb_poker',
                    site: 'chrisbarnard.blog',
                    cardType: 'summary',
                }}
            />
        </>
    );
}
