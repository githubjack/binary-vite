import { Inline } from '@bedrock-layout/inline';
import styled from 'styled-components';

const Logo = styled.img`
  width: 60px;
`;

export function Menu() {
  return (
    <Inline stretch={1} gutter='size3'>

      <span>Binary logo</span>
      <Inline gutter='size3' justify='start'>
        <a href="/#">Home</a>
        <a href="/#">Profile</a>
        <a href="/#">Work</a>
        <a href="/#">Blogs</a>
      </Inline>

      <Inline gutter='size3'>
        <button>Contact</button>
      </Inline>
    </Inline>
  );
}