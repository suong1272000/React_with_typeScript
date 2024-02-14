import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CheckBoxStyle } from "./CheckBox.style";
import { WrapBox } from "../../../styles/WrapBox";

const CheckBox = () => {
	return (
		<WrapBox>
			<CheckBoxStyle icon={faCheck} />
		</WrapBox>
	);
};

export default CheckBox;
