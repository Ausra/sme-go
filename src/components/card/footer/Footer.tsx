import Button from "../../button/Button";
import { FunctionComponent } from "react";
import styled from "styled-components/macro";

export interface FooterProps {
  dataTestId?: string;
  children?: string;
  handleNextClick?: () => void;
  handleBackClick?: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const Footer: FunctionComponent<FooterProps> = ({
  dataTestId,
  children,
  handleNextClick,
  handleBackClick,
}) => {
  return (
    <Container>
      <Button title="Back" onClick={handleBackClick} />
      <Button title="Next" primary onClick={handleNextClick} />
    </Container>
  );
};

export default Footer;
