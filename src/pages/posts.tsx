import React from "react";
import {graphql, PageProps} from "gatsby";
import {Link} from "gatsby";
import * as styles from "../styles/posts.module.scss";

export default function Posts({data}: PageProps<Queries.PostsQuery>) {
    const posts = data.allMdx.nodes;
    return (
        <>
            <div className={styles.container}>
                <h1>Posts</h1>
                {posts.map(post => (
                    <div
                        key={post.frontmatter!.title}
                        className={styles.innerFlex}
                    >
                        <h2>
                            <Link to={`/posts/${post.frontmatter!.slug}`}>
                                {post.frontmatter!.title}
                            </Link>
                        </h2>
                        <span>{post.frontmatter!.date}</span>
                        <span>{post.frontmatter!.description}</span>
                        <span>{post.excerpt}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export const query = graphql`
    query Posts {
        allMdx(limit: 10, sort: {frontmatter: {date: ASC}}) {
            nodes {
                excerpt
                frontmatter {
                    description
                    title
                    date(formatString: "MMMM DD, YYYY")
                    slug
                }
            }
        }
    }
`;
