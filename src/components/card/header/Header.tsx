import Text from "../../text/Text";
import { FunctionComponent } from "react";
import styled from "styled-components/macro";

interface HeaderProps {
  dataTestId?: string;
  title?: string;
}

const Container = styled.div`
  height: 100px;
`;

const defaultTestId = "card-header-container";

const Header: FunctionComponent<HeaderProps> = ({ dataTestId, title }) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Text size="large">{title}</Text>
    </Container>
  );
};

export default Header;
