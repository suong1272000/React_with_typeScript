import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CheckBoxStyle } from "../../../styles/Icons/CheckBox.style";
import {
	WrapCheckBox,
	linkedCheckTextProps,
} from "../../../styles/Icons/WrapCheckBox";

export type CheckBoxActionProps = {
	action?: () => void;
};

const CheckBox = ({
	action,
	isSelect,
}: CheckBoxActionProps & linkedCheckTextProps) => {
	return (
		<WrapCheckBox onClick={action} isSelect={isSelect}>
			<CheckBoxStyle icon={faCheck} />
		</WrapCheckBox>
	);
};

export default CheckBox;
