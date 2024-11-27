import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    // port: 3000,      // Ensure this matches your current port
    // Add this to handle client-side routing properly

  },
  plugins: [react()],
});
