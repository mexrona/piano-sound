import {describe, expect, test} from "@jest/globals";
import {sendMessage} from "./sendMessage";

describe("send message", () => {
    test("set message text", () => {
        expect(sendMessage("Message")).toBe("Message");
    });
});
