## Adding new pages
If adding a new page - ie: a page that should have its own url and will be loaded through the data-pages property and/or navigated to directly:
- Create the page as a component
- Add import to router.js
- Add object to the pages array in router.js with the following format:
    {
        name: "[the path that will show up in the url]",
        component: [the component you just imported],
        meta: {
            title: "[the title to be displayed]",
            metaTags: [
                {
                    name or property: "[name of the meta tag]",
                    content: "[the content of the tag",
                }
            ]
        }
    }
- Routes will be automatically created

## Accessing config data:
- to access config data in a component, run setElementData("[name you want it stored as]", [name of the property in the config object or an object itself])
- then set getElementData("[name you provided in setElementData]") to a variable.