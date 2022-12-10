interface Env {
    KV: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async context => {
    if (context.request.method !== "GET") {
        return new Response("Not allowed", {status: 400});
    }
    const urlParams = new URLSearchParams(context.request.url.split("?")[1]);
    if (!urlParams.has("slug")) {
        return new Response(
            JSON.stringify({message: "Article slug not provided"}),
            {
                status: 400,
                headers: {"Content-Type": "application/json; charset=utf-8"}
            }
        );
    }
    const slug: string = urlParams.get("slug");
    let value = await context.env.KV.get(slug);
    if (value === null) {
        value = "0";
    }
    const newValue = (parseInt(value) + 1).toString();
    await context.env.KV.put(slug, newValue);
    return new Response(JSON.stringify({hits: newValue}), {
        status: 200,
        headers: {"Content-Type": "application/json; charset=utf-8"}
    });
};
