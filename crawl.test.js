import { normalizeUrl } from "./crawl.js";
import { test, expect } from "@jest/globals";


test("normalizeURL",  () => {
    const input = ""
    const actual = normalizeUrl(input);
    const expected = ""
    expect(actual).toEqual(expected);
})