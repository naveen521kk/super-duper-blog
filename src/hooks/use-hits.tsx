import React from "react";
import generateKeyFromSlug from "../utils/generate-key-from-slug";

export default function useHits(slug: string) {
    const [hits, setHits] = React.useState<number | null>(null);

    React.useEffect(() => {
        const key = generateKeyFromSlug(slug);
        // Register the article as seen!
        if (process.env.NODE_ENV === "production") {
            // Fetch the # of hits, this should increment the hits too
            fetch(`/api/get-article-hits?slug=${key}`)
                .then(res => res.json())
                .then(json => {
                    if (typeof json.hits === "string") {
                        setHits(parseInt(json.hits) + 1);
                    }
                }).catch((reason) => {
                    console.error(reason);
                });
        } else {
            setHits(1337);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return hits;
}
