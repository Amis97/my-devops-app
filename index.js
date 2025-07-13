const http = require("http");
const server = http.createServer((requestAnimationFrame,res) => {
    res.end("Hello from DevOps App!");
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
