import { Box, Typography } from '@material-ui/core';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function ConfirmedPayment() {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Box paddingRight={'5px'}>
        <AiFillCheckCircle color="#36B853" fontSize={'2.5em'} width={'45px'} height={'45px'} />
      </Box>
      <Box>
        <Typography variant="bold" color="textPrimary">
          {'Pagamento confirmado!'}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          {'Prossiga para escolha de hospedagem e atividades'}
        </Typography>
      </Box>
    </Box>
  );
}
