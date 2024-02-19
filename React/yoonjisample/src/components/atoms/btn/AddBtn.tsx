export type AddBtnProps = {
	addAction: () => void;
};
const AddBtn = ({ addAction }: AddBtnProps) => {
	return <button onClick={addAction}>Add Todo</button>;
};
export default AddBtn;
