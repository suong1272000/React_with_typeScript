import { CSSProperties, useState } from "react";
import { payments } from "../../../constant/Dummys";
import Label from "../../atoms/Label/Label";
import Payment from "../../molecules/payment/Payment";
import Button from "../../atoms/button/Button";

const PaymentMethod = () => {
	const paymentMethodStyle: CSSProperties = {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		width: "500px",
	};

	const [selectNum, setSelectNum] = useState<number>(-1);
	const select = (num: number) => {
		setSelectNum(num);
	};
	return (
		<section style={paymentMethodStyle}>
			<Label content="Payment" />
			{payments.map((value, index) => (
				<Payment
					{...value}
					action={select}
					num={index}
					isSelect={selectNum === index}
				/>
			))}
			<Button />
		</section>
	);
};
export default PaymentMethod;
