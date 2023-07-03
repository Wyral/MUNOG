import { TopBar, Container, IconBar, Button, Content } from './navbar.styles';

const Link = ({href, children}) => (
  <li><a href={href}>{children}</a></li>
)

const SmallLinks = ({data}) => (
  <li className="small">
    {Object.entries(data).map(([name, href]) => (
        <a href={href} key={href}>{name}</a>
      ))}
  </li>
)

const Navbar = () => (
  <>
    <TopBar tabIndex="0">
      <a href="/"><img src="/munog-logo.svg" alt=""></img></a>
    </TopBar>
    <Container>
      <div className="bg"></div>
      <Button tabIndex="0">
        <IconBar className="icon-bar"></IconBar>
        <IconBar className="icon-bar"></IconBar>
        <IconBar className="icon-bar"></IconBar>
      </Button>
      <Content tabIndex="0">
        <ul>
          <Link href="about">About</Link>
          <Link href="newsroom">News</Link>
          <Link href="support-us">Support Us</Link>
          <Link href="galerie">Galerie</Link>
          <Link href="archive">Archive</Link>
          <Link href="press">Press</Link>
          <Link href="contact">Contact</Link>
          <SmallLinks data={{
            "Partner": "partner", 
            "Imprint": "imprint", 
            "Contact": "contact", 
            "Privacy": "privacy"
          }} />
          <SmallLinks data={{
            "Partner": "partner", 
            "Impressum": "imprint", 
            "Kontakt": "contact", 
            "Datenschutz": "privacy", 
            "Login": "login"
          }} />
        </ul>
      </Content>
    </Container>
  </>
);

export default Navbar;