export const FETCH_NOTES: string = "FETCH_NOTES";
export const FETCH_NOTES_SUCCESS: string = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_ERROR: string = "FETCH_NOTES_ERROR";

const VALID_BLACK_KEYS: string[] = ["s", "d", "g", "h", "j"];
const VALID_WHITE_KEYS: string[] = ["z", "x", "c", "v", "b", "n", "m"];
export const VALID_KEYS: string[] = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

export const NOTES: string[] = [
    "c",
    "df",
    "d",
    "ef",
    "e",
    "f",
    "gf",
    "g",
    "af",
    "a",
    "bf",
    "b",
];

export const NOTE_TO_KEY: {[key: string]: string} = {
    c: "z",
    df: "s",
    d: "x",
    ef: "d",
    e: "c",
    f: "v",
    gf: "g",
    g: "b",
    af: "h",
    a: "n",
    bf: "j",
    b: "m",
};

export const KEY_TO_NOTE: {[key: string]: string} = {
    z: "c",
    s: "df",
    x: "d",
    d: "ef",
    c: "e",
    v: "f",
    g: "gf",
    b: "g",
    h: "af",
    n: "a",
    j: "bf",
    m: "b",
};
