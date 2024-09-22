import { io, Socket } from "socket.io-client";
import { BASE_URL } from "./apitAuth";

export const socket: Socket = io(BASE_URL, {
  autoConnect: false,
  transports: ["polling"], // Fallback to polling
});

// functions to connect and disconnect the socket
export const connectSocket = () => socket.connect();
export const disconnectSocket = () => socket.disconnect();
