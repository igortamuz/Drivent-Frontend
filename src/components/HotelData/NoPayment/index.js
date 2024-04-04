import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function NoPayment() {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 102px)' }}>
      <StyledTypography variant="body1" color="textSecondary" align="center">
        {`Você precisa ter confirmado pagamento antes
          de fazer a escolha de hospedagem`}
      </StyledTypography>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  max-width: 330px;
  line-height: 1.15rem !important;
`;
