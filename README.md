# Typescript React Template

This Project is a template for Front-End-Development using React and Typescript using webpack for code Bundling

- React : https://reactjs.org/
- Typescript : https://www.typescriptlang.org/
- Webpack : https://webpack.js.org/

# Configuration

## Typescript

Basic Typescript configuration has been set to `tsconfig.json`
The project wil use `react` for the JSX and using the ES6 standard.

## Webpack

Webpack has been configured to bundle to `/dist/bundle.js` 
The `react` and `react-dom` will be set as externals and won't be compiled to the bundle

The `react` and `react-dom` will be imported manually in the `index.html` trough the CDN link.
CDN Link source : https://reactjs.org/docs/cdn-links.html

