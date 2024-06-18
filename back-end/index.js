const http = require("http");
const app = require("./server");

const PORT = process.env.PORT || 8088;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
