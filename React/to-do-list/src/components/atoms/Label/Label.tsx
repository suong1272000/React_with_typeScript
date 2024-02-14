import { Title } from "../../../styles/Title";

type LabelProps = {
	content: string;
};

const Label = ({ content }: LabelProps) => {
	return <Title>{content}</Title>;
};

export default Label;
