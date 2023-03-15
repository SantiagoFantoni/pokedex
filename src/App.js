import "./App.css";
import Title from "./components/Title";
import PokeName from "./components/PokeName";

function App() {
	return (
		<div className='App'>
			<Title content={"Welcome"}></Title>
			<PokeName></PokeName>
		</div>
	);
}

export default App;
