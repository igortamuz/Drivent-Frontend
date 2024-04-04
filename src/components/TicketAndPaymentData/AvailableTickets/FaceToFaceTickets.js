import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import SummaryData from './SummaryData';

function isObject(obj) {
  return obj === Object(obj);
}

export default function FaceToFaceTickets({ ticketsData }) {
  const [chosen, setChosen] = useState(null);

  return (
    <>
      <StyledTypography variant="body1" color="textSecondary">
        {'Ótimo! Agora escolha sua modalidade de hospedagem'}
      </StyledTypography>
      <Tickets>
        {ticketsData.map((item) => (
          <Card key={item.id} item={item} chosen={chosen} setChosen={setChosen} basicPrice={ticketsData[0]?.price} />
        ))}
      </Tickets>
      {isObject(chosen) && <SummaryData ticketData={chosen} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-top: 44px !important;
  line-height: 1 !important;
`;

const Tickets = styled(Box)`
  display: flex;

  margin-top: 17px;

  .true {
    background-color: #ffeed2;
  }
`;
