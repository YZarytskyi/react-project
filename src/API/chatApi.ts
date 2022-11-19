import { WsMessage } from "./../Types/types";

type SubscriberType = (messages: WsMessage[]) => void;

let subscribers = [] as Array<SubscriberType>;

let ws: WebSocket | null = null;

function onCloseHandle() {
  setTimeout(createChannel, 3000);
}
function onMessageHandle(e: MessageEvent) {
  const newMessage = JSON.parse(e.data);
  subscribers.forEach((el) => el(newMessage));
}

function cleanup() {
  ws?.removeEventListener("close", onCloseHandle);
  ws?.removeEventListener("message", onMessageHandle);
}

export const createChannel = () => {
  cleanup();
  ws?.close();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  ws.addEventListener("close", onCloseHandle);
  ws.addEventListener("message", onMessageHandle);
};

export const chatAPI = {
  startChannel() {
    createChannel();
  },
  stop() {
    subscribers = [];
    cleanup();
    ws?.close();
  },
  subscribe(cb: SubscriberType) {
    subscribers.push(cb);
  },
  unsubscribe(cb: SubscriberType) {
    subscribers = subscribers.filter((el) => el !== cb);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
