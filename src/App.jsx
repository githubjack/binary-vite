import { Stack } from "@bedrock-layout/stack";
import { Inline } from "@bedrock-layout/inline";
import { Cover } from "@bedrock-layout/cover";
import { Center } from "@bedrock-layout/center";
import { Subscribe } from "./Subscribe";
import { Menu } from "./Menu";
import styled from "styled-components";

const UserInterface = styled.div`
  padding-inline: 2em;
  background-color: #242424;
`;
function App() {
  return (
    <UserInterface>
<Stack gutter='size3'>
  <Cover minHeight="50vh" gutter='size3' top={<Menu />}>
    <Center maxWidth="60em" centerChildren>
    <Stack as="header" gutter='size3'>
          <h1>Think. Create. Solve.</h1>
          <p>Passionate Fullstack and UI developer</p>
          <Inline gutter='size3'>
            <button>Learn More</button>
          </Inline>
    </Stack>
    </Center>
  </Cover>
  <Center maxWidth="60em" centerChildren>
  <Subscribe />
  </Center>

 </Stack> 
</UserInterface>
  );
}

export default App;