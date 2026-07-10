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
  },
  build: {
        minify: false
        minify: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                admin: resolve(__dirname, 'admin/index.html'),
            },
            output: {
              manualChunks: {
                vendor: ['react', 'react-dom'],
                utils: ['lodash', 'axios'],
              },
            },
        }
    },
    envPrefix: 'COOL_APP_',
  // This gives you a real-time event channel between your SPA and the Vite dev server while running npm run dev.
  plugins: [
    {
      name: 'custom-events',

      configureServer(server) {
        server.ws.on('app:initialized', (data) => {
          console.log('App initialized:', data);
        });

        server.ws.on('route:changed', (data) => {
          console.log('Route changed:', data);
        });

        server.ws.on('settings:saved', (data) => {
          console.log('Settings saved:', data);

          server.ws.send('server:event', {
            status: 'received',
            timestamp: Date.now()
          });
        });
      }
    }
  ]
});
