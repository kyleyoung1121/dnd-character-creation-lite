<script>
	import { goto } from '$app/navigation';

	function startCharacterCreation() {
		goto('/class');
	}
</script>

<main class="welcome-page">
	<h1>Welcome to Ethics & Dragons</h1>
	<p>Create a custom D&D character, step by step.</p>
	<button on:click={startCharacterCreation}>Start Building</button>
</main>

<style>
	.welcome-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		text-align: center;
		background-color: #1e1e2f;
		color: white;
		font-family: system-ui, sans-serif;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}

	button {
		padding: 0.75rem 1.5rem;
		font-size: 1.1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: #4CAF50;
		color: white;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	button:hover {
		background-color: #45a049;
	}
</style>
