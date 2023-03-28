import { Inline } from '@bedrock-layout/inline';
import { InlineCluster } from '@bedrock-layout/inline-cluster';
import { ReactComponent as LogoImage } from './assets/binary-logo.svg';
/*import { Logo } from './components/Logo';*/
import styled from 'styled-components';
import './index.css';


const SvgComponent = styled.span`
  display: flex;
  width: auto;
  height:100%;
  padding-inline-end: 1em;
`;

export function Menu() {
  return (
    <Inline stretch={1} gutter='size3' align='center' switchAt='40rem'>
      <SvgComponent>
        <LogoImage className="logo-svg" />
     </SvgComponent>
      <InlineCluster gutter='size3' justify='start'>
        <a href="/#">Home</a>
        <a href="/#">Profile</a>
        <a href="/#">Work</a>
        <a href="/#">Blogs</a>
      </InlineCluster>

      <Inline gutter='size3' justify='end'>
        <button>Contact</button>
      </Inline>
    </Inline>
  );
}