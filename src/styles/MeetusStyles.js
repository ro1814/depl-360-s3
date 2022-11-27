import styled from "styled-components";

export const MeetTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  width: auto;

  @media (max-width: 924px) {
    width: auto;
  }
`;

export const Title = styled.h1`
  margin: 2%;
  font-weight: bolder;
  color: #004E77 ;

  @media (max-width: 924px) {
    width: auto;
  }
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 5%;
  position: relative;
  text-align: justify;
  width: auto;

  @media (max-width: 924px) {
    width: 100%;
    margin-left: 0;
    padding: 3%;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px;
  color: #6b6b6e;

  @media (max-width: 924px) {
    width: auto;
    margin-right: 0px;
    line-height: 1rem;
    font-size: large;
  }
`;

export const MobileCard = styled.div`
  @media (max-width: 924px) {
    display: grid;
    flex-direction: column;
  }
`;
export const BioName = styled.h5`
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 924px) {
    align-self: center;
    margin-left: 10px;
    justify-content: flex-end;
  }
`;

export const BioSpan = styled.span`
  @media (max-width: 924px) {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`;
export const BioParagraph = styled.p`
  font-size: 18px;
  text-align: justify;
  margin: 30px;
  padding: 5px;
  
  @media (max-width: 924px) {
    padding: 15px;
    margin: 3px;
  }
`;
export const BioImagen = styled.img`
  background: #efefef;
  text-align: center;
  filter: grayscale(100%);
  @media (max-width: 924px) {
    background: #efefef !important;
    border-color:#cbedff ;
    
  }
`;

export const ContainerModal = styled.div`


  @media (max-width: 924px) {
    
    position: relative;
    margin-top: -50px !important;
    padding: 1px !important;

    
  }

`;
