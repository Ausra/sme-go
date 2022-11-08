import { FunctionComponent, ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

interface CardProps {
  dataTestId?: string;
  children?: ReactElement;
  title?: string;
}

export const defaultTestId = "styled-card-container";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-height: 400px;
  border-radius: 24px;
  background-color: ${defaultTheme.cardBackground};
  margin: 24px;
  padding: 24px 24px;
`;
const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

const Card: FunctionComponent<CardProps> = ({
  dataTestId,
  children,
  title,
}) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Header title={title} />
      <ContentLayout>{children}</ContentLayout>
      <Footer />
    </Container>
  );
};

export default Card;
