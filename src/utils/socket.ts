interface SockectMessage {
  key: string;
  payload: string;
}

export const parseSockectMessage = (message: string): SockectMessage => {
  const cleanMessage = message.split(':').map((value) => value.trim());
  const newMessage = { key: cleanMessage[0], payload: cleanMessage[1] };
  return newMessage;
};
