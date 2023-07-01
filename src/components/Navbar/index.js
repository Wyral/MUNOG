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
          <Link href="about.html">About</Link>
          <Link href="newsroom.html">News</Link>
          <Link href="support-us.html">Support Us</Link>
          <Link href="galerie.html">Galerie</Link>
          <Link href="archive.html">Archive</Link>
          <Link href="press.html">Press</Link>
          <Link href="contact.html">Contact</Link>
          <SmallLinks data={{
            "Partner": "partner.html", 
            "Imprint": "imprint.html", 
            "Contact": "contact.html", 
            "Privacy": "privacy.html"
          }} />
          <SmallLinks data={{
            "Partner": "partner.html", 
            "Impressum": "imprint.html", 
            "Kontakt": "contact.html", 
            "Datenschutz": "privacy.html", 
            "Login": "login.html"
          }} />
        </ul>
      </Content>
    </Container>
  </>
);

export default Navbar;