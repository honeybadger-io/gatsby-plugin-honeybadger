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
      revision: `${Date.now()}`,
      assetsUrl: 'https://foobar.com/assets'
    }
  ]
}
```

### Options

- `[apiKey]` _(String)_: the API key of your Honeybadger project.
- `[revision]` _(String)_: `gatsby-plugin-honeybadger` uses [`honeybadger-webpack`](https://github.com/honeybadger-io/honeybadger-webpack) to upload source maps to Honeybadger. `options.revision` needs to be unique as it is the identifier that connects your errors to your source maps.
- `[assetsURL]` _(String)_: The base URL to production assets (scheme://host/path). Used to grab source maps.
