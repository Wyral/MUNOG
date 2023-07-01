import styled from 'styled-components';

const TopBar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  background: rgb(122 122 122 / 22%);
  color: #7e5c14;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: 100;

  a img {
    width: 80px;
  }
`





const IconBar = styled.div`
  display: block;
  width: 100%;
  height: 3px;
  background: #7e5c14;
  transition: 0.3s;

  & + & {
    margin-top: 5px;
  }
`;

const Button = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  background: transparent;
  border-radius: 0;
  height: 70px;
  width: 30px;
  cursor: pointer;
  pointer-events: auto;
  margin-left: 25px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`


const Content = styled.div`
  margin-top: 80px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 80px);
  background: url("/menu-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateX(-100%);
  transition: transform 0.3s;
  will-change: transform;
  contain: paint;

  @media (max-width: 400px) {
    padding-bottom: 25% !important;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  li a {
    padding: 10px 5px;
    display: block;
    text-transform: uppercase;
    transition: color 0.1s;
  }

  li a:hover {
    color: #7e5c14;
  }

  li:not(.small) + .small {
    margin-top: auto;
  }

  .small {
    display: flex;
    align-self: center;
  }

  .small a {
    font-size: 11px;
    font-weight: 400;
    color: #888;
  }

  .small a + a {
    margin-left: auto;
  }
`;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  pointer-events: none;
  z-index: 100;
  visibility: visible;
  
  .bg {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100% - 70px);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    background: #000;
  }
  
  &:focus-within .bg {
    visibility: visible;
    opacity: 0.6;
  }

  &:focus-within ${Button} {
    pointer-events: none;
  }
  
  &:focus-within ${Button} ${IconBar}:nth-of-type(1) { // Verkettung geht nur mit unmittelbaren unterobjekten.
                                                       // &:focus-within ${IconBar} geht nicht.
    transform: translate3d(0, 8px, 0) rotate(45deg);
  }
  
  &:focus-within ${Button} ${IconBar}:nth-of-type(2) {
    opacity: 0;
  }
  
  &:focus-within ${Button} ${IconBar}:nth-of-type(3) {
    transform: translate3d(0, -8px, 0) rotate(-45deg) !important;
  }

  &:focus-within ${Content} {
    transform: none;
  }
`;



export { TopBar, Container, IconBar, Button, Content };