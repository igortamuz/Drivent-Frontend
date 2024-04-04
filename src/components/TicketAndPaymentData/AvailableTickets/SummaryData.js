import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useToken from '../../../hooks/useToken';
import { saveTicket } from '../../../services/ticketApi';
import SummaryButton from './SummaryButton';

export default function SummaryData({ ticketData }) {
  const token = useToken();
  const [enrollment, setEnrollment] = useState({});
  const info = useEnrollment();

  useEffect(() => {
    if (info.enrollment !== null) {
      setEnrollment(info.enrollment);
    }
  }, [info.enrollmentLoading]);

  return (
    <StyledTypography>
      <SummaryText>
        <>{'Fechado! O total ficou em '}</>
        <BoldSpan>{`R$ ${ticketData.price}`}</BoldSpan>
        <>{'. Agora é só confirmar:'}</>
      </SummaryText>
      <SummaryButton onClick={() => saveTicket(enrollment?.id, ticketData.id, token)}>RESERVAR INGRESSO</SummaryButton>
    </StyledTypography>
  );
}

const StyledTypography = styled(Typography)`
  margin-top: 44px !important;
  height: 23px !important;
  font-weight: 200 !important;
  font-size: 16px !important;
`;

const SummaryText = styled.p`
  color: #8e8e8e;
  size: 20px;
  margin-bottom: 17px;
`;

const BoldSpan = styled.span`
  font-weight: 600;
`;
