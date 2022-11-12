import { FunctionComponent, ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

interface CardProps {
  dataTestId?: string;
  children?: ReactElement[] | ReactElement;
  title?: string;
  handleNextClick?: () => void;
  handleBackClick?: () => void;
  primaryButtonType?: "button" | "submit";
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
  handleNextClick,
  handleBackClick,
  primaryButtonType,
}) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Header title={title} />
      <ContentLayout>{children}</ContentLayout>
      <Footer
        primaryButtonType={primaryButtonType}
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
      />
    </Container>
  );
};

export default Card;
