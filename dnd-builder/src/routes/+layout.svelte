<script>
	import { page } from '$app/stores';
</script>

<nav class="tabs space-x-4">
	<a href="/" class="hover:underline">Welcome</a>
	<a href="/class" class="hover:underline">Class</a>
	<a href="/race" class="hover:underline">Race</a>
	<a href="/abilities" class="hover:underline">Abilities</a>
	<a href="/background" class="hover:underline">Background</a>
	<a href="/equipment" class="hover:underline">Equipment</a>
	<a href="/spells" class="hover:underline">Spells</a>
	<a href="/export" class="hover:underline">Export</a>
</nav>

<main class="p-6">
	<slot />
</main>
