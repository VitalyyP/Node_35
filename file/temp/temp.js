// const os = require("os");
// console.log(os.cpus());
// console.log(os.cpus().length);

const path = require("path");

// console.log(path.resolve("/foo/bar", "./baz"));
// console.log(path.resolve("/foo/bar", "tmp/file"));
// console.log(path.resolve("/foo/bar", "/tmp/file"));
// console.log(path.resolve("wwwroot", "static_files/png/", "../gif/image.gif"));

// console.log(__filename);
// console.log(__dirname); // показывает где находится скрипт
// console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));
// console.log(path.join(__dirname, "main.cjs"));

// console.log(process.pid);
// console.log(process.cwd()); // показывает откуда скрипт запускается

// process.exit(); // выходит из скрипта

process.on("exit", (code) => {
  console.log(`Code: ${code}`);
});
process.exit(1001);
console.log('Hello world!')