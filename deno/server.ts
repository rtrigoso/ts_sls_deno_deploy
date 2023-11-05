import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { getHelloMessage } from "./utils/strings.ts";

const env = await load();
const name = env["NAME"] || "";

Deno.serve(() => new Response(getHelloMessage(name)));
