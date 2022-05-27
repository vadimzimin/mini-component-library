import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    fontSize: 14/16 + 'rem',
    iconSize: 16,
    height: 24/16 + 'rem',
    inputLeftPadding: '24px',
    borderThickness: '1px'
  },
  large: {
    fontSize: 18/16 + 'rem',
    iconSize: 24,
    height: 36/16 + 'rem',
    inputLeftPadding: '36px',
    borderThickness: '2px'
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...deligated
}) => {
  const sizeStyles = sizes[size];

  return (
    <Wrapper sizeStyles={sizeStyles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon size={sizeStyles.iconSize} id={icon}></Icon>
      </IconWrapper>
      <Input type="text" width={width} sizeStyles={sizeStyles} {...deligated}></Input>
    </Wrapper>
  );
};

const Input = styled.input`
  height: ${p => p.sizeStyles.height};
  width: ${p => p.width + 'px'};

  padding-left: ${p => p.sizeStyles.inputLeftPadding};

  color: ${COLORS.gray700};
  font-size: ${p => p.sizeStyles.fontSize};
  font-weight: 700;

  border: none;
  border-bottom: ${p => p.sizeStyles.borderThickness} solid ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }  
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
    
    ${Input} {
      color: ${COLORS.black};
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;

  display: flex;
  align-items: center;
`;

export default IconInput;