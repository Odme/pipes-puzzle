# Pipes Puzzle
Evolution Home Challenge

## Technologies

### ThreeJS [Fiber](https://docs.pmnd.rs/react-three-fiber/) - Why?

- Easy to follow
- Great documentation
- Big community
- Tested and still in constant mantenance
- Declarative

### React API Context - Why?

- Light
- Easy implementation
- Little Application

### Styled Components - Why?

- Declarative styled components
- Maintain the same HTMLElement attributes
- Easy way to inject a thme
- Composed components looks cleaner


## Which are the parts of the code are most impressive to look at?

- Provider delegation and distribution with Sockect Instance, Services, Data Management and Theming
- Data mapping
- Component Parting


## Which are the aspects of the code that you are not so proud of? And why is that?

- ThreeJs usage `-` Idk if I'm using all related to the library in a correct way
- Socket Message parsing, probably I'm losing some messages and they aren't storaged in the state


## Level Passwords Obtained

- Still in progress

## Known Limitations

- Probably the state management, with a higher WebGL resources and elements probably I need move my state management to a different library like Redux or MobX

## Key Design Decisions Made

- Readability, easy to follow and understand for everyone
- Light solution and easy to modify

## How to launch the solution.

### Instalation

- Clone the ropository
- Run `npm install` in the terminal
- Add `.env` file to the root with `VITE_WEBSOCKET_URL=<WS URL HERE>` variable

### Run

- Run `npm start` in the terminal
- Go to `http://localhost:3000` in your favorite browser (or Ctrl/Cmd + Click in the link on terminal)
- Enjoy!
