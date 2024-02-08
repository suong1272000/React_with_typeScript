import { useState } from "react";
import { payments } from "../../../constant/Dummys";
import Payment from "./Payment";
import Button from "../../atoms/button/Button";

const PaymentBundle = () => {
	const [selectNum, setSelectNum] = useState<number>(-1);
	const select = (num: number) => {
		setSelectNum(num);
	};
	const btnClick = () => {
		alert(
			selectNum === -1
				? "결제수단을 선택해주세요"
				: `${payments[selectNum].label.content} 결제 진행!`
		);
	};
	return (
		<>
			{payments.map((value, index) => (
				<Payment
					{...value}
					action={select}
					num={index}
					isSelect={selectNum === index}
				/>
			))}
			<Button action={btnClick} isSelect={selectNum > -1} />
		</>
	);
};
export default PaymentBundle;
