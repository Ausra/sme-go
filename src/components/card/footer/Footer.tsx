import Button from "../../button/Button";
import { FunctionComponent } from "react";
import styled from "styled-components/macro";

export interface FooterProps {
  dataTestId?: string;
  children?: string;
  handleNextClick?: () => void;
  handleBackClick?: () => void;
  primaryButtonType?: "button" | "submit";
  hidePrimaryButton?: boolean;
  primaryButtonDisabled?: boolean;
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
  handleNextClick,
  handleBackClick,
  primaryButtonType,
  hidePrimaryButton,
  primaryButtonDisabled,
}) => {
  return (
    <Container>
      <Button title="Back" onClick={handleBackClick} />
      {!hidePrimaryButton && (
        <Button
          disabled={primaryButtonDisabled}
          title="Next"
          primary
          onClick={handleNextClick}
          type={primaryButtonType}
        />
      )}
    </Container>
  );
};

export default Footer;
