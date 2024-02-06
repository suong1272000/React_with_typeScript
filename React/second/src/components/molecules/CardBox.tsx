import Box from "../atoms/Box";
import CardNum from "../atoms/CardNum";
import Logo from "../atoms/Logo";

const CardBox = () => {
	return (
		<Box>
			<Logo image="/visa 1.svg" />
			<CardNum cardNum="1111222224444" />
		</Box>
	);
};
export default CardBox;
