import React from 'react';
import { createComponent as cc } from 'react-fela';

const ButtonWrapper = cc(
  () => ({
    backgroundColor: 'blue',
    border: '1px solid orange',
    width: 'calc(100% - 40px)',
    height: '100px',
    fontSize: '32px',
    margin: '20px',
  }),
  'button',
  ['onClick'],
);

export const ExampleButton = ({ onClick, label }) => (
  <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>
);
