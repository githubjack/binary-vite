import styled from 'styled-components';

const LogoImage = styled.img`
width: 60px;
display: flex;

`;

export function Logo() {
  return (
    <LogoImage src='/Binary_logo_white.png' alt='' />
  );
}