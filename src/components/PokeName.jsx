import { useState, useEffect } from "react";
import axios from "axios";

function PokeName() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const random = Math.ceil(Math.random() * 199);
		const getData = async () => {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${random}`
			);
			await setData(response.data);
			console.log(data);
		};
		getData();
	}, []);

	if (data != null)
		return (
			<>
				<h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
				<img src={data.sprites.front_default} alt='' />
				<p>
					{data.stats[0].stat.name}:{data.stats[0].base_stat}
				</p>
			</>
		);
}

export default PokeName;
