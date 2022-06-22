export const connectSocket = (url: string): WebSocket => {
  const socket = new WebSocket('wss://hometask.eg1236.com/game-pipes/');

  return socket;
  socket.onopen = function (_e) {
    alert('[open] Connection established');
    alert('Sending to server');
    socket.send('new 1');
    socket.send('map');
  };

  socket.onmessage = function (event) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    alert(`[message] Data received from server: ${event.data}`);
    console.log(event.data);
  };

  socket.onclose = function (event) {
    if (event.wasClean) {
      alert(
        `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`,
      );
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
  };

  socket.onerror = function (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
    alert(`[error] ${error.message || ''}`);
  };
};
