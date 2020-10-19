<link rel="stylesheet" href="custom.css">


<style>
	.block {
		width: 10rem;
		height: 10rem;
		display: inline-block;
		color: #ffff;
		padding: 1rem;
	}
	.one {
		background-color: #af3a3a;
	}

	.two {
		background-color: #373790;
	}
	
</style>

<script>
	// imports
	import Chart from "./Chart.svelte";
	import * as data_json from "./data_dir/data.json";

	// console.log(data_json); 

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
		<Chart on:mouseenter={() => handleHover(i)} id={i} c_data={data_json} {static_col} {var_col}/>
	{/each}

</main>