export type CheckBoxProps = {
	isCheck: boolean;
	checkChange: () => void;
};

const CheckBox = ({ isCheck, checkChange }: CheckBoxProps) => {
	return <input onChange={checkChange} type="checkbox" checked={isCheck} />;
};
export default CheckBox;
