<section id="skills">
	<div class="container">
		<h1 class="blue-text accent-4 center-align"><u>My Skills</u></h1>
		<div class="row">
			<div class="col s12 m4 l4">
				<div class="center-align red accent-1 white-text"><i class="large mdi-editor-border-color"></i></div>
				<h4 class="center-align">Design</h4>
				<p class="center-align">
					I love Usability e UX Design. I like minimalist websites, innovator design and clean interfaces. I like make wireframes, or only draw in Photoshop.
				</p>
			</div>
			<div class="col s12 m4 l4">
				<div class="center-align red accent-1 white-text"><i class="large mdi-action-settings"></i></div>
				<h4 class="center-align">Development</h4>
				<p class="center-align">
					I'm a lover and preacher of web patterns. I like to do clean and organized code, with fast loading and fidelity to layout.
				</p>
			</div>
			<div class="col s12 m4 l4">
				<div class="center-align red accent-1 white-text"><i class="large mdi-social-share"></i></div>
				<h4 class="center-align">Share</h4>
				<p class="center-align">
					As a good student, I'm always updating me about the web development news. I write about this, and I share with ohter people in lectures or a little talk in coffee break.
				</p>
			</div>
			<h2 class="center-align">How I see myself</h2>
			<p class="center-align">Below is a sample of how to evaluate me in certain things. (0 - 100%):</p>
			<div class="col s12 m6 l6">
				<h4>Languages:</h4>
				{% for skill in site.skills %}
					{% if skill.type == "1" %}
						<div>
							<p class="blue-text">{{skill.title}} ({{skill.value}})</p>
							<div class="progress blue accent-1">
								<div class="determinate blue accent-4" style="width: {{skill.value}}"></div>
							</div>
						</div>
					{% endif %}
				{% endfor %}
			</div>
			<div class="col s12 m6 l6">
				<h4>Frameworks e Tools:</h4>
				{% for skill in site.skills %}
					{% if skill.type == "2" %}
						<div>
							<p class="blue-text">{{skill.title}} ({{skill.value}})</p>
							<div class="progress blue accent-1">
								<div class="determinate blue accent-4" style="width: {{skill.value}}"></div>
							</div>
						</div>
					{% endif %}
				{% endfor %}
			</div>
		</div>
	</div>
</section>