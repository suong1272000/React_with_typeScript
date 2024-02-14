import { List } from "./Sentence.style";

type SentenceProps = {
	content?: string;
};

const Sentence = ({ content }: SentenceProps) => {
	return <List>{content}</List>;
};

export default Sentence;
