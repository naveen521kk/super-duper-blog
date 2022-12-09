const joinTwoUrls = (url1: string, url2: string | undefined) => {
    if (!url2){
        return url1;
    }
    if (url2.startsWith("http")){
        return url2;
    }
    return new URL(url2, url1).toString();
};

export {joinTwoUrls};
