import PaymentMethod from "./components/or/paymentMethod/PaymentMethod";
import { MyButton } from "./styles/Button";
import { Colors } from "./styles/Colors";

function App() {
	return (
		<div className="App">
			<PaymentMethod />
			<MyButton isPrimary bgColor={Colors["Primary"][2]}>
				버튼
			</MyButton>
		</div>
	);
}

export default App;
