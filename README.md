## Project Setup

1. Initialize project

```sh
npm init svelte@next svelte-graphql
cd svelte-graphql
npm install
git init
git add .
npm run format
git commit -m 'init commit'
```

2. Tailwind

```sh
npx svelte-add@latest tailwindcss
git add .
git commit -m 'add tailwindcss'
npm run format
```

3. Additional Plug-ins

```sh
npm i -D graphql-request graphql env-cmd daisyui @tailwindcss/typography
npm i
touch .env
npm run dev -- --open --port 3333
```

4. Configure DaisyUI & tailwindCss typography

```js
// tailwind.config.js
const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
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
		rtl: false
	}
};

module.exports = config;
```

5. Add themes

```html
<!-- app.html -->
<html lang="en" data-theme="corporate"></html>
```

6. Setup GraphQL Client & Post EndPoint
7. Add env-cmd
8. Browser fetch from Post endpoint
