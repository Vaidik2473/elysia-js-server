import { Elysia } from "elysia";
import { respinseData } from "../response";
const port = process.env.PORT || 4000;

const responseData = {
  data: [
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
    respinseData,
  ],
};

const responsev2 = {
  data: [
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
    // responseData,
  ],
};

const app = new Elysia()
  .get("/", () => {
    return {
      respinseData,
    };
  })
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
