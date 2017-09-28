# Webpack 2 tutorial 

Webpack is a **module bundler**. It enables you to write your app in a modular fashion. When you run webpack, it bundles up your modules into a single script you will typically include in your HTML. It has many more features, but this is its core functionality.


In this tutorial you will learn the basics of setting up a project using Webpack from scratch and working with modules. aslo we will cover the basic concepts of webpack: entry, output, loaders and plugins.

* Please avoid copy pasting from this document into your code files. type the code yourself as much as possible for a better learning experience.

## Let’s begin:

1. Create a new project folder and call it webpack-tutorial  
You can call it whatever you want as long as it is not a name of a library (like webpack for example…) and doesn’t contain any spaces.
1. In VSCode terminal - cd into your project folder.
You can make sure you are in the right folder in the terminal - Windows will have the full path written there…
Mac / Linux users can run pwd (present working directory) to find out...  
1. Create a package.json by running the following in your terminal  `npm init -y`
1. Install webpack locally and save it as a dev-dependency `npm i webpack -D`
1. In the root of your project create  a folder named `src`
1. Inside the src folder create two files **index.js** and **alert.js**
1. In the root folder of your project create a file named **webpack.config.js**. In this file, we will configure webpack settings.
1. The first thing we will configure is the entry point for webpack to start from, and the output file and folder it should produce. In some places of our configuration file we will need to write a full and absolute path. In order to do that we will use **Node.js** built in module called **path** which does exactly that. Don’t forget that we are using Node.js as a runtime to run our JS automation scripts...

    The following defines **index.js** in the **src** folder as the entry point for the webpack process, 
    a dist folder as an output folder and the **app.bundle.js** as the output file.
    In **webpack.config.js** write:

    ``` javascript                                           
    const path = require(‘path’);

    module.exports = {         
    entry: './src/index.js',          
    output: {                 
        path: path.resolve(__dirname,'dist'),          
        filename: 'app.bundle.js', 
    },                       
    };                         
    ```               

1. Now that we have a basic minimum webpack configuration, we can write something very minimal just to see that it is working correctly...
Write the following line in src/index.js

    `require("./alert.js");`


1. Write the following line in src/alert.js

    `alert("This script is alive!!!");`

1. In the root folder of the project create a file named index.html
This is the file that we will actually run in the browser and it uses the final result script of webpack **dist/app.bundle.js**

1. Write the following in your **index.html**

    ``` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Webpack demo</title>
    </head>
    <body>
        <h1>Webpack demo</h1>
        <script src="dist/app.bundle.js"></script>  
    </body>
    </html>
    ```

1. To trigger the webpack process, generate the **app.bundle.js** and start our application, modify the scripts section in **package.json**
and write a start script like so:

    ``` javascript 
    "scripts": {
        "start": "rimraf dist && webpack && serve -p 3000"
    },
    ```

    Note: For this script to work you will need to install **rimraf** and **serve** as dev-dependencies, so in your terminal run: `npm i -D rimraf serve`

    This script actually does 3 things. 3 commands are written together using the && (and) operator.
    * **rimraf** dist means “delete the dist folder recursively” (recursively = delete also all of its nested folders too)
    * **webpack** is the command we use to bundle up our modules into one script. It knows to use webpack.config.js by default...
    * Finally **serve** is a quick and easy way to serve static files over a network. It is a lightweight static files server.
    We run **serve**, which will use the **index.html** as the default file to serve. 
    We also tell it to run on port 3000 like we usually do: `serve -p 3000`


1. To run this script run the following in your cli `npm start`
Notice that serve will inform you in the terminal it is running on localhost:3000 locally,but also give you another ip address that is available over your network, so if for example you want to test your web app on your mobile device, as long as it will use the same wifi network as your computer - you will be able to see it if you enter this address in your mobile browser… :)


1. Assuming all went well so far let's move on to the next webpack basic concept which is loaders.
    
    Loaders are small webpack specific libraries that tell webpack how to process different file types.
    When we configure them in webpack.config.js we basically say something like  “When you encounter this kind of file, use this library to process it”.

    First we will add babel to our project to be able to enjoy all of ES6 features and later also react.
    We will need to install the **babel-loader** along with the **babel-core** library and specific **preset** we will be using
    run this in your terminal `npm i -D babel-loader babel-core babel-preset-es2015`
1. Next - for babel specific configuration create a file in your root project folder and name it **.babelrc**
1. In **.babelrc** write the following
This tells babel to use the es2015 preset we’ve just installed
    ```javascript
    {
    "presets": ["es2015"]
    }
    ```

1. Now let’s modify **webpack.config.js** to include the usage of **babel-loader**

    We will add a module section to tell webpack how to handle modules imports and set rules for each file type.

    The following tells webpack to process .js files using **babel-loader** (and the presets we’ve set in **.babelrc**) and exclude the **node_modules** folder since we don’t want to modify 3rd party libraries.

    ``` javascript
    const path = require('path');

    module.exports = {
    entry: './src/index.js',          
    output: {                 
        path: path.resolve(__dirname,'dist'),          
        filename: 'app.bundle.js', 
    },  
    module: {
        rules: [
        { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
        ]
    },

    };
    ```


1. To verify that we can process and use ES6 modules (with imports and exports) we will create an ES6 module file, export it and import this module from another file. Notice that for now we are not using any React.js - this is purely ES6 feature that is not yet supported in the browser so we’ll let webpack and babel transpile it to ES5 so the browser can run it.
Under the **src** folder create a new file named **robot.js** and write the following in it:

    ``` javascript
    const greetings = (text, person) => {
        return `${text}, ${person}. I got you but I’m sorry, 
        I’m afraid I can’t do that. 
        it is against my conscience`;
    }
    export default greetings;
    ```

1. Modify **src/index.js** to use our new file like so:

    ``` javascript
    import greetings from './robot.js'
    document.write(greetings("Affirmative", "Dave"));
    ```

1. Run your app by running in your cli `npm start`
 
1. In order to be able to debug your code you will need to generate source maps, 
**Source maps** are files that map the code running in your browser to your source code and allow you to use chrome developer-tools.
To generate source maps, in **webpack.config.js** add the following line somewhere on the first hierarchical level of the configuration object.
`"devtool" : "source-map"`


1. Great. Assuming all runs well now, let’s address some basic styling principals in our app
Under your src folder create **src/globals.css** and include the following in it

    ``` css
    .element {
        background-color: skyblue;
        color: white;
        font-size: 20px;
        padding: 20px;
    }
    ```
1. Using webpack and babel, we can import css files into our code using the same syntax we use for JavaScript modules.
Let’s import the style into our **src/index.js**

    ``` javascript
    import styles from './globals.css'

    let element = `
    <div class="element">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
    </div>
    `
    document.write(element);
    ```

1. If you have the serve server running, stop it using **ctrl + c** and start it again to reflect the changes.
You will notice your script fails and doesn’t compile correctly.
By default, webpack treats all `import` references to other modules as JavaScript files.
In order to be able to process other types of files properly we install webpack loaders and use them in our **webpack.config.js** file
Webpack loaders simply tell webpack how to treat different file types.
let’s install additional two loaders to handle our css 
`npm i -D css-loader style-loader`

1. Now let’s use the loaders we have just installed in our **webpack.config.js**
We will need to modify it like so:

    ``` javascript
    const path = require('path');

    module.exports = {
    entry: './src/index.js',          
    output: {                 
        path: path.resolve(__dirname,'dist'),          
        filename: 'app.bundle.js', 
    },  
    module: {
        rules: [
        { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
        { test: /\.css/,use: ['style-loader', 'css-loader'] }
        ]
    },
    "devtool" : "source-map"
    }; 
    ```

1. Run your app again `npm start` and you should see the newly created blue paragraph on localhost:3000.
Important to realise - open chrome developer tools and notice webpack had injected a `<style>` tag in the `<head>` section
Specifically the **css-loader** process the css files while the **style-loader** injects style tags into the html.

1. Obviously - we may decide we want to extract the processed css into a separate file.
Up to this point we have learned 3 basic webpack principals - **entry, output** and **loaders**. Next let’s meet **plugins**.
While loaders tell webpack simply how to handle different file types. Plugins enhance webpack capabilities with many additional features which is essentially open-ended, since anyone can write a webpack plugin that does something new.
In order to create a separate css file we will use a webpack plugin called **extract-text-webpack-plugin**
`npm i -D extract-text-webpack-plugin`

1. Comment out the existing css loaders section in **webpack.config.js**
Modify your the **webpack.config.js** file like so:

    ```javascript
    const path = require('path');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');

    module.exports = {
    entry: './src/index.js',          
    output: {                 
        path: path.resolve(__dirname,'dist'),          
        filename: 'app.bundle.js', 
    },  
    module: {
        rules: [
        { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
    // { test: /\.css/,use: ['style-loader', 'css-loader'] }
        { 
            test: /\.css/,
            use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
            })
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin("globals.css")
    ],
    devtool : "source-map"
    };
    ```


    Notice we have added a plugins section, just after the module section.
    The plugins section is an array, in which we instantiate the webpack plugin libraries and make them available to our loaders section. Specifically in this example, we are instructing webpack to process all css files using the css-loader and creating a globals.css’ file in the output folder (dist)

1. Add a link to **dist/globals.css** file in the head section of the **index.html**
`<link rel="stylesheet" href="dist/globals.css">`

1. Start your app again and notice that it didn’t inject a style tag to the header, but instead loaded the **global.css** file webpack created in the dist folder. You can verify that this is indeed the case by going to the **Network** tab in chrome dev tools and see the actual file request. 


1. In your dist folder - you will notice that app.bundle.js and globals.css are not optimized. They contain spaces and line breaks, comments and long names for the functions in javascript. Next let’s optimize our output files. This is very easy to do - simply add a **-p** flag to the webpack command. Modify the scripts section in **package.json** like so

    ```javascript
    "scripts": {
        "start": "rimraf dist && webpack -p && serve -p 3000"
    },
    ```

    Note: The **-p** for webpack stands for production, while the **-p** for serve stands for port. 

1. Run your script again and notice that this time, when webpack builds your files in the dist folder - they do not contain any spaces, line breaks or comments and the function names in javascript are much shorter and impossible to read. This is because it is not optimized for human readability, it is optimized for browser performance.

1. By now you must have felt there must be a better way than to stop and restart your server each time you make a change right?
Let’s enable hot-module-reloading in real-time by using webpack dev server. We will also take this opportunity to organize our files and folders structure a bit. First - install the necessary libraries by writing in your terminal:
`npm i -D webpack-dev-server copy-webpack-plugin`

1. Now we will add a dev script in our scripts section of package.json like so
    ``` javascript
    "scripts": {
        "dev": "webpack-dev-server",
        "start": "rimraf dist && webpack -p && serve -p 3000"
    }, 
    ```

1. Next we will modify our **webpack.config.js** to look like that:

    ``` javascript
    const path = require('path');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const CopyWebpackPlugin = require("copy-webpack-plugin");

    module.exports = {
    entry: './src/index.js',          
    output: {                 
        path: path.resolve(__dirname,'dist'),          
        filename: 'app.bundle.js', 
    },  
    module: {
        rules: [
        { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
    // { test: /\.css/,use: ['style-loader', 'css-loader'] }
        { 
            test: /\.css/,
            use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
            })
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin("globals.css"),
        new CopyWebpackPlugin([
            { from: 'src/index.html' },
        ])
    ],


    devServer: {
        contentBase: './',
        compress: true,
        port: 3000,
        stats:"minimal",
        open:true
    },
    devtool: "source-map"
    };
    ```

1. We have configured **webpack-dev-server** to run on port 3000, and open a new tab each time we run it
We have also added a reference to **copy-webpack-plugin** at the top of the file and used it in our **plugins** section.
Noticed in the **plugins** section we told it to copy **index.html** from the src folder.
The idea is to write all source files inside the **src** folder and to have everything our app needs in order to run inside our **dist** folder.
That way we can upload this folder to a remote server and simply run it.
Let’s move our **index.html** from the root folder to the src folder while modifying the references it has in it for the **globals.css** file and **app.bundle.js** file and removing the **dist** from its path, since now **index.html** itself will be copied from the **src** folder to the **dist** folder and load the files locally. 

    ```` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Webpack 2 Demo</title>
        <link rel="stylesheet" href="globals.css">
    </head>
    <body>
        <h1>Webpack 2 Demo</h1>
        <script src="app.bundle.js"></script>
    </body>
    </html>
    ```

1. Now run the dev script in the terminal `npm run dev`
A new tab should open automatically showing the same content from earlier, but now if you will make a change to your css files or js files, it will be pushed to your browser immediately, making your development workflow much easier… 
While the server is running - change the globals.css and give the **.element** class a different `background-color`. Save the file and notice the changes in the browser.

1. Another thing to understand about **webpack-dev-server** is that in order for it to be able to push changes in real-time it is serving all of its content from the server memory rather than creating actual static files like we ran with **serve** previously. 
To illustrate that - stop **webpack-dev-server** by hitting **ctrl + c** in your terminal. If the **dist** folder exists in your project - delete it!
Run the dev script again and notice that your app is showing correctly in the browser while no dist folder actually exists with no files…

    So as long as you are developing, obviously you will want to use this workflow. But when you are done developing and want to prepare your distribution folder (dist is short for distribution…) - then you need to use the start script we have created before. Only this time we will modify it a bit and tell serve to run our static files from the dist folder. Modify your scripts section in the package.json like so:
    
    ``` javascript
    "scripts": {
            "dev": "webpack-dev-server",
        "start": "rimraf dist && webpack -p && serve dist -p 3000"
    },
    ```


1. Run your app - `npm start`
Your app should be available on localhost:3000 like before, only now it is serving actual static files from the dist folder like in a real world production scenario.

1. Some say the meaning of life is 42 which is definitely a thing to contemplate and reflect upon. However, if you wish to investigate further about the meaning of **webpack**, you might want to visit the official site - https://webpack.js.org/ 

If you made it so far and went through all of the steps, I hope you know a bit more about webpack and feel more confident setting up your projects using it. While it is easier to start learning **React.js** by using tools like **create-react-app** I think that knowing how to build your own stack will make you a better developer. Have a look at the React projects setup we have used so far and see if they make more sense.
Hoped you enjoyed this tutorial. 
You may now have a big chocolate chip cookie! 
