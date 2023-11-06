ENV=prod
-include .env.local

all: clean build
deps: install

clean:
	rm -rf ./dist
install:
	npm install
build:
	ENV=${ENV} npx postcss src/fable/_base.css --map -o ./dist/fable.min.css
	ENV=${ENV} npx postcss src/comps/_all.css --map -o ./dist/fable-comps.min.css