import React from "react";
import {MDXProvider} from "@mdx-js/react";
import {Link, HeadFC, graphql} from "gatsby";
import {SEO} from "../components/seo";

const shortcodes = {Link}; // Provide common components here

export default function PageTemplate({
    data,
    children
}: {
    data: Queries.PageTemplateQuery;
    children: React.ReactNode;
}) {
    return (
        <>
            <h1>{data.mdx?.frontmatter?.title}</h1>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </>
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
