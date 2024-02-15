import { linkedCheckTextProps } from "../../../styles/Icons/WrapCheckBox";
import { List } from "./Sentence.style";

type SentenceProps = {
	content?: string;
};

const Sentence = ({
	content,
	isSelect,
}: SentenceProps & linkedCheckTextProps) => {
	return <List isSelect={isSelect}>{content}</List>;
};

export default Sentence;
