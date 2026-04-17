import { JSDOM } from "jsdom";

function getURLsFromHTML(htmlBody, baseURL){
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const links = dom.window.document.querySelectorAll("a");

    for(const link of links){
        urls.push(link.href);
    }
    return urls;
};

function  normalizeUrl(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname.toLocaleLowerCase()}`;

    /*
         urlObj.pathname was giving actual pathname if CAPITAL it giving capital which causes test failure.

         So, to make it work used toLocaleLowerCase() to convert it to small letters.
    */

    // for trailing slash
    if (hostPath.length > 0 && hostPath.slice(-1) === "/") {
        return hostPath.slice(0, -1);
    }

    return hostPath;
}

export { normalizeUrl, getURLsFromHTML };