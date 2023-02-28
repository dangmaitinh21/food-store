import Alert from '~/components/elements/Alert';
import exclamationIcon from '~/assets/icons/exclamation.svg';

function PaymentSuccess() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <img src={exclamationIcon} alt="exclamation" />
      <div>
        <Alert variant="success">Your payment was successful</Alert>
      </div>
    </div>
  );
}

export default PaymentSuccess;
