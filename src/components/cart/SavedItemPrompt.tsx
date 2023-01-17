import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpointMd, linkColor } from '../../variables.styles';
import { EcommerceCartItem } from '../../types/cart';
import { ItemActionPrompt } from '../../redux/cartPageReducer';

interface Props {
  itemPrompt: ItemActionPrompt | undefined;
  item: EcommerceCartItem;
}

const SavedItemPrompt = ({ item, itemPrompt }: Props) => {
  return (
    <SavedItemPromptContainer>
      <SavedItemMessageContainer>
        <SavedItemMessage>
          <SavedItemLink href={item.url} target="_blank">
            {item.name}
          </SavedItemLink>{' '}
          {itemPrompt}
        </SavedItemMessage>
      </SavedItemMessageContainer>
    </SavedItemPromptContainer>
  );
};

export default SavedItemPrompt;

const SavedItemPromptContainer = styled.div`
  padding: 1rem 0 0.5rem;
  margin-top: 1rem;
  border-top: 1px solid #e7e7e7;
`;

const SavedItemMessageContainer = styled.div`
  padding: 0.5rem 1.286rem 0;
`;

const SavedItemMessage = styled.span`
  line-height: 1.429rem;
  display: flex;
  align-items: center;
`;

const SavedItemLink = styled.a`
  color: ${linkColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  display: inline-block;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #c7511f;
  }

  @media (min-width: ${breakpointMd}px) {
    max-width: 400px;
  }
`;
