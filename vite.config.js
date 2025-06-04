import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss()
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                login: 'login.html',
                signup: 'signup.html',
                periodic_assessment: 'periodic_assessment.html',
                resource_library: 'resource_library.html',
                message: 'message.html',
                test: 'test.html'
            }
        }
    }
});
