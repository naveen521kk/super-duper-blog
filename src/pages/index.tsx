import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import {SEO} from "../components/seo";
import * as index_css from "../styles/index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <div className={index_css.container}>
                <h1>Hi, I'm John.<span className={index_css.wave_emoji}>👋</span></h1>
                <p>
                    Check out my <a href="/posts">posts</a>
                </p>
            </div>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
