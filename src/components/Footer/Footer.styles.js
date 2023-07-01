import { styled } from 'styled-components';

const Wrapper = styled.footer`
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #06090e46;
  background-image: url("menu-bg.webp");
  background-size: cover;
  padding-top: 40px;
`

const Links = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin: 0 10px;
  }

  a:hover {
    color: #7e5c14;
  }
`;

const Socials = styled.ul`
  display: flex;
  justify-content: center;
  padding: 30px;

  li {
    display: inline;
    padding: 0 30px;
    cursor: pointer;
  }

  i:hover {
    color: #7e5c14;
  }
`;

export { Wrapper, Links, Socials };