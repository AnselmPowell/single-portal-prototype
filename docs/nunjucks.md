# Using Nunjucks

## What is Nunjucks? 

It's a JavaScript-based templating language that speeds up production of HTML pages. Using Nunjucks gives us the advantage of faster production and only changing repeated HTML elements once.

You can view [the documentation for Nunjucks online](https://mozilla.github.io/nunjucks/) and [templating guides](https://mozilla.github.io/nunjucks/templating.html). [The documentation for jinja2](https://jinja.palletsprojects.com/en/3.1.x/templates/#) (which Nunjucks is closely based on) is also helpful. Below has set up instructions:

## Requirements

1. **Node package manager (npm)** - Gitpod should already have npm. If you run into trouble, visit the [npm documentation](https://www.npmjs.com/) for installation guidance.
2. **Nunjucks node package** - There are alternative ways of installing Nunjucks, but this is the easiest (see step 1 below).

## Steps

### Install Nunjucks using Node (make sure you have Node installed):
```markdown
$ npm install nunjucks
```
This will install the necessary packages which will create a create a new directory in your root, 'node_modules', it's best practice to add this directory to your .gitignore file for commits (but make sure you keep a copy for your own local development). Two .json files will also be created - keep these in your directory so developers can see what our dependencies are.

### Create a templates directory at your root and a base.njk file inside

This file (templates/base.njk) will function as our base template from which all other templates will 'extend'. Here is an example of a base.njk file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Add your common meta tags, stylesheets, and scripts here -->
    <!-- pageTitle is a variable that you can use to set the title of pages -->
    <title>{{ pageTitle }}</title>
</head>
<body>
    <header>
        <!-- Your header content here -->
    </header>
    <main>
        <!-- ignore 'raw' tag here - purely for GH Pages deployment error handling --->
        {% raw %}
        <!-- block 'content' is what we will 'fill' with our other templates -->
        {% block content %}{% endblock %}
        {% endraw %}
    </main>
    <footer>
        <!-- Your footer content here -->
    </footer>
</body>
</html>

```
### Create child templates

So for each page, e.g. funding, booking, etc, we'll create Nunjuck templates using the .njk file extension. These templates extend the base template. For example, this could be index.njk:
```html
{% extends "base.njk" %}

{% block content %}
    <h1>Welcome to Sport Wales Portal</h1>
    <p>This is the home page!</p>
{% endblock %}

```

### Render the templates

Create a JavaScript file, the example below is a simplified and expanded version of what is currently in ./js/nunjucks.js file: 
```javascript
const nunjucks = require('nunjucks');
const fs = require('fs');

// Configure Nunjucks to load templates from a directory (adjust this path)
nunjucks.configure('./templates', { autoescape: true });

// Define variables for your templates
const context = {
    pageTitle: 'Sport Wales Portal',
    // Add any other variables needed for your templates
};

// Render the template (replace 'index.njk' with the desired page)
const output = nunjucks.render('index.njk', context);

// Write the rendered HTML to a file or insert it into your web page
fs.writeFileSync('output.html', output);
```

### Run the JavaScript file
Simply run the nunjucks.js file to run the file and write the HTML pages:
```markdown
$ node js/nunjucks.js
``` 

### Top tips
You'll find that in your IDE you may lose syntax highlighting in your .njk compared to your regular HTML files. There is a VSCode extension called 'Nunjucks Template' that fix this for you.