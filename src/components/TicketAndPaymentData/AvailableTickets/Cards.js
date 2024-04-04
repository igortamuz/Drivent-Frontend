import { Box, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAvailableTickets from '../../../hooks/api/useAvailableTickets';
import Card from './Card';
import FaceToFaceTickets from './FaceToFaceTickets';
import SummaryData from './SummaryData';

export default function Cards() {
  const [tickets, setTickets] = useState([]);
  const [chosen, setChosen] = useState(null);
  const [faceToFaceTicketsData, setFaceToFaceTicketsData] = useState([]);
  const cards = useAvailableTickets({});

  useEffect(() => {
    if (cards.availableTickets) {
      setTickets(cards.availableTickets.ticketTypesWithoutHotel);
    }
  }, [cards.availableTicketsLoading]);

  useEffect(() => {
    if (cards.availableTickets?.ticketTypesWithHotel) {
      for (const ticket of cards.availableTickets.ticketTypesWithoutHotel)
        if (!ticket.isRemote) {
          setFaceToFaceTicketsData([ticket, ...cards.availableTickets.ticketTypesWithHotel]);
          break;
        }
    }
  }, [chosen]);

  const display = {
    true: <SummaryData ticketData={chosen} />,
    false: <FaceToFaceTickets ticketsData={faceToFaceTicketsData} />,
    null: '',
  };

  if (tickets.length === 0) {
    return (
      <Tickets>
        <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
          {'carregando Tickets'}
        </StyledTypography>
      </Tickets>
    );
  } else {
    return (
      <>
        <Tickets>
          {tickets.map((item) => (
            <Card key={item.id} item={item} chosen={chosen} setChosen={setChosen} />
          ))}
        </Tickets>
        {display[chosen?.isRemote]}
      </>
    );
  }
}

const StyledTypography = styled(Typography)`
  line-height: 1 !important;
`;

const Tickets = styled(Box)`
  display: flex;

  margin-top: 17px;
`;
