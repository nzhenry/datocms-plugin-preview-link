# Sidebar Link Buttons DatoCMS plugin

A plugin for automatically generating link buttons in the sidebar. Intended for preview links but flexible enough to do other stuff too!

## Setup
### Install the plugin
1. On your DatoCMS dashboard, go to Settings > Plugins and hit the "+" button to add a new plugin.
2. Search for "Sidebar Link Buttons" and hit "Install"
### Add the buttons
1. Go to the settings for a model you want to display the link buttons alongside.
2. Add a new field of type: "JSON"
3. Give the field a name, such as "View Content". This name will be shown as the title of the sidebar section.
4. In the "Presentation" tab, select "Sidebar Link Buttons" from the "Field Editor" dowpdown, then hit "Save Field".
5. Create a new instance or edit an existing instance of the model you just saved.
6. Expand the sidebar and you should see the link buttons.
### Point the buttons to the correct URLs
1. Go back to the settings for the model you updated in the last step.
2. In the "Presentation" tab, select the "Buttons" field, edit the link for each button you want be displayed, then hit "Save Field".
   * You can substitute any of the numeric or single-line text fields on the entity, including ${id} and ${slug}, or any of the global properties (explained later) using the syntax ${property_name}.

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
#### Update the global properties
1. Go to the settings for the plugin (Settings > Plugins > Sidebar Link Buttons).
2. Under "Plugin settings" select the "Global Properties field and add/edit/remove the properties that will (or won't) be used.
   * These key/value pairs are made available for substitution when rendering the sidebar buttons.

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
## Usage
1. Open an instance of a model which your have added buttons to.
2. Expand the sidebar.
3. Click one of the buttons and the browser will open a new tab, taking you to the configured link. 

![How it looks](https://github.com/nzhenry/datocms-plugin-sidebar-link-buttons/raw/master/docs/cover.png)

## Development
Install all the project dependencies with: `yarn install`

Add this plugin in development mode to one of your DatoCMS project with: `yarn addToProject`

Start the local development server with: `yarn start`

The plugin will be served from [http://localhost:5000/](http://localhost:5000/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/building-plugins/entry-point).

## Publishing
Before publishing this plugin, make sure:

* you've properly described any configuration parameters in this README file;
* you've properly compiled this project's `package.json` following the [official rules](https://www.datocms.com/docs/building-plugins/publishing);
* you've added a cover image (`cover.png`) and a preview GIF (`preview.gif`) into the `docs` folder.

When everything's ready, run: `yarn publish`
