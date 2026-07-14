import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/ai", async (req, res) => {
  const userInput = req.body.input;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-5.4-mini",
      input: userInput
    })
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Server running on port 3000"));
