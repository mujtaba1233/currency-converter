const { default: axios } = require("axios");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors")
dotenv.config();
app.use(express.json());
app.use(cors())
app.post("/api/convert", async (req, res) => {
  const amount = req.body.amount;
  try {
    if (typeof Number(amount) !== "number") {
      res.status(400).send("Invalid");
    } else {
      const config = {
        headers: {
          apikey: process.env.API_KEY,
        },
      };
      const response = await axios.get(
        `https://api.apilayer.com/exchangerates_data/convert?to=${
          req.body.to
        }&from=USD&amount=${amount.toString()}`,
        config
      );
      const data = JSON.parse(JSON.stringify(response.data));
      res.status(200).json({ result: data.result });
    }
    
  } catch (error) {
    res.status(400).send("Invalid")
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${PORT} port`));
