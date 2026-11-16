<script lang="ts">
	import ProjectList from '$lib/ProjectList.svelte';
</script>

<h1>Development</h1>

<section id="projects-section">
	<h2>Past AI usage disclosures explained</h2>
	<p class="note">
		<strong>Note:</strong> if you are looking for my stance/opinion on the subject,
		head over to <a href="/ai_stance">the AI stance page.</a> Besides the "Why" section which
		briefly tips over the subject, this is mostly a technical explanation.
	</p>
	<ul>
		<li>
			<strong class="emphasis">AI:</strong> used here as a shortcut to define
			<strong>generative AI</strong> and Large Language Models (LLMs).
		</li>
		<li>
			<strong class="emphasis">Period:</strong> from around
			<strong>December 2024 to March 2026</strong>.
		</li>
		<li>
			<strong class="emphasis">AI remnants:</strong> Use for
			<strong>boilerplate code auto-completion</strong>, and for some projects,
			<strong>AI code reviews</strong>
			(mostly to catch dumb mistakes). Also for
			<strong>very niche debbuging help in Wav2Bar rewrite</strong>.
			<strong
				>It was <i>NEVER</i> used for artistic content (text, music, SFX, shaders, etc.).</strong
			>
		</li>
		<li><strong class="emphasis">Asserted:</strong> I am sure I used it.</li>
		<li>
			<strong class="emphasis">Possible:</strong> I don't remember, but it falls in my usage window, and/or
			teammates may have used it.
		</li>
		<li>
			<strong class="emphasis">Money given:</strong> Free Github Copilot student tier until December 2025,
			followed by three month of basic tier subscription (3 * 10€ roughly).
		</li>
		<li>
			<strong class="emphasis">Why: </strong>
			<ul>
				<li>
					Strong pressure from the tech industry to "stay on the page". It was in some way to be
					able to talk about it during interviews.
				</li>
				<li>
					I thought these usages were reasonable and not very harmful, though it was cautioning it
					in some way. (Now, everyone has their opinion on the subject, I might share them on a
					separate page in the future. It's a complex debate, I won't ellaborate here.)
				</li>
			</ul>
		</li>
		<li>
			<strong class="emphasis">How to hide: </strong> Open "Filter by tags" and check "No AI used".
		</li>
	</ul>
	<h2>Projects</h2>
	<ProjectList category="dev" />
</section>

<style>
	p.note {
		color: var(--color-primary);
		border: 4px dashed var(--color-primary-transparent);
		padding: 1rem;
		border-radius: var(--main-border-radius);
	}
	p.note > strong {
		text-decoration: underline;
	}
	ul > li {
		margin-bottom: 0.5em;
		font-weight: 300;
	}
	strong {
		font-weight: 700;
	}
	strong.emphasis {
		text-decoration: underline;
		color: var(--color-tertiary);
	}
</style>
