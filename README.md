<p align="center">
  <img src="https://raw.githubusercontent.com/chec/commercejs-examples/master/assets/logo.svg" width="380" height="100" />
</p>
<p align="center">
This repository is for building `embed.js`, which can be used by small-scale merchants to embed a hosted checkout
in their website.
</p>

<p align="center">
  <a href="https://commercejs.com">commercejs.com</a> | <a href="https://twitter.com/commercejs">@commercejs</a> | <a href="http://slack.commercejs.com">Slack</a>
</p>

## Installation

Run `yarn` inside the project folder, when you've cloned the project.

## Rebuilding source

To watch and rebuild changes: `yarn start`. This will start a local dev server running at http://localhost:3000, and
will hot reload in your browser. The default public/index.html file contains a number of buttons that test the snippet.

The source code is in `src/`, and is written in React, with Tailwind for CSS.

### Production

Build for production with `yarn build`. You will need to upload `build/static/css/embed.css` and `build/static/js/embed.js`
to the Chec CDN (manually at this point): https://cdn.chec.io/v3/embed.css and https://cdn.chec.io/v3/embed.js.

## Testing

Load up `yarn start` (or `yarn build`, then use `yarn serve` for local server).

## License

Released under BSD-3-Clause, [see here](LICENSE.md).
