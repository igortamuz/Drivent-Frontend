import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function DateCard({ item, chosen, setChosen }) {
  const handleClick = () => {
    if (chosen === null) {
      setChosen(item);
    } else if (chosen?.id === item.id) {
      setChosen(null);
    } else if (chosen?.id !== item.id && chosen.id !== null) {
      setChosen(item);
    }
  };

  let lst = item.day.split('-');
  const weekDay = new Date(`${item.day.slice(0, 22)}`);
  let day = weekDay.getDay();
  const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const string = `${week[day]}, ${lst[1]}/${lst[2].slice(0, 2)} `;

  return (
    <Card
      key={item.id}
      onClick={handleClick}
      alignitems='center'
      className={chosen?.id === item.id ? true : false}
    >
      <StyledTypography alignitems='center' variant='body2' align='center'>
        {string}
      </StyledTypography>
    </Card>
  );
}

const StyledTypography = styled(Typography)`
`;

const Card = styled(Box)`
  ${({ className }) => className && 'background-color: #FFD37D'};
  ${({ className }) => !className && 'background-color: #E0E0E0;'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 37px;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-right: 24px;
`;
