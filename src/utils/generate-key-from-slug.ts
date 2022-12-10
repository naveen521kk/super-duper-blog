const generateKeyFromSlug = (slug: string) => {
    // remove first slash
    if (slug.startsWith('/')) {
        slug = slug.slice(1);
    }
    // remove last slash
    if (slug.endsWith('/')) {
        slug = slug.slice(0, -1);
    }
    return slug.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

export default generateKeyFromSlug;
