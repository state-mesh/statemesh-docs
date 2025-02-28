# StateMesh Docs

The website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

You can also use Docker to launch the website without needing to install and configure yarn:
```
docker run --rm -it -v $PWD:$PWD -w $PWD -p 3000:3000 node yarn start -h 0.0.0.0
```

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ npm run deploy
```


## Resources
https://www.freecodecamp.org/news/build-a-documentation-site-using-react-and-docusaraus/
https://webreaper.dev/posts/material-ui-theme-with-docusaurus/
