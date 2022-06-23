export const getSocket = (url: string): WebSocket => {
  const socket = new WebSocket(url);

  return socket;
};
