import styled from 'styled-components';

export default function SummaryButton({ onClick, children }) {
  return (
    <StyledButton onClick={onClick}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0 12px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border-color: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;
