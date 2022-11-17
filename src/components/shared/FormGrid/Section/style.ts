import styled from 'styled-components';

export const StyledFormSection = styled.div`
  margin-bottom: 0.5rem;

  .MuiFormControl-root,
  .MuiFormControl-root label.MuiFormControlLabel-root,
  .MuiInputBase-root,
  .MuiInputBase-input {
    width: 100%;
  }
`;

export const StyledInlineFormSection = styled(StyledFormSection)`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;

  & > span {
    display: inline-block;
    margin-right: 5px;
    width: auto;
    margin-bottom: 0;
  }
`;

export const StyledFormGridSection = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;

  &:first-of-type {
    margin-top: 0;
  }
`;
