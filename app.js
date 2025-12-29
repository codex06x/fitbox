const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// public klasörünü statik dosya klasörü yap
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Kalori uygulaması çalışıyor: http://localhost:${PORT}`);
});
