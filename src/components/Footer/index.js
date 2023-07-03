import { Wrapper, Links, Socials } from "./Footer.styles";

const Footer = () => (
  <Wrapper>
    <Links>
      <a href="./imprint">Imprint</a>
      <a href="./privacy">Privacy</a>
      <a href="./contact">Contact</a>
      <a style={{ paddingLeft: "30px" }} href="https://codesandbox.io/s/wezbbl">Login</a>
    </Links>
    <Socials>
      <a href="https://snapchat.com/add/munog.official" target="_blank">
        <li>
          <i className="fa-brands fa-duotone fa-snapchat fa-2x"></i>
        </li>
      </a>
      <a href="https://www.instagram.com/munog.official/" target="_blank">
        <li>
          <i className="fa-brands fa-duotone fa-instagram fa-2x"></i>
        </li>
      </a>
      <a href="https://m.youtube.com/@MunogDe/" target="_blank">
        <li>
          <i className="fa-brands fa-duotone fa-youtube fa-2x"></i>
        </li>
      </a>
    </Socials>
  </Wrapper>
);

export default Footer;