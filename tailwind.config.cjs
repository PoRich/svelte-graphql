const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
	},
	// add daisyUI plugin
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	// config (optional)
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
}

module.exports = config
