<script>
	// imports
	import Chart from "./Chart.svelte";

	import * as data_json from "./data_dir/data.json";

	let col_keys = Object.keys(data_json["values"][0]);

	let var_col = col_keys[0];

	// function handleHover(i){
	// 	var_col=col_keys[i];
	// }
</script>

<link rel="stylesheet" href="custom.css" />
<main>
	<h1>Interactive Scatterplot Matrix</h1>
	<p>
		Hover over a scatterplot to bring that variable into focus.
		<a href="https://github.com/willeppy/Interactive-Scatterplot">
			See the code.</a>
	</p>

	<!-- <input bind:value={var_col} /> -->

	{#each col_keys as k}
		<label> <input type=radio bind:group={var_col} value={k}> {k} </label>
	{/each}



	<div>
		{#each col_keys as static_col, i}
			<!-- <Chart c_id={i} on:mouseenter={() => handleHover(i)} c_data={data_json} {static_col} {var_col}/> -->
			<Chart c_id={i} c_data={data_json} {static_col} {var_col} />
		{/each}

		<!-- <Chart c_id={0} c_data={data_json} static_col={"A"} {var_col} /> -->
	</div>
</main>
