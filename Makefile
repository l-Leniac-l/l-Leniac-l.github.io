DATETIMENOW = $(shell date --iso=seconds)

deploy:
	cd public
	git add .
	git commit -m "Publishing $(DATETIMENOW)"
	git push origin master