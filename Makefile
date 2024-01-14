ENV=prod
-include .env.local

all: clean build
deps: install

clean:
	rm -rf ./dist
install:
	npm install
build:
	@ENV="${ENV}" npx postcss src/fable*.css --map --dir ./dist --ext .min.css
watch:
	@ENV="${ENV}" npx postcss --watch src/fable*.css --map --dir ./dist --ext .min.css