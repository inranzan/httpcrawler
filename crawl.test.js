import { normalizeUrl } from "./crawl.js";
import { test, expect } from "@jest/globals";


test("normalizeURL",  () => {
    const input = "https://rnzn.onslate.in/contact";
    const actual = normalizeUrl(input);
    const expected = "rnzn.onslate.in/contact";
    expect(actual).toEqual(expected);
})