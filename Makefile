ENV=prod
-include .env.local

all: clean build
deps: install

clean:
	rm -rf ./dist
install:
	npm install
build:
	@ENV="${ENV}" npx postcss src/styles/fable*.css --map --dir ./dist/styles --ext .min.css
watch:
	@ENV="${ENV}" npx postcss --watch src/styles/fable*.css --map --dir ./dist/styles --ext .min.css