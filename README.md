# ENVDES C132 / HUM C132 -- Spring 2023
website link -> https://SFChinatown.github.io<br />

## How to update a page
* Find a page in the src/pages file and update accordingly!

## How to add a page
* Create a JS and CSS file in src/pages
* Add a page title and link to src/components/NavItemsList.js either under an existing category or create a new category
* Add a route connecting this page link to the page you createde in src/App.js

## Running site locally
'''npm start'''

## Deployment
'''npm run deploy'''

## Available components
* AudioPlayer
* CarouselHeader: Creates a full-width carousel that can be used as a page header
* DropdownMenu: Navigation bar with sub-list drop downs
* Footer
* ListBlock: A block containing a header and list
* NavBar
* SemesterClass: Template for details about the members of the class each semester. Mark as 'active' to be displayed as the current semester's info
* TextBlock: A block containing a header and plain text
* Tile: A delineated rectangle containing a linked photo and a text block underneath

### Style reference
* https://getbootstrap.com/
* https://mdbootstrap.com/docs/standard/