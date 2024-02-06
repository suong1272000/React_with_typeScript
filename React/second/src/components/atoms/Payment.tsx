type PaymentProps = {
	text: string;
};
const Payment = ({ text }: PaymentProps) => {
	return (
		<div>
			<p>{text}</p>
		</div>
	);
};

export default Payment;
