# Intro to React

## What is React?

React is a Javascript library that we can use to build beautiful front ends. 

It was created by Facebook in 2011. Aside from Facebook itself Instagram, Codeacademy and Khan Academy are also built using React.

React has a very robust community and that is just one of many reasons why people like it so much.

## Pre-setup

You can also create-react-app which bootstraps a project and gives us a lot of files (some of which we may not need) but it doesn’t require any configuration.

You can also simply import React into your website via script tags, as well as Babel for use of JSX but this is not a common way of doing it.

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

 <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

```

To go through this lesson though you should have already created a Webpack setup for your project.

## Install

We can install React using `npm install react react-dom`.

We should already have the following files:

- **package.json:** a file that lists the versions of all of the node modules used in this project.
- **src:** a folder that contains all of the source code for your app
- **public:** a folder that contains configuration and development files.
- **.gitignore**

## Setup

We first want to create an `index.html` file in our `public` folder.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Intro to React and Webpack</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

We don't need a script tag as Webpack will connect it for us.

Next we need to create an `index.js` file in out `src` folder.

```js
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

The inside of the render block looks a bit like HTML, but it's actually JSX, a language that enables us to mix HTML and JavaScript.

The `ReactDOM.render` line is the entry point of our app. This is where React retrieves the App component we have built and replaces it with the generated HTML.

Each Component will always have a return statement, this is what the component will look like when it is displayed. 

Return statement may also be wrapped in a render block.

## Components

Now we have completed the setup, we can begin to seperate our files into components.

First we need to create `App.js` inside of the `src` folder.

Note that the `App.js` is capitalised - this is a React convention when writing components.

```js
import React from 'react'
class App extends React.Component {
    render() {
      return (
          <main>
              <h1>Hello World!</h1>
              <p>Nice to meet you React</p>
          </main>
      )
    }
  }
export default App
```
 
 We need to export the App so it can be used by the `index.js`.

## JSX

We can create variables inside of the render block and use the JSX to display it.

```js
render() {
    const helloWorld = 'Welcome to React'
    return (
        <p>{helloWorld}</p>
    )
}
```

This is useful as it means we can constantly adapt and update our frontend based on data.

## The Virtual DOM

React Apps work using the virtual DOM which enables React to update only parts of the DOM, based on only the pieces that need to be updated. 

So on a required update, the whole page does not have to be reloaded, only the part that has changed.

The existing DOM is very slow and clunky, this is one main reason that people like React, it speeds up user experience.

## Working with Data

Another reason a lot of people like React is that it is declarative. That means that we tell React what we want and it figures out how to do it. 

Other languages we’ve seen are imperative, meaning we have to tell it how to do each thing.

In order for React to reach its full potential so that the virtual DOM can identify each elelment and therefore only update the required one we can give each element a key, which should be unique.

## ES6 v ES5

It is recommended to use ES6, the most updated Javascript scripting language for react. It won’t complain too much at ES5, but best to stick with the most up to date.
