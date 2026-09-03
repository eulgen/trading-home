import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {
  apiBaseUrl?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'trading-home',
    configKey: 'trading_home'
  },
  defaults: {
    apiBaseUrl: 'https://api.example.com'
  },
  setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    console.log('[trading-home] Initialized with API:', options.apiBaseUrl)

    // Auto-register components from ./components
    addComponentsDir({
      path: resolver.resolve('./components')
    })
  }
})
