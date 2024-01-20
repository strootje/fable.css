import AutoPrefix from 'autoprefixer'
import CssNano from 'cssnano'
import ImportCss from 'postcss-import'
import VarsCss from 'postcss-advanced-variables'

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
		VarsCss({
			variables: {
				fontScale: '1.2',
				sizes: 'sm, md, lg, xl',
				contentMaxWidth: '1140px',
			},
		}),
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
