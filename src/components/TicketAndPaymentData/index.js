import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Payment from './AvailableTickets/Payment';
import NoEnrollment from './NoEnrollment';

const display = {
  true: <Payment />,
  false: <NoEnrollment />,
};

export default function TicketAndPaymentData({ hasEnrollment }) {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {display[hasEnrollment]}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
