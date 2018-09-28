# gatsby-plugin-honeybadger

## Install and Setup

`yarn add gatsby-plugin-honeybadger`

or

`npm install gatsby-plugin-honeybadger`

Add your API key in the plugin options in `gatsby-config.js`:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    resolve: `gatsby-plugin-honeybadger`,
    options: {
      apiKey: 'YOUR_API_KEY',
      revision: `${Date.now()}`
    }
  ]
}
```
