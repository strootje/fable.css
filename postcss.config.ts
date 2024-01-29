import AutoPrefix from 'autoprefixer'
import CssNano from 'cssnano'
import CssImport from 'postcss-import'
import CssVariables from 'postcss-advanced-variables'

declare const process: {
	env: { [_: string]: any }
}

const ifProduction = (...plugins: any[]) => {
	if (process.env.ENV != 'dev') {
		return [...plugins]
	}

	return []
}

export default {
	plugins: [
		CssVariables({
			variables: {
				sizes: '2xs, xs, sm, md, lg, xl, 2xl'
			}
		}),
		CssImport({
			skipDuplicates: true,
		}),
		AutoPrefix({
			overrideBrowserslist: ['defaults'],
		}),
		...ifProduction(
			CssNano({
				preset: 'default',
			}),
		),
	],
}
