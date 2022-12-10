import React from "react";
import {MDXProvider} from "@mdx-js/react";
import {Link, HeadFC, graphql} from "gatsby";
import {SEO} from "../components/seo";
import * as styles from "../styles/post.module.scss";

const shortcodes = {Link}; // Provide common components here

export default function PageTemplate({
    data,
    children
}: {
    data: Queries.PageTemplateQuery;
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.postTitle}>{data.mdx?.frontmatter?.title}</h1>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
    );
}

export const query = graphql`
    query PageTemplate($id: String!) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                image
                description
                title
                date(formatString: "MMMM DD, YYYY")
                slug
            }
        }
    }
`;

export const Head: HeadFC<Queries.PageTemplateQuery> = ({data}) => (
    <SEO
        title={data.mdx!.frontmatter!.title || ""}
        description={data.mdx!.frontmatter!.description || ""}
        pathname={data.mdx!.frontmatter!.slug || ""}
        image={data.mdx!.frontmatter!.image || ""}
        article
    />
);
