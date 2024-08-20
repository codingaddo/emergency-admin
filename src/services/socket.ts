// src/socket.ts
import { io, Socket } from "socket.io-client";
import { BASE_URL } from "./apitAuth";

// const URL = "http://your-server-url"; // Replace with your server URL
export const socket: Socket = io(BASE_URL, {
  autoConnect: false,
});

// You can create functions to connect and disconnect the socket
export const connectSocket = () => socket.connect();
export const disconnectSocket = () => socket.disconnect();
