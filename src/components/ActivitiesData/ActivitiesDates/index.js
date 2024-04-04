import { Box, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useDates from '../../../hooks/api/useDates';
import DateCard from './DateCard';

export default function ActivitiesDates({ chosen, setChosen }) {
  const [dates, setDates] = useState([]);
  const data = useDates();

  useEffect(() => {
    if (data.dates !== null) {
      setDates(data.dates);
    }
  }, [data.datesLoading === false]);

  const display = {
    true: (
      <Title variant="h6" color="textSecondary">
        Primeiro, filtre pelo dia do evento:
      </Title>
    ),
    false: '',
  };

  if (dates.length === 0) {
    return (
      <Dates>
        <StyledTypography variant="body1" color="textSecondary" align="center">
          {'Carregando tickets'}
        </StyledTypography>
      </Dates>
    );
  } else {
    return (
      <>
        {display[chosen === null]}
        <Dates>
          {dates.map((item) => (
            <DateCard key={item.id} item={item} chosen={chosen} setChosen={setChosen} />
          ))}
        </Dates>
      </>
    );
  }
}

const StyledTypography = styled(Typography)`
  line-height: 1 !important;
`;

const Dates = styled(Box)`
  display: flex;

  margin-top: 17px;
  margin-bottom: 46px;
`;

const Title = styled(Typography)`
  margin-top: 25px !important;
  margin-bottom: 10px !important;
`;
