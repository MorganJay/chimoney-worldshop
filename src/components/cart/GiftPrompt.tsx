import styled from 'styled-components';

import { breakpointMd } from '../../variables.styles';

interface Props {
  children?: React.ReactNode | string;
  label?: string;
}

const GiftPrompt = ({ children, label }: Props) => {
  return (
    <Container className="gift">
      <Checkbox type="checkbox" name="gift-option" id="gift-inside" />
      {children || label}
    </Container>
  );
};

export default GiftPrompt;

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  @media (min-width: ${breakpointMd}px) {
    margin-bottom: 12px;
    gap: 5px;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (min-width: ${breakpointMd}px) {
    width: 13px;
    height: 13px;
  }
`;
