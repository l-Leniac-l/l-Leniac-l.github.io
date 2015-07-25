<footer class="page-footer grey darken-4">
	<div class="container">
		<h5 class="center-align white-text">Find me on social networks!</h5>
		<div class="row">
			<div class="col s12 m4 l4 offset-m4 offset-l4 center-align">
				{% for social in site.social_networks %}
					<a href="{{social.link}}" title="{{social.name}}" target="_blank">
						<img src="{{site.img_folder}}/{{social.img}}">
					</a>
				{% endfor %}
			</div>
		</div>
		<div class="row">
			<div class="col s4 m4 l4 offset-s4 offset-m4 offset-l4 center-align white-text">
				<hr/>
			</div>
		</div>
		<div class="row">
			<div class="col s8 offset-s2 center-align white-text">
				<p>+55 (11) 9 4580-3939 | <a href="mailto:me@lnlwd.com">me@lnlwd.com</a></p>
			</div>
		</div>
		<div class="row white-text">
			<p class="center-align">
            	This website was built with pride for me, using Google Material Design Concepts.
            </p>
      	</div>
	</div>
</footer>
