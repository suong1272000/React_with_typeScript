import { CSSProperties } from "react";
import { LabelProps } from "../../atoms/Label/Label";
import Icon, { IconProps } from "../../icon/Icon";
import LabelWithMask from "../../atoms/Label/LabelWithMask";

export type PaymentProps = {
	icon: IconProps;
	label: LabelProps;
};
export type PaymentActionProps = {
	num: number;
	isSelect: boolean;
	action: (num: number) => void;
};

const Payment = ({
	icon,
	label,
	num,
	isSelect,
	action,
}: PaymentProps & PaymentActionProps) => {
	const paymentStyle: CSSProperties = {
		backgroundColor: "#F4F4F4",
		border: `1px solid ${isSelect ? "#F83758" : "#F4F4F4"}`,
		borderRadius: "8px",
		padding: "20px 18px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	};

	return (
		<div onClick={() => action(num)} style={paymentStyle}>
			<Icon {...icon} />
			<LabelWithMask {...label} />
		</div>
	);
};
export default Payment;
