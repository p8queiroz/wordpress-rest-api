# Wordpress Rest API

## Style Guides

- CSS - [BEM (Block-Element Modifier)]( http://getbem.com/ )
- AngularJS - [AngularJS by John Papa]( https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md )
- JavaScript - [StandardJS]( https://github.com/standard/standard )

## Dependency Installation

You must have [NodeJS](https://nodejs.org/en/) on your environment.

**Note**: A build is already created after dependencies installation, ready to deploy.

```bash
npm i
```

## Development

- The build process is entirely managed through [Webpack](https://webpack.js.org/)
- Don't ignore ESLint warnings (the code is not a mess due to it)
- Follow the style guides
- For any doubts, consult the docs and guidelines

## Deployment

The files to be deployed are the ones present in the `app/Scripts` directory, including the generated `bundle.js`.

```bash
npm run compile  # to compile once OR
npm run watch-files  # to compile on any JS/CSS change/new import
```

