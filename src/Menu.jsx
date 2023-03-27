import { Inline } from '@bedrock-layout/inline';
import { InlineCluster } from '@bedrock-layout/inline-cluster';

import { Logo } from './components/Logo';
import './index.css';



export function Menu() {
  return (
    <Inline stretch={1} gutter='size3' align='center' switchAt='40rem'>
      <Logo />
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