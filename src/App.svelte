<link rel="stylesheet" href="custom.css">


<script>
	// imports
	import Chart from "./Chart.svelte";
	import Chart4 from "./Chart4.svelte";

	import * as data_json from "./data_dir/data.json";

	// let col_keys = Object.keys(data_json["values"][0]); 
	let col_keys = ["A", "B" ,"C", "D"];

	// let var_col = col_keys[0];

	// function handleHover(i){
	// 	var_col=col_keys[i];
	// }

	let i = 0;

	function handleClick() {
		i = (i + 1) % 4;
	}
</script>

<main>
	<h1>Interactive Scatterplot Matrix</h1>
	<p>Hover over a scatterplot to bring that variable into focus. 
		<a href="https://github.com/willeppy/Interactive-Scatterplot"> See the code.</a></p>

	<!-- <p>{"Last hovered on: " + var_col}</p>
	{#each col_keys as static_col, i}
		<Chart on:mouseenter={() => handleHover(i)} c_id={i} c_data={data_json} {static_col} {var_col}/>
	{/each} -->
	
	<button on:click={handleClick}> Click me to change both </button>

	<Chart4 c_id={1} c_data={data_json} static_col={"A"} var_col={col_keys[i]}/>
	<Chart4 c_id={2} c_data={data_json} static_col={"B"} var_col={col_keys[i]}/>
	<Chart4 c_id={3} c_data={data_json} static_col={"C"} var_col={col_keys[i]}/>
	<Chart4 c_id={4} c_data={data_json} static_col={"D"} var_col={col_keys[i]}/>



</main>