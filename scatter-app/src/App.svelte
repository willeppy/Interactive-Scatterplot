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

	console.log("MYJSON", data_json); 

	let name_one = "one";
	let name_two = "two";

	function handleHover(event){
		console.log(event)
	}
</script>

<main>
	<h1>Interactive Scatterplots</h1>
	<div on:mouseenter={handleHover} class="block one">{name_one}</div>
	<div on:mouseenter={handleHover} class="block two">{name_two}</div>

	<Chart id=0 c_data={data_json} x_col="A" y_col="A"/>
	<Chart id=1 c_data={data_json} x_col="B" y_col="A"/>
	<Chart id=2 c_data={data_json} x_col="C" y_col="A"/>
	<Chart id=3 c_data={data_json} x_col="D" y_col="A"/>


</main>

<!-- TODO:

	(1) programmatically add charts
	(2) register hovers
	(3) change charts on hover

-->
