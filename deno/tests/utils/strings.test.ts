import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { getHelloMessage } from "../../utils/strings.ts";

Deno.test("server", async (t) => {
  await t.step("should return a default value for the variable name", () => {
    const message = getHelloMessage();
    assertEquals(message, "Hello, World!");
  });
});
