import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import ConfirmedPayment from './ConfirmedPayment';
import CreditCardComponent from './creditCardPage';

export default function CreditCard({ ticketData }) {
  const [includesHotel, setIncludesHotel] = useState('');
  const [paid, setPaid] = useState(false);

  const display = {
    true: <ConfirmedPayment />,
    false: <CreditCardComponent ticketData={ticketData} />,
  };

  useEffect(() => {
    if (ticketData.TicketType.includesHotel === true) {
      setIncludesHotel(' + Com Hotel');
    }

    if (ticketData.TicketType.isRemote === false && ticketData.TicketType.includesHotel === false) {
      setIncludesHotel(' + Sem Hotel');
    }
  }, []);

  useEffect(() => {
    if (ticketData.status === 'PAID') {
      setPaid(true);
    }
  }, []);

  const item = {};
  item.id = ticketData.TicketType.id;
  item.price = ticketData.TicketType.price;
  item.name = ticketData.TicketType.name + includesHotel;

  return (
    <>
      <Title variant="h6" color="textSecondary">
        {'Ingresso Escolhido'}
      </Title>
      <Card item={item} chosen={item} clickable={false} />
      <Title variant="h6" color="textSecondary">
        {'Pagamento'}
      </Title>
      {display[paid]}
    </>
  );
}

const Title = styled(Typography)`
  margin-top: 25px !important;
  margin-bottom: 10px !important;
`;
