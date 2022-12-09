import {graphql, useStaticQuery} from "gatsby";

interface SiteMetadata {
    title: string;
    description: string;
    image: string;
    siteUrl: string;
    twitterUsername: string
}

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                    twitterUsername
                }
            }
        }
    `);

    return data.site.siteMetadata as SiteMetadata;
};
