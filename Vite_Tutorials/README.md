# Vite | Next Generation Frontend Tooling

In a few words, we can say that Vite is a build tool for web applications, and one of its biggest selling points is that it is fast—really, really fast.

This is even reflected in its name. It is called Vite, pronounced "veet", which comes from the French word for "fast."

One of the nicest things about Vite is that it provides powerful default configurations that are tailored to your chosen framework. 
This means you can start building your application immediately without worrying about configuring your build tool.

**The key features of Vite are:**    
⚡ Extremely fast development experience.    
🔧 Sensible default configuration with minimal setup.    
🏗️ Build tool (not a module bundler).    
🚀 Uses esbuild during development for speed.    
📦 Uses Rollup for optimized production builds.    
🔥 Fast development server with Hot Module Replacement (HMR).    
🛠️ Easy project scaffolding for modern frameworks.    
🔌 Powerful and extensible plugin ecosystem.    

## Vite is a Build Tool, Not a Module Bundler

A very important point—because many developers get confused about this—is that Vite is not a module bundler; it is a build tool.

Internally, Vite uses different tools for different stages of development:

- **During development**: it uses esbuild, which is extremely fast for transforming and serving modules.
- **For production builds**: it uses Rollup, which performs advanced bundling and optimization to create efficient production bundles.

## Development Server

Another important feature of Vite is its development server.

Think about the normal development process:
1. You write some code.
2. You want to test it.
3. You make a small change.
4. You test it again.

Vite makes this process much smoother because it automatically serves your application, rebuilds only the necessary parts, and reloads the page while preserving the application's state whenever possible through Hot Module Replacement (HMR).

As a result, development becomes much faster and more enjoyable.

## Project Scaffolding

Another major feature of Vite is its project scaffolding capability.

For many developers, their first interaction with Vite is creating a new application using frameworks such as:
- React
- Vue
- Svelte
- JavaScript
- TypeScript
and many others.

Previously, React developers commonly used Create React App. While it worked well initially, it eventually became slow and bloated.

This is where Vite became extremely popular because it was lightweight, fast, and simply worked.

With Vite, you can quickly scaffold a project using your preferred framework, generate the boilerplate code, and 
then focus on writing your application's business logic instead of spending time on configuration.

## Plugin System

Finally, another excellent feature of Vite is its plugin system.

Plugins allow you to customize and extend Vite's functionality according to your project's needs.

For example:
- Extend the build process.
- Add support for custom file types.
- Integrate third-party tools.
- Optimize assets.
- Implement custom transformations.

If an existing plugin already provides the functionality you need, you can simply install it. 
If not, Vite also allows you to create your own custom plugins. In the course, you'll learn how to build and use them.


