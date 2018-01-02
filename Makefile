DATETIMENOW = $(shell date --iso=seconds)

server:
	hugo server --buildDrafts --bind 192.168.0.100 --disableFastRender

submodule:
	git submodule add -f -b master git@github.com:lnlwd/lnlwd.github.io.git public

rebuild:
	cd public && git commit -m "Rebuild github pages $(DATETIMENOW)" --allow-empty && git push origin master

deploy:
	hugo && cd public && git add . && git commit -m "Deploy $(DATETIMENOW)" && git push origin master