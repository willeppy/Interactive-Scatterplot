
<link rel="stylesheet" href="custom.css">

<script>
	// importing components 
	import AnotherComp from './AnotherComp.svelte';

	// prop var
	export let name; // export pulls in from parent comp
	name = "will";

	// reactive variable
	let bb = "hey";
	$: appended = bb + "_yah"; // this will responsively update

	// control flow

	let l = [
		{ id: 'one', name: 'cat' },
		{ id: 'two', name: 'dog' },
		{ id: 'three', name: 'bunny' }
	];

</script>

<main>
	<h1>Hello {appended}!</h1>
	<p> This is some text here boyo </p>

	<AnotherComp passed_var="hey"/>
	<AnotherComp/>


	<h3>List items</h3>

	<ul>
		{#each l as { id, name }, i}
			<li> {i}: {id, name} </li>
		{/each}
	</ul>

</main>