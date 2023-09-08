import { useEffect, useRef, useState } from "react";
import * as WebSocket from "websocket";

interface UserWsResult {
  isReady: boolean;
  messages: string[];
  send: (data: string) => void;
}

export const UserWs = (url: string): UserWsResult => {
  const [isReady, setIsReady] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const ws = useRef<WebSocket.w3cwebsocket | null>(null);

  useEffect(() => {
    const socket: WebSocket.w3cwebsocket | null = new WebSocket.w3cwebsocket(
      url
    );

    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) =>
      setMessages((prev) => {
        const ret = JSON.parse(event.data as string);
        return [...prev, ret];
      });

    if (socket) {
      ws.current = socket;
    }

    return () => {
      socket.close();
    };
  }, []);

  const send = (data: string) => {
    if (ws.current) {
      ws.current.send(data);
    }
  };

  return { isReady, messages, send };
};
