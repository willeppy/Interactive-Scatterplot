<link rel="stylesheet" href="custom.css">


<script>
	// imports
	import Chart from "./Chart.svelte";

	import * as data_json from "./data_dir/data.json";

	let col_keys = Object.keys(data_json["values"][0]); 

	let var_col = col_keys[0];

	function handleHover(i){
		var_col=col_keys[i];
	}

</script>

<main>
	<h1>Interactive Scatterplot Matrix</h1>
	<p>Hover over a scatterplot to bring that variable into focus. 
		<a href="https://github.com/willeppy/Interactive-Scatterplot"> See the code.</a></p>

	{#each col_keys as static_col, i}
		<Chart c_id={i} on:mouseenter={() => handleHover(i)} c_data={data_json} {static_col} {var_col}/>
	{/each}
</main>