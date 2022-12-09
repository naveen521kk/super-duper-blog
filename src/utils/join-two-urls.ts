const joinTwoUrls = (url1: string, url2: string) => {
    return new URL(url2, url1).toString();
};

export {joinTwoUrls};
