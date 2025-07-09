import fs from "fs";
// Copia todos os arquivos  e pastas da pasta portfolio/dist e cola no .
fs.cpSync("./dist", "../", { recursive: true });