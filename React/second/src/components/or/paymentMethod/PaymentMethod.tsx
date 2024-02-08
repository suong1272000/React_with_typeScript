import { CSSProperties } from "react";
import PaymentBundle from "../../molecules/payment/PaymentBundle";

const PaymentMethod = () => {
	const paymentMethodStyle: CSSProperties = {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		width: "500px",
	};

	return (
		<section style={paymentMethodStyle}>
			<PaymentBundle />
		</section>
	);
};
export default PaymentMethod;
