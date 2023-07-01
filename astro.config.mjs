import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://lasnacionesunidasdeamerica.github.io',
  base: '/lasnacionesunidasdeamerica.github.io',
  integrations: [tailwind()]
})

