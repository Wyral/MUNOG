import { styled } from "styled-components";

const Wrapper = styled.div`
    background-image: url('/backdrop-earth.webp');
    background-size: cover;
    background-position: center;
    height: 100vh;
`

const Header = styled.h1`
  position: absolute;
  top: 350px;
  padding-left: 50px;
  font-size: 36px;
  font-weight: 400;

  @media (max-width: 500px) {
    display: flex;
    padding-left: 20px;
    font-size: 25px;
    position: absolute;
    top: 150px;
  }
`;


const Subtext = styled.p`
  position: absolute;
  top: 400px;
  padding-left: 50px;
  font-size: 25px;
  font-weight: 200;
  width: 90%;

  @media (max-width: 500px) {
    display: flex;
    padding-left: 20px;
    font-size: 15px;
    position: absolute;
    top: 180px;
  }
`

const HeaderButton = styled.button`
  padding: 10px 0;
  width: 300px;
  text-align: center;
  border-radius: 1000px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(129, 230, 246, 0.075);
  border: none;

  @media not all and (pointer: coarse) {
  &:hover {
        transform: scale(1.2);
        transition: transform 0.2s ease-in-out;
    }
  }

  position: absolute;
  top: ${props => props.top}px;
  left: 50px;
  @media (max-width: 500px) {
    top: ${props => props.top - 200}px;
    left: 20px;
  }
  font-size: 25px;
  font-weight: 200;
  cursor: pointer;
`



const Arrow = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    i {
        width: 50px;
        height: 50px;
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
    }
`


export { Arrow, Wrapper, HeaderButton, Subtext, Header };