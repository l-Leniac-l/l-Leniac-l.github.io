<section id="contact">
	<div class="container">
		<div class="row">
		<h1 class="center align grey darken-4 white-text">Contato</h1>
			<form class="col s12 m12 l12" id="contactForm">
				<div class="row">
					<div class="input-field col s12 m6 l6">
					 	<i class="mdi-action-account-circle prefix"></i>
			        	<input id="name" type="text" class="validate" required="required">
			        	<label for="name">Nome</label>
			        </div>
			        <div class="input-field col s12 m6 l6">
					 	<i class="mdi-communication-email prefix"></i>
			        	<input id="email" type="email" class="validate" required="required">
			        	<label for="email">Email</label>
			        </div>
			    </div>
			    <div class="row">
					<div class="input-field col s12 m6 l6">
					 	<i class="mdi-action-subject prefix"></i>
			        	<input id="subject" type="text" class="validate" required="required">
			        	<label for="subject">Assunto</label>
			        </div>
			        <div class="input-field col s12 m6 l6">
					 	<i class="mdi-communication-phone prefix"></i>
			        	<input id="telephone" type="text" class="validate">
			        	<label for="telephone">Telefone (opcional)</label>
			        </div>
			    </div>
	    		<div class="row">
			        <div class="input-field col s12 m12 l12">
						<i class="mdi-editor-mode-edit prefix"></i>
						<textarea id="message" class="materialize-textarea" required="required" length="500" max-length="500"></textarea>
						<label for="message">Mensagem</label>
					</div>
				</div>
				<div class="row center-align">
					<button class="btn waves-effect waves-light blue accent-3" type="submit" name="submit" id="submit">Enviar
    					<i class="mdi-content-send right"></i>
					</button>
				</div>
			</form>
			<div id="modal0" class="modal">
				<div class="modal-content">
					<h4>Aguarde, enviando email!</h4>
					<div class="progress">
				      	<div class="indeterminate"></div>
				  	</div>
				</div>
			</div>
			<div id="modal1" class="modal">
				<div class="modal-content">
					<h4>Email enviado com sucesso!</h4>
					<p>Seu email foi enviado com sucesso! Em breve entrarei em contato. Obrigado :)</p>
				</div>
				<div class="modal-footer">
					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">OK</a>
				</div>
			</div>
			<div id="modal2" class="modal">
				<div class="modal-content">
					<h4>Falha ao enviar email!</h4>
					<p></p>
				</div>
				<div class="modal-footer">
					<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">OK</a>
				</div>
			</div>
		</div>
	</div>
</section>