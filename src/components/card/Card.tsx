import { FunctionComponent, ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

interface CardProps {
  dataTestId?: string;
  children?: ReactElement[] | ReactElement;
  title?: string;
  handlePrimaryButtonClick?: () => void;
  handleSecondaryButtonClick?: () => void;
  primaryButtonType?: "button" | "submit";
  primaryButtonDisabled?: boolean;
  hidePrimaryButton?: boolean;
}

export const defaultTestId = "styled-card-container";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 400px;
  border-radius: 24px;
  background-color: ${defaultTheme.cardBackground};
  padding: 24px 24px;
`;
const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 0 24px;
`;

const Card: FunctionComponent<CardProps> = ({
  dataTestId,
  children,
  title,
  handlePrimaryButtonClick,
  handleSecondaryButtonClick,
  primaryButtonType,
  hidePrimaryButton,
  primaryButtonDisabled,
}) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Header title={title} />
      <ContentLayout>{children}</ContentLayout>
      <Footer
        primaryButtonDisabled={primaryButtonDisabled}
        primaryButtonType={primaryButtonType}
        handlePrimaryButtonClick={handlePrimaryButtonClick}
        handleSecondaryButtonClick={handleSecondaryButtonClick}
        hidePrimaryButton={hidePrimaryButton}
      />
    </Container>
  );
};

export default Card;
