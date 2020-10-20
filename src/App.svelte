<link rel="stylesheet" href="custom.css">


<script>
	// imports
	import Chart from "./Chart.svelte";
	import Chart2 from "./Chart2.svelte";
	import * as data_json from "./data_dir/data.json";

	let col_keys = Object.keys(data_json["values"][0]); 
	let var_col = col_keys[0];

	// function handleHover(i){
	// 	var_col=col_keys[i];
	// }

	// var b_1_c = 0;
	// var b_2_c = 0;

	// function handleClick(b_i) {
	// 	if(b_i == 1) {
	// 		b_1_c += 1;
	// 	}

	// 	if(b_i == 2) {
	// 		b_2_c += 1;
	// 	}
	// }
</script>

<main>
	<h1>Interactive Scatterplot Matrix</h1>
	<p>Hover over a scatterplot to bring that variable into focus. 
		<a href="https://github.com/willeppy/Interactive-Scatterplot"> See the code.</a></p>

	<!-- {#each col_keys as static_col, i}
		<Chart on:mouseenter={() => handleHover(i)} id={i} c_data={data_json} {static_col} {var_col}/>
	{/each} -->

	<!-- <button on:click={() => handleClick(1)}> Click me 1 </button> -->
	<!-- <button on:click={() => handleClick(2)}> Click me 2 </button> -->

	<!-- <Chart2 id={1} count={b_1_c}/> -->
	<!-- <Chart2 id={2} count={b_2_c}/> -->
	<Chart2/>


</main>