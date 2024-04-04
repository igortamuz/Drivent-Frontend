import TicketAndPaymentData from '../../../components/TicketAndPaymentData';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  return <TicketAndPaymentData hasEnrollment={isObject(enrollment)} />;
}

function isObject(obj) {
  return obj === Object(obj);
}
