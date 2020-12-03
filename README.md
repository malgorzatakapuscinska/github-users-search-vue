https://malgorzatakapuscinska.github.io/github-users-search-vue/

# basic-project

## Development
```
npm run start
```

## Build
### Staging
This command builds the site for a staging environment.
```
npm run build:staging
```
### Production
This command builds the site for a production environment.
```
npm run build:production
```

## **vue usage**

Steps to reproduce for Vue JS usage in project:

1. install vue js as dependency:

```
npm i --save vue
```

2. add alias for vue in **webpack.common.js** file:

```
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
```

3. Components structure:

**All components contains of two files:**

html file containing x-template - you have to place it in ./src/components directory

js file - it has to be placed in /src/scripts/components directory

3. Insert component into page's html file:


To use component in html file create two components called child-component and parent-component.

Parent component renders component into DOM.

To see Sample child and parent files go to vue folder on "file" branch.
Folder contains also _vue-example.html showing how to place components in html page file. You can copy it to /src folder and link it in index.html like shown below:

```
 <li><a href="_vue-example.html"></a></li>
```


Like is shown in _vue-example.html file - component's html files have to be imported in destination html using:

```
${require('./components/_test-vue-parent.html')}
${require('./components/_test-vue-child.html')}
```

## **bootstrap usage**

Steps to reproduce for Bootstrap usage in project:

1. Install Bootstrap as a dependency: 

```
npm i --save bootstrap
```

2. Go to **files branch** and copy **bootstrap** folder, copy **bootstrap.scss** and paste it in *styles* directory. Next import file at the begining of main.scss

3. Copy **bootstrap.js** file into **scripts** directory. Import copied file in the beginig of main.js


