import { Elysia } from "elysia";
import { respinseData } from "../response";

const app = new Elysia().post("/hi", () => respinseData).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
