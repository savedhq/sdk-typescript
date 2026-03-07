import {defineConfig} from '@hey-api/openapi-ts';

export default defineConfig({
  input: '../openapi/dist/openapi.yaml',
  output: {
    path: '.',
    clean: false
  },
  plugins: [
    {
      name: '@hey-api/client-next',
    },
    {
      name: '@hey-api/typescript'
    },
    {
      name: '@hey-api/sdk'
    },
    {
      name: 'zod',
    },
    {
      name: '@hey-api/schemas',
      type: 'json',
    },
  ],
});
