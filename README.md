# Sidebar Link Buttons DatoCMS plugin

A plugin for automatically generating link buttons in the sidebar. Intended for preview links but flexible enough to do other stuff too!

## Configuration

There is one global property, named "global". It is a JSON object representing the key/value pairs that will be made available for substitution when rendering the sidebar buttons.

Example:
```
{
  "GLOBAL_PREVIEW_TEXT": "Preview",
  "GLOBAL_LIVE_TEXT": "Live",
  "GLOBAL_PREVIEW_BASE_URL": "https://your-domain/api/preview",
  "GLOBAL_PREVIEW_SECRET": "your-secret",
  "GLOBAL_LIVE_BASE_URL": "https://your-domain"
}
```

There is one instance property, named "buttons". It is a JSON array representing the buttons which will be rendered in the sidebar. The keys are "text" and "link".

Example:
```
[
  {
    "text": "${GLOBAL_PREVIEW_TEXT}",
    "link": "${GLOBAL_PREVIEW_BASE_URL}?secret=${GLOBAL_PREVIEW_SECRET}&slug=${slug}"
  },
  {
    "text": "${GLOBAL_LIVE_TEXT}",
    "link": "${GLOBAL_LIVE_BASE_URL}/posts/${slug}"
  }
]
```

## Usage
Click one of the buttons and the browser will open a new tab, taking you to the configured link. 

![How it looks](https://github.com/nzhenry/datocms-plugin-sidebar-link-buttons/raw/master/docs/cover.png)

## Development

Install all the project dependencies with:

```
yarn install
```

Add this plugin in development mode to one of your DatoCMS project with:

```
yarn addToProject
```

Start the local development server with:

```
yarn start
```

The plugin will be served from [http://localhost:5000/](http://localhost:5000/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/plugins/creating-a-new-plugin/).

## Publishing

Before publishing this plugin, make sure:

* you've properly described any configuration parameters in this README file;
* you've properly compiled this project's `package.json` following the [official rules](https://www.datocms.com/docs/plugins/publishing/);
* you've added a cover image (`cover.png`) and a preview GIF (`preview.gif`) into the `docs` folder.

When everything's ready, just run:

```
yarn publish
```
