import { normalizeUrl } from "./crawl.js";
import { test, expect } from "@jest/globals";


test("normalizeURL",  () => {
    const input = "https://rnzn.onslate.in/contact";
    const actual = normalizeUrl(input);
    const expected = "rnzn.onslate.in/contact";
    expect(actual).toEqual(expected);
})

test("normalizeURL/with trailing slash",  () => {
    const input = "https://rnzn.onslate.in/contact/";
    const actual = normalizeUrl(input);
    const expected = "rnzn.onslate.in/contact";
    expect(actual).toEqual(expected);
})

test("normalizeURL/with capital letters",  () => {
    const input = "https://RNZN.onslate.in/contact/";
    const actual = normalizeUrl(input);
    const expected = "rnzn.onslate.in/contact";
    expect(actual).toEqual(expected);
})

test("normalizeURL/with all capital letters",  () => {
    const input = "https://RNZN.ONSLATE.IN/CONTACT/";
    const actual = normalizeUrl(input);
    const expected = "rnzn.onslate.in/contact";
    expect(actual).toEqual(expected);
})