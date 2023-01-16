import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { linkColor } from '../../variables.styles';

const SavedItemPrompt = () => {
  return (
    <SavedItemPromptContainer>
      <SavedItemMessageContainer>
        <SavedItemMessage>
          <SavedItemLink to="">
            fireCable Wireless USB Cable for Powering Fire TV Stick or Fires...
          </SavedItemLink>{' '}
          has been moved to Saved for Later.
        </SavedItemMessage>
      </SavedItemMessageContainer>
    </SavedItemPromptContainer>
  );
};

export default SavedItemPrompt;

const SavedItemPromptContainer = styled.div`
  /* padding: 0rem 0 0.857rem 0rem; */
  margin-top: 1rem;
  border-top: 1px solid #e7e7e7;
`;

const SavedItemMessageContainer = styled.div`
  padding: 0.5rem 1.286rem 0;
`;

const SavedItemMessage = styled.span`
  line-height: 1.429rem;
`;

const SavedItemLink = styled(Link)`
  color: ${linkColor};
`;
