import {describe, expect, test} from "@jest/globals";
import {fetchNotes} from "../store/action-creators/note";

describe("fetchNotes module", () => {
    test("fetch notes list", () => {
        expect(fetchNotes()).toBe(localStorage.getItem("notes"));
    });
});
