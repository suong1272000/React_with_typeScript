type CardNumProps = {
	cardNum: string;
};
const CardNum = ({ cardNum }: CardNumProps) => {
	return <span>{cardNum}</span>;
};
export default CardNum;
