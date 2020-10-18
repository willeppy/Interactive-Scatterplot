
<link rel="stylesheet" href="custom.css">

<script>
	import AnotherComp from './AnotherComp.svelte';

	export let name;
	name = "will";

	let bb = "hey";
</script>

<main>
	<h1>Hello {bb}!</h1>
	<p> This is some text here boyo </p>

	<AnotherComp/>
	<AnotherComp/>

</main>