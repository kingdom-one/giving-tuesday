import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
	site: 'https://kingdom-one.github.io/giving-tuesday/',
	integrations: [react()],
});
