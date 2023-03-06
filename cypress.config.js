import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://mrfabri.github.io/esc-grupp1',
    supportFile: false,
    port: 8080,
    specPattern: ['cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}']
  },
})