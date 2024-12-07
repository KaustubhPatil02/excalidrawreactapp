# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Explanation of Changes:


1. The process package is explicitly installed to provide a shim for the process object, commonly used in Node.js and some browser-compatible libraries.
This allows you to use process without runtime errors in the browser environment facilitated by Vite.
    ```
    npm install process
    ```

2. Vite doesn't automatically define global or process.env as Node.js does. Some libraries assume these variables exist (like in a Node.js environment).
- Adding define: { global: {} } creates a dummy global object, resolving compatibility issues for libraries expecting this variable.
- Adding "process.env": {} ensures libraries relying on process.env for environment variables won't throw errors during the build or runtime.
- vite.config.js file, add this code
    ```env
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react-swc'

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react()],
    define:{
        global:{},
        "process.env":{}
    },
    })
```