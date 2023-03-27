import { Stack } from "@bedrock-layout/stack";

import { Subscribe } from "./Subscribe";
import { Menu } from "./Menu";
import styled from "styled-components";

const UserInterface = styled.div`
  width: 1170px;
  margin-inline: auto;
  padding-inline: 2em;
`;
function App() {
  return (
    <UserInterface>
    <Stack gutter='size3'>
      <Menu />
      <Subscribe />
    </Stack>
    </UserInterface>
  );
}

export default App;