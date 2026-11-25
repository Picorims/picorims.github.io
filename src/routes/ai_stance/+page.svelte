<script lang="ts">
	import thumbnail from "$lib/assets/2026-11_the_sad_thing_V_SMALL.jpg";

	const questions = {
		"Pro or anti AI?": "pro-or-anti-ai",
		"Why did you choose to use AI?": "why-used-ai",
		"Did you stop using AI?": "did-you-stop-using-ai",
		"Why did you stop using AI?": "why-stopped",
		"Pros and cons of AI for you?": "pros-and-cons",
		"Opinion on full AI bans?": "opinion-full-ai-ban",
		"Opinion on AI disclosures?": "opinion-ai-disclosure",
		'Will you stop working on "AI tainted" projects?': "will-you-stop-tainted-projects",
	} as const;
	type QType = keyof typeof questions;
</script>

{#snippet question(q: QType)}
	<h3 class="q" id={questions[q]}>
		{q}
		<a class="title-link" href={`#${questions[q]}`}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link preview-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
		</a>
	</h3>
{/snippet}

<img class="thumbnail" src={thumbnail} alt="illustration with a person across a rock, listening to music and showing signs of sadness, in the middle of a desertic area at night, with a forest and a hidden festive campfire in the background." />

<h1>AI Stance</h1>
<div role="doc-subtitle" class="subtitle">Last updated: 16 November 2026</div>

<section>
	<h2>Changelog</h2>
	<details>
		<summary>Click to reveal.</summary>
		<ul>
			<li><strong>2026/11/25:</strong> Added thumbnail, still nead to do a reread and clarify things. At some point in the future.</li>
			<li><strong>2026/11/16:</strong> Initial iteration, probably messy.</li>
		</ul>
	</details>
</section>

<section>
	<h2>Preface</h2>
	<p>
		I have noticed that I'm repeating myself again and again on the subject of AI; while being
		simultaeously tired of it. That page is some attempt at lowering that strain, by gathering
		everything in one place, and providing points to link to when necessary.
	</p>
	<p>
		Nothing is set in stone. My opinions will inevitably evolve over time, and I want to avoid as
		much as possible to enter into dogmatism and polarization. It remains a complex topic which
		impacts the economy, job market, law, the planet and the environment, ethics, and much more. I
		will not be able to be exhaustive. I also want to try keeping it somewhat succint (try is the
		important word here, when the topic is so vast and heated). The intent is to make it evolve over
		time as my view evolves and/or when I learn new things around the subject. The last revision
		date is indicated at the top of this page.
	</p>
	<p>
		If you want to reach to me about any of the topic I discuss below (or the lack thereof), feel free to do it
		<strong>as long as it is done constructively and with respect</strong>. If it is just witch
		hunting or finding a needle for public discourse, I don't see the point other than wasting each
		other's mental health and energy. The situation is painful enough as it is, I don't think being
		agressive at each other will solve anything or make anything better.
	</p>
	<p>
		<strong>
			Final note: if you ask an AI to sum up all of this, well first it is super dystopic, and
			second it cannot be claimed as being my opinion or said by me, since the LLM's biases and
			hallucinations are de-facto part of the output.
		</strong>
	</p>
</section>

<section>
	<h2>AI Disclosure</h2>

	<p>
		If you are looking about AI usage in my projects, which is the case for code exclusively, it is
		detailed on the <a href="/development">development page</a>.
	</p>
</section>

<section>
	<h2>Definitions</h2>

	<p>
		This topics define words as how I use them, and is not intended to be authoritative or 100%
		accurate.
	</p>

	<ul>
		<li>
			<strong class="def-title">AI:</strong> When I talk about AI here, I mean generative AI, it is
			a shortcut that has been used pretty much everywhere now. But it is true that it also englobe
			machine-learning and deep-learning, and that gen AI is some form of deep-learning.
			<strong>This page focuses on generative AI exclusively.</strong>
		</li>
		<li>
			<strong class="def-title">gen AI:</strong> shorthand for generative AI.
		</li>
		<li>
			<strong class="def-title">AI slop:</strong> heavily or fully AI generated content, in the form of
			text (or code), image, video, audio, etc.
		</li>
		<li>
			<strong class="def-title">vibe coded:</strong> Form of AI slop where the user barely writes anything
			by hand, and use "agents" and "harnesses" with prompts to let everything be generated.
		</li>
		<li>
			<strong class="def-title">RSI:</strong> Repetitive Strain Injury. Englobe a bunch of things, such
			as arthritis, tendonitis, carpal tunnel syndrome, tennis elbow issues, clicking phalanx, etc. Desk
			jobs and jobs with repetitive movements (gardening, cleaning, cashier, etc.) are particularly exposed.
			(Being young doesn't make you immune to it between.)
		</li>
	</ul>
</section>

<section>
	<h2>FAQ / stance</h2>

	<p>
		Struturing the whole thing into something digestible is tricky. I'll try to go with a FAQ
		approach, with questions referring to each other. I know it is not perfect, but that what is
		fitting me best right now. Maybe one day I'll also do a diagram out of it, I don't know, we will
		see.
	</p>

	{@render question("Pro or anti AI?")}
	<p>
		I don't like having to choose between black and white. But if I <i>had</i> to pick one, it would be
		anti AI. Nuances are covered in subsequent questions.
	</p>

	{@render question("Why did you choose to use AI?")}
	<ul>
		<li>
			Strong pressure from the tech industry to "stay on the page", "stay in the loop", "not miss
			the train", not "become obsolete", etc. It was in some way to be able to talk about it during
			interviews, see what it could do, how it was evolving, etc.
		</li>
		<li>
			I thought these usages (i.e. code auto-complete, code review, and in rare cases debugging and
			looking for new paths of information) were reasonable and not very harmful, though it was
			cautioning it in some way. As of how I see it now, see subsequent questions.
		</li>
	</ul>

	{@render question("Did you stop using AI?")}
	<p>
		The only usage I kept is as a mean to find new paths of information, when I have exhausted
		looking online and asking around.
	</p>
	<p>
		<strong>For gamedev projects, I fully stopped.</strong>
	</p>

	{@render question("Why did you stop using AI?")}
	<p>
		For ethical reasons, loss of meaning, coping with RSI issues, and reducing noise. I always used
		free tiers besides 3 months of the basic GitHub copilot tier at the end, so the cost wasn't a
		subject for me.
	</p>

	{@render question("Pros and cons of AI for you?")}
	<p>The cons far outweight the pros. And there are more cons than pros. That being said:</p>
	<h4>Pros:</h4>
	<ul>
		<li>
			For code reviews, it can help catch dumb mistakes, and sometimes bugs or vulnerabilities. But
			everything has to be taken with a grain of salt, and it can be spammy.
		</li>
		<li>
			For code completion of recurrent and predictable code (end of line of a for loop, very clear
			pattern that can't be factored, translation of a type to another programming language which I
			had to do once), it can be useful. The gain of time is debatable, but the strain on hands is
			reduced.
			<strong>Which is inevitably a pro when you faced RSI issues.</strong>
		</li>
		<li>
			I think it can be helpful for semantic search while not replacing classical search algorithms
			and techniques.
		</li>
	</ul>
	<h4>Cons:</h4>
	<p>
		<i>Deep breath:</i>
	</p>
	<ul>
		<li>
			<strong> Destruction of jobs, at least in creative fields. </strong>

			<ul>
				<li>
					There is debate regarding dev jobs. What I can say is that in France, IT jobs declined
					more sharply than other jobs. It is being used as an excuse, but I also think it has an
					impact. At least for junior positions. I have read testimonials of people saying their
					companies freeze junior employment because a senior with AI could cover the job of
					multiple junior devs. Is it true, I don't know, but some employers do, so it does have an
					impact regardless.
				</li>
			</ul>
		</li>
		<li>
			<strong> Big environmental cost: </strong>
			<ul>
				<li>
					<strong>
						Land artificialisation (through giant datacenters replacing agricultural and protected
						land.)
					</strong>
					<ul>
						<li>Google deforested a protected forest for a datacenter project in Finland.</li>
						<li>Massive projects in Texas, U.S.</li>
					</ul>
				</li>
				<li>
					<strong> Local energy stress. </strong>
					<ul>
						<li>Some projects require the power of a nuclear plant to function.</li>
						<li>
							It may drive up the electricity of individuals, when it is already going up with the
							many different local and global crises people face.
						</li>
						<li>Training is especially costly.</li>
					</ul>
				</li>
				<li>
					<strong> Local water stress. </strong>
					<ul>
						<li>Yes, some projects use a closed circuit. Certainly not all of them.</li>
						<li>
							Texas, U.S. see many projects being established on top of a <strong
								>fossil phreatic table that already went from 80m to 35m deep (roughly)</strong
							>.
						</li>
						<li>Electronic components production uses a lot of water.</li>
					</ul>
				</li>
				<li>
					<strong> Rise of greenhouse gas emissions. </strong>
					<ul>
						<li>Big tech footprint has accelerated with AI development.</li>
						<li>
							We are far from a world exclusively powered by renewable, carbon free energy
							production.
						</li>
						<li>It is not just about energy usage, but also about components production.</li>
					</ul>
				</li>
				<li>
					<strong> Mass e-waste production. </strong>
					<ul>
						<li>
							Like cryptocurrencies, it pushes components to the limits then trash them, at an
							industrial scale. Smartphones, computers, and IoT already create a massive problem by
							themselves, this probably doubles it for questionable benefits. We are not talking
							about curing cancer, but allowing John Foobarbaz to have a Ghibli stylized avatar as a
							profile picture.
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<strong>Wrecking up societies and economies:</strong>
			<ul>
				<li>
					<strong> Highly disturbing the consummer market. </strong>
					<ul>
						<li>
							Graphic cards, RAM, SSDs, are exploding in price. While a bunch of them are just
							dorment in warehouses because of economical speculation and manipulation.
						</li>
					</ul>
				</li>
				<li>
					<strong> It creates yet another dependency on big tech. </strong>
					<ul>
						<li>They are not known for being ethical nor pro-democracy.</li>
						<li>
							Lack of tech sovereignty is a ticking bomb and a weapon for those hosting the
							infrastructure.
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<strong> It undermine democracies and spread misinformation. </strong>
			<ul>
				<li>Everyone can easily create deepfakes of politicians, activists, etc.</li>
				<li>
					Search results have more AI slop "articles" than human-authored content (not even talking
					about verified content.)
				</li>
				<li>
					People blindly trusting a black box throwing a bunch of text without double fact-checking
					is a propaganda tool that dictators probably dreamt of for decades (and it is probably why
					they invest money into AI.)
				</li>
				<li>
					It reinforces stereotypes of racism, antisemitism, sexism, lgbt-phobia, discrimination
					against minorities and disabled people, and so on.
				</li>
			</ul>
		</li>
		<li>
			<strong> It violates copyright and intellectual property. </strong>
			<ul>
				<li>
					Obvious examples:
					<ul>
						<li>Scraping the whole web without consent nor checking licenses.</li>
						<li>
							Microsoft using GitHub public (and probably private too) repositories for training
							Open AI GPT models.
						</li>
						<li>
							Anthropic scanning and destroying a bunch of physical books, including rare and
							limited editions. (No, destroying it doesn't mean you paid your due, Buying a CD album
							doesn't mean I can then use all its content in a film production. And it is
							ridiculously small compared to the cost of all the jobs it destroys on the other side.
							So stealing people's work to then push them to living in the streets.)
						</li>
						<li>
							Suno scrapping YouTube, Spotify, and other platforms to train their models regardless
							of copyright.
						</li>
					</ul>
				</li>
				<li>
					<p>
						Nuancing: saying a few lines of LLM code means copyright violation is not true to me.
						Because nobody can copyright a few lines of code, it doesn't make sense. The very exact
						syntax in the very exact programming language of it eventually, but that's it. The only
						case when it is possible is software patents. It only exists in some countries, and it
						just do a bunch of harm, reinforces monopolies and abusive commercial practices, and
						prevents any individual or small actor, commercial or non-commercial, to have a chance
						to enter the industry in some cases. One obvious example being the H264/MPEG/MP3/MP4
						patents story. (In my opinion software patents do not make sense).
					</p>
					<p>
						I think it becomes a violation when there was either an obvious intent or a strong proof
						or it, intentional or not. For example:
					</p>
					<ul>
						<li>Using a prompt to reverse engineer an exe and produce a competitor software.</li>
						<li>
							Taking some files or an entire FOSS project as-is to modify it and ship it without
							respecting the original license.
							<ul>
								<li>
									In that case, I consider AI companies to have violated copyright, while it's a
									case by case situation for its users that can't be summed up in a few lines.
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<strong>
				This list is not exhaustive, I probably forgot stuff, It'll be amended with time.
			</strong>
		</li>
	</ul>

	{@render question("Opinion on full AI bans?")}
	<p>
		I think it is a harmful approach, somewhat dogmatic, that also excludes any form of nuance.
		Having all the full anti AI on one side and all the turbo AI bros on the others means anybody
		with nuance (being in the usage itself, or stopping it, or anything else that fits that word) is
		de facto excluded and ostracized. (And creating a third group for them is even worse.) I see it
		as a symptom of the trend of polarization and disparition of nuances, which can't do good in the
		long term. And also as a symptom of the increasing online social pressure where you are not
		allowed to make any mistake. (I don't talk about killing or sexual assaults, and even still,
		jumping into rumors or accusations without fact-checking is weaponized even if by a minority.
		And yes judicial bodies are deffective on the subject of sexual assaults, fact checking can also
		happen with independant press and mass testimonials. It's a entire subject by itself so I'll
		stop here. But it again comes down to: it's not black or white).
	</p>
	<p>
		Am I biased because I face that personally (getting away from AI use in code but with many
		projects left "tainted")? Maybe. But I don't think it invalidates my point.
	</p>
	<p>
		Ultimately I see it as witch hunting, seeing people that used it even partially as permanently
		damned and not worth consideration. Now, I know there is also the fact that people are tired of
		seeing AI everywhere (myself included), that it is a nightmare to moderate, that some industries
		like gamedev and other artistic mediums are in a survival mode and defending themselves rather
		than willfully attacking others, etc. I recognize it's a complex topic. But I want to mention
		that it does hurt, intentionally or not, and that it should be kept in mind (and eventually
		worded in policies/codes of conduct) when taking such drastic decisions.
	</p>

	{@render question("Opinion on AI disclosures?")}
	<p>
		I think it is a good thing. It is about transparency for consumers, the same way we have it, to
		some extent (and depending of countries/regions) for food, for instance. <strong
			>However I think it critically lacks nuances right now.</strong
		> And just providing a block of text for that is duct tape, not a solution.
	</p>
	<p>For instance, if we take a video-game, I'd like to be able to know:</p>
	<ul>
		<li>For what it was used: graphics, code, music, translation, voice-overs, etc.</li>
		<li>
			A gradient for each of them: Rough estimation of how much, with some criterias to avoid having
			it being too subjective.
			<ul>
				<li>
					A mere checkbox puts a fully vibe-coded low effort product in the same basket as, say, Big
					Walk where the vast majority of the work is human-authored, without entering into the
					details of that controversy, which is also ultimately about lack of clear communication
					and consummer information.
				</li>
			</ul>
		</li>
		<li>
			Details per topic.
			<ul>
				<li>
					For assets: for placeholders? production content? concept art? For modifications or full
					generations? What coverage, which assets? etc.
				</li>
				<li>
					For code: for text-auto complete (a few lines or entire functions/files) ? Using agents?
					For code review? For debugging? With AI output in the final code? Is it about the source
					code itself or about first-party/third-party dependencies? etc.
				</li>
			</ul>
		</li>
	</ul>
	<p>
		I also think it is important to make it mandatory, the same way we do for food ingredients. Then
		it is up to the consumer to pick what it wants based on their ethics and political values (like
		it is already the case for vegan food for example).
	</p>
	<p>
		That doesn't mean full AI free spaces shouldn't be able to exist. This is mostly relevant for
		the most prominent spaces like stores with a large public such as Steam, itch.io, the Play Store
		and App Store, console stores, etc.
	</p>

	{@render question('Will you stop working on "AI tainted" projects?')}
	<p>No, and for multiple reasons:</p>
	<ul>
		<li>
			I care too much about these projects to stop working on them, even if just for personal
			use/enjoyment. And I still care about and like sharing them. I assume people can filter things
			by themselves. (And I personally also prefer filters over bans, when we are not talking about
			things like racism, forms of discrimination, and so on, I assume you see my point here.)
		</li>
		<li>
			I like to be able to refer to my previous work when seeking solution to problems. For some, it
			means the project becomes de facto AI tainted, even if there is no code transfer or because it
			is in my mind. And, like, there is nothing I can do about that. (Between it is something I
			weigh in to some extent when doing the discosures, even if I think it is a bit of a stretch.)
			<ul>
				<li>
					And if you think that way and try to find the needle to put my work down or suspect
					anything I made, I don't know, just move on? It will be better for both your mental health
					and mine. I don't want to spend my entire life justifying every single action I do for the
					look of others. And I don't think it's healthy either.
				</li>
			</ul>
		</li>
		<li>
			Nothing guarantees it will solve the issue, people will always find something to complain
			about and to invalidate everything. Reactions to the Big Walk controversy shows it to an
			extent even if it comes out of lack of transparency from House House.
		</li>
	</ul>
</section>

<style>
	:global(#page-content) {
		padding-top: var(--header-height) !important;
	}

	section {
		max-width: 920px;
		margin: auto;
		line-height: 1.75;
		counter-reset: heading;
	}

	img.thumbnail {
		display: block;
		width: 100%;
		max-width: 1169px;
		margin: auto;
	}

	div.subtitle {
		font-weight: 300;
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 3rem;
	}

	p {
		font-weight: 300;
		margin: 2rem 0;
	}
	p:has(+ ul) {
		margin-bottom: 0;
	}
	p + ul {
		margin-top: 0;
	}

	strong {
		font-weight: 900;
		color: white; /* intentional */
	}
	strong.def-title {
		color: var(--color-tertiary);
		text-decoration: underline;
	}

	h3.q {
		border-top: 1px solid var(--color-primary-transparent);
	}

	h3.q::before {
		content: counter(heading) ') ';
		counter-increment: heading;
	}

	
	a.title-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
	}

	/** yes CSS nesting is a thing but relatively recent*/
	section > ul > li::marker {
		color: var(--color-primary);
		font-size: 1.25em;
	}
	section > ul > li > ul > li::marker {
		color: var(--color-secondary);
		content: '⏵ ';
		font-size: 1.25em;
	}
	section > ul > li > ul > li > ul > li::marker {
		color: var(--color-tertiary);
		font-size: 1.25em;
	}
	section > ul > li > ul > li > ul > li > ul > li::marker {
		color: #dc49f0;
		content: '◆ ';
	}
	/* section > ul > li > ul > li > ul > li > ul > li > ul > li::marker {
		color: #f09449;
		content: '⬢ ';
	} */

	details {
		border: 4px dashed var(--color-primary-transparent);
		padding: 1rem;
		border-radius: var(--main-border-radius);
		background-color: var(--color-primary-transparent-very-light);
	}
	summary {
		color: var(--color-primary);
		cursor: pointer;
		font-weight: 900;
	}
</style>
