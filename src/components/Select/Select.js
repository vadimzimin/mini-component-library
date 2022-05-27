import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <OriginalSelect value={value} onChange={onChange}>{children}</OriginalSelect>
      <StyledSelect>
        <DisplayedValue>{displayedValue}</DisplayedValue>
        <Icon id="chevron-down" size={24}></Icon>
      </StyledSelect>
    </Wrapper>
  );
};

const OriginalSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  appearance: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
   
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

  font-size: 1rem;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  border-radius: inherit;

  padding: 0.75rem 1rem;

  ${OriginalSelect}:focus + & {
    outline: 2px solid black;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const DisplayedValue = styled.span`
  margin-right: 18px;
`;

export default Select;
