<script>
	let selectedClass = "";
	const classes = [
		{ name: "Barbarian", blurb: "A fierce warrior of primitive background who can enter a battle rage." },
		{ name: "Bard", blurb: "An inspiring magician whose power echoes the music of creation." },
		{ name: "Cleric", blurb: "A priestly champion who wields divine magic in service of a higher power." },
		{ name: "Druid", blurb: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms." },
		{ name: "Fighter", blurb: "A master of martial combat, skilled with a variety of weapons and armor." },
		{ name: "Monk", blurb: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection." },
		{ name: "Paladin", blurb: "A holy warrior bound to a sacred oath." },
		{ name: "Ranger", blurb: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization." },
		{ name: "Rogue", blurb: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies." },
		{ name: "Sorcerer", blurb: "A spellcaster who draws on inherent magic from a gift or bloodline." },
		{ name: "Warlock", blurb: "A wielder of magic that is derived from a bargain with an extraplanar entity." },
		{ name: "Wizard", blurb: "A scholarly magic-user capable of manipulating the structures of reality." }
	];
</script>

<h1>Class Selection</h1>

<p>In Dungeons & Dragons, your character's class determines what kind of adventurer they are. Each class has unique abilities, strengths, and role-playing opportunities. Choose the class that best fits your playstyle or character concept.</p>

<ul>
	{#each classes as class_option}
		<li><strong>{class_option.name}</strong>: {class_option.blurb}</li>
	{/each}
</ul>

<label for="class-select">Choose your class:</label>
<select id="class-select" bind:value={selectedClass}>
	<option value="">-- Select a class --</option>
	{#each classes as class_option}
		<option value={class_option.name}>{class_option.name}</option>
	{/each}
</select>

{#if selectedClass}
	<p>You selected: <strong>{selectedClass}</strong></p>
{/if}
