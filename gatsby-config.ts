import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Super Duper Blog`,
        siteUrl: `https://super-duper-blog.naveenmk.me/`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        `gatsby-plugin-sass`,
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./contents/"
            },
            __key: "contents"
        },
        "gatsby-plugin-mdx",
    ]
};

export default config;
