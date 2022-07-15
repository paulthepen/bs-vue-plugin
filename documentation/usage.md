How to use:

## Deployment
- Run 'npm run build' and copy /dist folder to server

## Site setup
- Add the following code to the bottom of the site body:
    <script>const apiUrl="[path to the sites api]"</script>
    <script src="[domain of server where deployed]/dist/js/app.js"></script>
    <script src="[domain of server where deployed]/dist/js/chunk-vendors.js"></script>
    <link rel="stylesheet" href="[domain of server where deployed]/dist/css/app.css" />
- Create a redirect that sends all subfolders of '/rentals' to itself (https://redirection.me/support/installation/ is a great plugin for accomplishing this in wordpress).
-- Redirect to the same subfolder you set in data-root below...

## Component injection
- To inject a component, add <div id="brightside-plugin" data-page="[page]" data-root="[root]"></div>
-- data-page and data-root are optional. 
--- data-page specifies the component that will load (see router.js->pages variable for options). It defaults to 'unit-search'
--- data-root is also optional and defaults to 'rentals'. Provide this value if you want to use a different subfolder (ex: default path for unit-search is http://mydomain.com/rentals/unit-search, but if data-root="cabins", the path becomes http://mydomain.com/cabins/unit-search)
- After injecting a component, a config variable can be declared to modify options.
-- Ex: <script>
        let config = {
            option: {
                values....
            }
        }
        </script>
-- The available options depend on the page being loaded.