<link rel="stylesheet" href="custom.css">


<script>
	// imports
	// import Chart from "./Chart.svelte";
	import Chart4 from "./Chart4.svelte";

	import * as data_json from "./data_dir/data.json";

	let col_keys = Object.keys(data_json["values"][0]); 
	let var_col = col_keys[0];

	// function handleHover(i){
	// 	var_col=col_keys[i];
	// }

	let i = 0;

	function handleClick() {
		i++;
	}
</script>

<main>
	<h1>Interactive Scatterplot Matrix</h1>
	<p>Hover over a scatterplot to bring that variable into focus. 
		<a href="https://github.com/willeppy/Interactive-Scatterplot"> See the code.</a></p>

	<!-- {#each col_keys as static_col, i}
		<Chart on:mouseenter={() => handleHover(i)} id={i} c_data={data_json} {static_col} {var_col}/>
	{/each} -->
	
	<button on:click={handleClick}> Click me to change both </button>

	<Chart4 c_id={1} {i}/>
	<Chart4 c_id={2} {i}/>


</main>