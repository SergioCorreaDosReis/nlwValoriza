import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Olá to no ar 👍");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá to no ar POST 👍");
});

app.listen(3000, () => console.log("Server is running!"));
