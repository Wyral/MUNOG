import { styled } from "styled-components";

const DropdownContent = styled.div`
  display: ${props => props.$show ? 'block' : 'none'};
  position: absolute;
  z-index: 1;
  background-color: #f9f9f9;
  width: 190px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 16px;


  a:hover {
    color: #7e5c14;
  }


  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: center;
  }

  &.show {
    display: block;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 12px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 20px;
  width: 190px;
  display: block;

  i {
    color: black;
    padding-right: 20px;
  }

  i + i {
    padding-left: 10px;
    padding-right: 0;
  }
`;


const TextBlock = styled.div`
  text-align: center;
  max-width: 1000px; 

  a {
    text-decoration: none;
    color: #7e5c14;
    word-break: break-all;
  }

  p, a {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`


export { DropdownContainer, DropdownButton, DropdownContent, TextBlock };