export interface Services {
  requestCurrentMap: () => void;
  // eslint-disable-next-line no-unused-vars
  requestNewLevel: (level: number) => void;
  requestVerifyLevel: () => void;
  // eslint-disable-next-line no-unused-vars
  requestRotatePipe: (x: number, y: number) => void;
}

export const getServices = (socket: WebSocket): Services => ({
  requestCurrentMap: () => {
    socket.send('map');
  },
  requestNewLevel: (level) => {
    socket.send(`new ${level}`);
  },
  requestVerifyLevel: () => {
    socket.send('verify');
  },
  requestRotatePipe: (x, y) => {
    socket.send(`rotate ${x} ${y}`);
    socket.send('map');
  },
});
