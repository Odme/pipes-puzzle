export interface Services {
  requestCurrentMap: () => void;
  // eslint-disable-next-line no-unused-vars
  requetNewLevel: (level: number) => void;
}

export const getServices = (socket: WebSocket): Services => ({
  requestCurrentMap: () => {
    socket.send('map');
  },
  requetNewLevel: (level: number) => {
    socket.send(`new ${level}`);
  },
});
