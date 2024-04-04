import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useToken from '../../../hooks/useToken';
import { saveBooking, updateBooking } from '../../../services/bookingApi';

export default function BookRoomButon({ roomData, booked }) {
  const token = useToken();
  const [enrollment, setEnrollment] = useState(null);
  const info = useEnrollment();

  useEffect(() => {
    if (info.enrollment !== null) {
      setEnrollment(info.enrollment);
    }
  }, [info.enrollmentLoading]);

  const display = {
    true: 
      <StyledButton onClick={() => updateBooking(enrollment?.userId, roomData.id, booked?.id, token)}>
        <StyledButtonText>{'RESERVAR QUARTO'}</StyledButtonText>
      </StyledButton>,
    false: 
      <StyledButton onClick={() => saveBooking(enrollment?.userId, roomData.id, token)}>
        <StyledButtonText>{'RESERVAR QUARTO'}</StyledButtonText>
      </StyledButton>,
  };

  return (
    <>
      {display[booked !== false]}
    </>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0 12px;
  width: 182px;
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
