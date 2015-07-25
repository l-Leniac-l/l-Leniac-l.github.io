<section id="skills">
	<div class="container">
		<h1 class="blue-text accent-4 center-align"><u>Minhas Habilidades</u></h1>
		<div class="row">
			<div class="col s12 m4 l4">
				<div class="center-align red accent-1 white-text"><i class="large mdi-editor-border-color"></i></div>
				<h4 class="center-align">Design</h4>
				<p class="center-align">
					Sou apaixonado por Usabilidade e UX Design. Adoro sites minimalistas, designs inovadores e interfaces limpas e simples. Gosto de criar wireframes, ou mesmo desenhar layouts no photoshop.
				</p>
			</div>
			<div class="col s12 m4 l4">
				<div class="center-align red accent-1 white-text"><i class="large mdi-action-settings"></i></div>
				<h4 class="center-align">Desenvolvimento</h4>
				<p class="center-align">
					Sou amante e pregador dos padrões web. Gosto de criar códigos limpos e organizados, com otimização para rápido carregamento e fidelidade ao layout.
				</p>
			</div>
			<div class="col s12 m4 l4">
				<div class="center-align red accent-1 white-text"><i class="large mdi-social-share"></i></div>
				<h4 class="center-align">Compartilhar</h4>
				<p class="center-align">
					Como um bom estudante, estou sempre me atualizando sobre as novidades da web. Além disso escrevo artigos sobre o assunto, compartilho com as pessoas através de palestras, ou até mesmo uma conversinha durante o café.
				</p>
			</div>
			<h2 class="center-align">Como me avalio</h2>
			<p class="center-align">Abaixo segue uma amostra de como me avalio em determinadas coisas, de 0 a 100%:</p>
			<div class="col s12 m6 l6">
				<h4>Linguagens:</h4>
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
				<h4>Frameworks e Ferramentas:</h4>
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