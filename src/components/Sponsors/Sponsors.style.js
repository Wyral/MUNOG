import { styled } from 'styled-components';

const SponsorField = styled.div`
  margin: 20px;
  width: 25%;
  text-align: center;

  h3 {
    padding-bottom: 10px;
  }

  img {
    margin: 25px;
    height: 75px;
  }
`;

const SponsorWrapper = styled.div`
  h2 {
    text-align: center;
    margin: 25px;
    padding-top: 30px;
  }

  & > div {
    display: flex;
    padding-top: 50px;
    justify-content: center;
  }

  & > div > div {
    display: flex;
  }
`;

export { SponsorWrapper, SponsorField };