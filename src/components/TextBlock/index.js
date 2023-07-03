import { useState, useRef, useEffect } from "react";
import { DropdownContainer, DropdownButton, DropdownContent, TextBlock } from "./TextBlock.style";

const LanguageSelector = ({ setLanguage }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  function toggle() {
    setActive(!active);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    };

    // Bind the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  
  
  function changeLang(event) {
    setLanguage(event.target.getAttribute("lang"))
    setActive(false);
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggle}><i className="fa-solid fa-language"></i>Language<i className="fa-solid fa-chevron-down arrow fa-xs"></i></DropdownButton>
      <DropdownContent ref={ref} $show={active}>
        <a onClick={changeLang} href="#" lang="de">Deutsch</a>
        <a onClick={changeLang} href="#" lang="en">English</a>
        <a onClick={changeLang} href="#" lang="fr">Français</a>
      </DropdownContent>
    </DropdownContainer>
  )
};


const Text = ( { children } ) => (
  <TextBlock>{children}</TextBlock>
);


export { LanguageSelector, Text };