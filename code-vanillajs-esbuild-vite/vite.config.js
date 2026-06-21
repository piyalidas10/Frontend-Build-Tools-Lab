import { defineConfig } from 'vite';

/**
 * Vite configuration file for the Vanilla JS project. 
 * This configuration sets up the development server to run on port 3000.
 * You can customize this configuration further based on your project needs, such as adding plugins, configuring build options, etc.
 * For more details on Vite configuration, refer to the official documentation: https://vitejs.dev/config/
 */
export default defineConfig({
  server: {
    port: 3000
  }
});