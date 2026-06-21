# Vanilla JavaScript + Vite + ESBuild
a custom application that uses Vanilla JavaScript + Vite + ESBuild together.

**Why use Vite + ESBuild together?**

Vite already uses ESBuild internally for very fast dependency pre-bundling and TypeScript/JS transpilation. However, in larger organizations it's common to:
- Use Vite for local development and HMR.
- Use a custom ESBuild pipeline for production builds.
- Add custom plugins, bundle analysis, microfrontend packaging, or CI/CD optimizations.

This demonstrates hands-on frontend tooling experience because we're controlling both the developer experience (Vite) and the build pipeline (ESBuild) rather than relying entirely on framework defaults.

# Run

install dependencies
```
npm i
```

**Start Development Server (Vite HMR)**
```
npm run dev
```
You should see output similar to:
```
VITE v7.x ready in 200ms

➜ Local:   http://localhost:3000/
➜ Network: use --host to expose
```
<img src="imgs/vite_dev_run.png" width="90%" />


**Production Build (ESBuild)**
```
npm run build
```
Expected:
```
Build Complete
``
Generated:
``
dist/
 ├── main.js
 ├── main.css
 └── ...
```

**Preview Production Build**

If using Vite:
```
npm run preview
```
Open:
```
http://localhost:3000
```
<img src="imgs/dashbaord.png" width="90%" />

Click on Tasks link of left sidebar

<img src="imgs/tasks.png" width="90%" />

## What Happens in Dev? Why Websocket is called with Vite application ?

When you run:
```
npm run dev
```
with Vite:
```
Browser
   │
   ▼
Vite Dev Server
   │
   ▼
WebSocket
```
Vite also opens a WebSocket connection for HMR.

## Flow
```
┌───────────────────────┐
│      Browser          │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   Vanilla JavaScript  │
│  Application Code     │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│        Vite           │
│ Dev Server + HMR      │
│ Asset Processing      │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│      ESBuild          │
│ Fast Transpilation    │
│ Bundling/Minification │
└───────────────────────┘
```

## Project Features

Task Management Dashboard

✓ Vanilla JS Components    
✓ Client-side Routing      
✓ State Management     
✓ API Layer    
✓ Vite Dev Server      
✓ ESBuild Production Bundle    
✓ Lazy Loading     
✓ Environment Variables        
✓ Local Storage Persistence        
