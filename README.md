# Chec embeddable checkout

This repository is for building `embed.js`, which can be used by small-scale merchants to embed a hosted checkout
in their website.

## Installation

Run `npm install` inside the project folder, when you've cloned the project.

## Rebuilding source

You will need `grunt` and `grunt-cli` installed, e.g. `npm install -g grunt grunt-cli`.

To watch and rebuild changes:

```
grunt
```

The source code is in `src/`, and is written in CoffeeScript.

The compiled dist files are in `build/`. There is `embed.js` and `embed.unminified.js`, which are minified and not
minified respectively. You may wish to switch the comments in the script tags of the examples file when testing
locally so you can use the unminified version and vice-versa, or switch to the stable/production version to
regression test against it.

## Testing

See `examples/default.html` for a variety of test buttons that can be used to try this out as you make changes to it.

## Deployment

There is nothing automated set up to deploy this. You will need to manually copy `build/embed.js` into the `chec`
Space on DigitalOcean, renaming it to `embed.js`: https://cloud.digitalocean.com/spaces/chec?i=77b324&path=js%2F.
