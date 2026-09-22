const express = require("express");
const app = express();
app.use(express.json());
app.get("/health", (_req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  app.listen(3000, "0.0.0.0");
}

module.exports = app;
