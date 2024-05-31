ENV=prod
-include .env.local

all: clean build/styles build/scripts
deps: install

clean:
	rm -rf ./dist
install:
	npm install

build/styles:
	@ENV="${ENV}" npx postcss src/styles/fable*.css --map --dir ./dist/styles --ext .min.css
watch/styles:
	@ENV="${ENV}" npx postcss src/styles/fable*.css --map --dir ./dist/styles --ext .min.css  --watch

build/scripts:
	@ENV="${ENV}" npx tsc --sourceMap --outDir ./dist/scripts
watch/scripts:
	@ENV="${ENV}" npx tsc --sourceMap --outDir ./dist/scripts --watch