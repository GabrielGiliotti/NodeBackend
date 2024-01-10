import http from "http";

const PORT = 3000;

const routes = {
    "/" : "Node.js course",
    "/books" : "Books route",
    "/authors" : "Authors route" 
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end(routes[req.url]);
});

server.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
});