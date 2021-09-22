import React from "react";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("localhost:5000");

const Chat = () => {
  return (
    <div>Chat</div>
  )
};

export default Chat;