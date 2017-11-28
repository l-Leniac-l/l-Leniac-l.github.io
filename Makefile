DATETIMENOW = $(shell date --iso=seconds)

deploy:
	hugo && cd public && git add . && git commit -m "Deploy $(DATETIMENOW)" && git push origin master