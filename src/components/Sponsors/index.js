import { SponsorWrapper, SponsorField } from './Sponsors.style';

const Sponsor = ({ name, img, children }) => {

  return (
    <SponsorField>
      <img src={img} alt="Logo 1" />
      <h3>{name}</h3>
      <p>{children}</p>
    </SponsorField>
  );
}


const Sponsors = () => (
  <SponsorWrapper>
    <h2>
      MUNOG 2023 is sponsored by:
    </h2>
    <div>
      <div>
        <Sponsor name="Logo 1" img="https://www.sindelfingen.de/site/Sindelfingen-Internet/get/params_E-1036724146/4160936/LogoBrgerstiftung.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.
        </Sponsor>
        <Sponsor name="Logo 2" img="https://www.sindelfingen.de/site/Sindelfingen-Internet/get/params_E-1036724146/4160936/LogoBrgerstiftung.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.
        </Sponsor>
        <Sponsor name="Logo 3" img="https://www.sindelfingen.de/site/Sindelfingen-Internet/get/params_E-1036724146/4160936/LogoBrgerstiftung.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.
        </Sponsor>
        <Sponsor name="Logo 4" img="https://www.sindelfingen.de/site/Sindelfingen-Internet/get/params_E-1036724146/4160936/LogoBrgerstiftung.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.
        </Sponsor>
        <Sponsor name="Logo 5" img="https://www.sindelfingen.de/site/Sindelfingen-Internet/get/params_E-1036724146/4160936/LogoBrgerstiftung.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.
        </Sponsor>
        <Sponsor name="Logo 6" img="https://www.sindelfingen.de/site/Sindelfingen-Internet/get/params_E-1036724146/4160936/LogoBrgerstiftung.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.
        </Sponsor>
      </div>
    </div>
  </SponsorWrapper>
);

// TODO: Mobile View

export default Sponsors;