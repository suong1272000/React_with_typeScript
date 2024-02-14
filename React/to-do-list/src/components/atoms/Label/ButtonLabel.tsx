import { ButtonText } from "../../../styles/ButtonText";

type ButtonLabelProps = {
	content: string;
};

const ButtonLabel = ({ content }: ButtonLabelProps) => {
	return <ButtonText>{content}</ButtonText>;
};

export default ButtonLabel;
