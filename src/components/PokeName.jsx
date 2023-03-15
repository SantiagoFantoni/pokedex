import { useState, useEffect } from "react";
import axios from "axios";

function PokeName() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
			setData(response.data);
			console.log(data);
		};
		getData();
	}, []);

	return (
		<>
			<p>{data.name}</p>
		</>
	);
}

export default PokeName;
