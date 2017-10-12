# React Trivia [Work in progress]

[React](https://facebook.github.io/react/) version of Trivia application. The app is written with React and ES6 (ES2015), and is built using [Babel](https://babeljs.io/) and [Webpack](https://webpack.github.io/).

Check out a hosted version [here](https://ccoenraets.github.io/react-trivia/).

Original by: [ccoenraets/react-trivia](https://github.com/ccoenraets/react-trivia)

My idea is to have the app be able to run a full Jeopardy game with two elimination stages and a final stage.

## Make it Your Own

The questions in the example above are just placeholders. It’s easy to create your own questions:

1. Click [here](https://github.com/ccoenraets/react-trivia/archive/master.zip) to download the app

1. Modify **data.js** with your own questions
    > The questions are loaded this way as a convenience so you can easily load index.html from the local file system
           (using the file:// protocol) without runnning into XHR cross origin issues. See the commented out componentDidMount
           in app.js for an alternative XHR implementation

1. Open **index.html**. You can just double-click **index.html** on your local file system: no need for a web server.

## Build the App

If you want modify the app and create you own build:

1. Clone this repo
    ```
    git clone https://github.com/ccoenraets/react-trivia
    ```

1. Install the dependencies
    ``` 
    npm install
    ```

1. Modify the app in the **/app** folder

1. Build the app
    ```
    npm run webpack	
    ```

## Credits
Initially inspired by [Ember Jeopardy](https://github.com/machty/ember-jeopardy)

Forked from [ccoenraets/react-trivia](https://github.com/ccoenraets/react-trivia)

Owl: https://thenounproject.com/term/owl/20120/ - Owl by Nuno Lezon from the Noun Project

## License

- App: MIT
- Music: [All Rights Reserved ArtIss](https://audiojungle.net/item/motivational-jingle/833613) 
