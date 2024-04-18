const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../temp");
console.log(tempDir);

// вказуємо параметри для зберігання
const multerConfig = multer.diskStorage({
  destination: tempDir,
  // непотрібно, якщо файл зберігається під ти ім'ям з яким прийшов
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// зберігання файлу
const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
