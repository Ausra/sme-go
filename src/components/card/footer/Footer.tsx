import Button from "../../button/Button";
import { FunctionComponent } from "react";
import styled from "styled-components/macro";

export type PrimaryButtonType = "button" | "submit";

export interface FooterProps {
  dataTestId?: string;
  children?: string;
  handlePrimaryButtonClick?: () => void;
  handleSecondaryButtonClick?: () => void;
  primaryButtonType?: PrimaryButtonType;
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

export const defaultTestId = "styled-card-footer";

const Footer: FunctionComponent<FooterProps> = ({
  dataTestId,
  handlePrimaryButtonClick,
  handleSecondaryButtonClick,
  primaryButtonType,
  hidePrimaryButton,
  primaryButtonDisabled,
}) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Button title="Back" onClick={handleSecondaryButtonClick} />
      {!hidePrimaryButton && (
        <Button
          disabled={primaryButtonDisabled}
          title="Next"
          primary
          onClick={handlePrimaryButtonClick}
          type={primaryButtonType}
        />
      )}
    </Container>
  );
};

export default Footer;
