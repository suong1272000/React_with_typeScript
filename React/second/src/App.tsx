import Box from "./components/atoms/Box";
import Payment from "./components/atoms/Payment";
import CardBox from "./components/molecules/CardBox";

function App() {
	return (
		<div className="App">
			<Payment text="Payment"></Payment>
			<CardBox />
		</div>
	);
}

export default App;
