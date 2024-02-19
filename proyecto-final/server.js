import express from "express";



// Server
const server = express();
const PORT = process.env.PORT || 8080; 
const ready = () => {
  console.log("server ready on port " + PORT);
  dbConnection();
};
const httpServer = createServer(server);
const socketServer = new Server(httpServer);
httpServer.listen(PORT, ready);
socketServer.on("connection", socketUtils);