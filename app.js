const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const hotelRouter = require("./routes/api/hotels"); // імпортуємо маршрути
const userRouter = require("./routes/api/users");
const adminRouter = require("./routes/api/admins");

const app = express(); // app - веб-сервер
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(cors()); // перехресні запити та передачі даних між  web-серверами
app.use(express.json()); // для обробки формату запитів та відповіді - веб-сервер, frontend
app.use(express.static("public")); // для збереження файлів

app.use("/api/hotels", hotelRouter); // обробляє маршрути вказуємо endpoint - /api/books
app.use("/api/users", userRouter);
app.use("/api/admins", adminRouter);

app.use(logger(formatsLogger));

app.use((req, res) => {
  // функція спрацьовує коли відсутня сторінка
  res.status(404).json({ message: "Not found" });
});

// Загальна помилка серверу
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
