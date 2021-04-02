import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	colors: {
		gray: {
			"900": '#181B23',
			"800": '#1f2029',
			"700": '#47585B',
			"600": '#4b4d63',
			"500": '#999999',
			"400": '#797d9a',
			"300": '#9699b0',
			"200": '#b3b5c6',
			"100": '#DADADA',
			"50": '#F5F8FA',
		},
		yellow: {
			"900": '#FFBA08',
			"100": 'rgba(255,186,8,0.5)',
		}
	},
	fonts: {
		heading: 'Poppins',
		body: 'Poppins'
	},
	styles: {
		global: {
			body: {
				bg: 'gray.50',
				color: 'gray.700'
			}
		}
	}
})