import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CheckBoxStyle } from "../../../styles/Icons/CheckBox.style";
import { WrapCheckBox } from "../../../styles/Icons/WrapCheckBox";

const CheckBox = () => {
	return (
		<WrapCheckBox>
			<CheckBoxStyle icon={faCheck} />
		</WrapCheckBox>
	);
};

export default CheckBox;
