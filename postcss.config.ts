import AutoPrefix from 'autoprefixer'
import CssNano from 'cssnano'
import ImportCss from 'postcss-import'
import NestedCss from 'postcss-nested'

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
		NestedCss({}),
		ImportCss({}),
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
