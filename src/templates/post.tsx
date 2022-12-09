import React from "react";
import {graphql} from "gatsby";
import {MDXProvider} from "@mdx-js/react";
import {Link} from "gatsby";

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
    query PageTemplate ($id: String!) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
            }
        }
    }
`;
