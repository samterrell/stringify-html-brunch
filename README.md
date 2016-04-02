Stringify HTML for Brunch
---

How does this not already exist?

## Usage
This is really designed for projects using ES6 modules
with Angular 1.x in HTML5 mode.
```bash
npm install --save samterrell/stringify-html-brunch
```

## Why?
I want this to work:
```javascript
import {default as template} from "./template";

angular.module('supercool', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.when('/', {
    template: template
  });
});
```
#### Relative resolution
Relative resolution makes refactoring and renaming easy.
Just rename that directory, and you only have to update
paths to that module, not any of the paths in the module.

#### More robust
Missing templates are compile errors this way. Compare
that to what happens when you do an HTML5 routing setup
where you have to serve /index.html for pretty much all
404's (so direct links work). If you mistype the url,
or write a route or directive before the template, you
have about 10s to kill the browser tab before it consumes
all available memory recursively loading your app.

#### Simplicity
It's really just one line of *actual* code to export a
module that returns a file's contents as a string. I
suppose I could target this specifically at angular and
try to compile things and return the URL instead of the
full template, thus getting the previous benefits, but I
would rather waste a few milliseconds for the simplicity.
There isn't a single branch. The code complexity is so
small, automating the test~~s~~ is pointless.
