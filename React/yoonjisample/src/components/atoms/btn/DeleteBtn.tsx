export type DeleteBtnProps = {
	delAction: () => void;
};
const DeleteBtn = ({ delAction }: DeleteBtnProps) => {
	return <button onClick={delAction}>Del</button>;
};
export default DeleteBtn;
