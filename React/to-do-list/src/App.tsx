import CheckBox from "./components/atoms/CheakBox/CheckBox";
import Ellipsis from "./components/atoms/Ellipsis/Ellipsis";
import Label from "./components/atoms/Label/Label";
import Sentence from "./components/atoms/Sentence/Sentence";

function App() {
	return (
		<div className="App">
			<Label content="Todo" />
			<CheckBox />
			<Sentence content="Finish writing doc" />
			<Ellipsis />
		</div>
	);
}

export default App;
