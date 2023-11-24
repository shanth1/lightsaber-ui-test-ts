import './App.css';

import { DesignProvider, Button, Box, Typography, Text } from 'lightsaber-ui';

function App() {
  return (
    <div className="App">
      <DesignProvider config={{ borderRadius: 'sm' }}>
        <Typography end>hello</Typography>
        <Text center>ohohoh</Text>
        <Text justify>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          officiis rem quam dignissimos, veritatis iusto quaerat veniam sit,
          expedita facere nam cum voluptatem recusandae sed molestiae.
          Repudiandae unde delectus porro!
        </Text>
        <Text>ohohoh</Text>
        <Box p={2}>
          <form action="">
            Hello
            <input type="text" />
            <input type="password" />
            <Button
              submit
              disabled
              onClick={(e) => {
                console.log(1);
              }}
              py={2}
              color="red"
            >
              <Box color="green">test</Box>
              <Box color="green">test</Box>
              <Box color="green">test</Box>
              <Box color="green">test</Box>
            </Button>
          </form>
        </Box>
      </DesignProvider>
    </div>
  );
}

export default App;
