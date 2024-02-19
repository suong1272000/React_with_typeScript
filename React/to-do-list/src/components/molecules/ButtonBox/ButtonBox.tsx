import { SquareBox } from "../../../styles/SquareBox";
import ButtonLabel from "../../atoms/Label/ButtonLabel";

type ButtonBoxProps = {
	action: () => void;
};

const ButtonBox = ({ action }: ButtonBoxProps) => {
	return (
		<SquareBox onClick={action}>
			<ButtonLabel content="Add Todo" />
		</SquareBox>
	);
};
export default ButtonBox;
