<section id="jobs">
	<div class="container">
		<div class="row">
			<h1 class="center align grey darken-4 white-text">Meus Trabalhos</h1>
			{% for job in site.jobs %}
				<article class="col s12 m6 l6">
					<h4 class="center-align">{{job.title}}</h4>
					<div class="col s8 m8 l8 job-img">
						<img src="{{ site.img_folder }}/{{job.img}}"/>
					</div>
					<div class="col s4 m4 l4">
						{% for icon in job.icons %}
							<img src="{{ site.img_folder }}/{{ icon.src }}" alt="{{ icon.title }}" width="50" title="{{ icon.title }}"/>
						{% endfor %}
					</div>
					<div class="col s12 m12 l12">
						<p class="justify-align">{{job.description}}</p>
						{% if job.link != "" %}
							<p class="center-align">
								<a href="{{job.link}}" class="waves-effect blue accent-3 btn" target="_blank">Ver Trabalho!</a>
							</p>
						{% endif %}
					</div>
				</article>
			{% endfor %}
		</div>
	</div>
</section>