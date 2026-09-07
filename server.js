const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const DATA_FILE = path.join(__dirname, "accounts.json");

function getAccounts() {
  return JSON.parse(
    fs.readFileSync(DATA_FILE, "utf8")
  );
}

app.get("/", (req, res) => {
  res.json({
    name: "Account Check API",
    status: "online"
  });
});

app.get("/api/account/:id", (req, res) => {
  const id = req.params.id.toLowerCase();
  const accounts = getAccounts();

  const account = accounts.find(
    item => item.id.toLowerCase() === id
  );

  if (!account) {
    return res.status(404).json({
      found: false,
      message: "Account not found"
    });
  }

  res.json({
    found: true,
    id: account.id,
    status: account.status,
    reason: account.reason,
    duration: account.duration,
    reviewAvailable: account.reviewAvailable
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
