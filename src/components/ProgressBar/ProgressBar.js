/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  large: {
    height: '16px',
    borderRadius: '8px',
    padding: '4px'
  },
  medium: {
    height: '12px',
    borderRadius: '4px',
    padding: '0'
  },
  small: {
    height: '8px',
    borderRadius: '4px',
    padding: '0'
  }
};

const ProgressBar = ({ value, size }) => {
  const sizeStyles = sizes[size];

  return (
    <Wrapper
      sizeStyles={sizeStyles}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper value={value} sizeStyles={sizeStyles}>
        <Bar value={value} sizeStyles={sizeStyles}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: ${p => p.sizeStyles.borderRadius};
  padding: ${p => p.sizeStyles.padding};
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: ${p => p.sizeStyles.height};
  width: ${p => p.value + '%'};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;