import React from "react";
import {useSiteMetadata} from "../hooks/use-site-metadata";
import joinTwoUrls from "../utils/join-two-urls";

export const SEO = ({
    title,
    description,
    children,
    canonical,
    pathname = "",
    image,
    article = false,
}: {
    title?: string;
    description?: string;
    pathname?: string;
    children?: React.ReactNode;
    article?: boolean;
    canonical?: string;
    image?: string
}) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        siteUrl,
        twitterUsername
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: (image && joinTwoUrls(siteUrl, image)) || defaultImage,
        url: joinTwoUrls(siteUrl, pathname),
        twitterUsername: twitterUsername,
        canonical: canonical || joinTwoUrls(siteUrl, pathname)
    };

    return (
        <>
            <title>{seo.title}</title>

            {/* Add a favicon */}
            <link rel="alternate icon" type="image/ico" href="/favicon.ico" />
            <link rel="icon" type="image/svg+xml" href="/logo-favicon.svg" />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta property="og:url" content={seo.url} />
            <link rel="canonical" href={seo.canonical} />

            {article && <meta property="og:type" content="article" />}

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            {children}
        </>
    );
};
