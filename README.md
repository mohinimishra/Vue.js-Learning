# Vue Js

# Introduction :

- Vue Js is a progressive javsacript framework, used to build User-Interface.

- It's core library focus on the view layer only.

- Easy to pick up and integrated with other library or exsisting project.

* To use vue-js in your application simply add cdn on the head tag -

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

<br>

# The Vue Instance :

- The Vue instance is an object that vue js provided to us.

```js
new Vue();
```

- this will create an object.

* It can control the HTML application , it could be a part of application or whole application.

* Vue Object will take object as a paramete -

```js
new Vue({});
```

- In Vue js object, their are some properties -

```js
el: "vue-app";
```

- this el keyword is a reserved keyword in vue js and it's value going to be a string, and it says which element on the page this gonna be control.

```js
data: {
  name: "Mohini";
}
```

- this is where we store all of our data for this vue instanse. the data which we want to render in DOM.

* To use this data property name in our html we will use double curly bracess -

```html
<div id="vue-app">
  <h1>{{name}}</h1>
</div>
```

# Data & Methods

- We could add methods in Vue js instance Object.
- To add method in vue js object, we will use "methods" keyword which is going to take value as a object.

```js
methods: {
}
```

- under this method object we can define our function.

```js
methods : {
    greet : function(){
        return 'Hello'
    }
}
```

- We can use this method in HTML by using {{}} and function name.

```html
<h1>{{greet()}}</h1>
```

- We can access data property in this function by using this keyword-

```js
method:{
    greet : function(){
        return `Hii ${this.name}`
    }
}
```

- where this keyword refers to the vue instance object and in this we can directly access data property 'name', because vue js take all the diff properties of data object and proxies them on the top.

# Data Binding

- Binding data/dynamic data to any kind of attributes like href,values, etc.

- to binibding data we use 'Directive call' 'v-bind:'

```js
new Vue({
  website-url : 'www.google.com'
})
```

```html
<a v-bind:href="website-url">Click Here</a>
```

# Events

- For event binding we use 'v-on:eventName'

```html
v-on:click = 'function()'
```

# Keyboard Events

- For keyboard events we use 'v-on:keyboardEvent'

```js
v-on:keyup = 'function()'
```

# Two way data binding

- if we want to update any value in vue instanse, by the value of input field we will use,
  'v-model ="variable name in vue instanse"

```js
new vue({
  data: {
    name: "",
  },
});
```

```html
<input type="text v-model = 'name'/>
```

# Computed Property

- Same as method.
- It will moer efficient than method because it will run that code which needs to run.

```html
<p>{{functionName}}</p>
```

# Dynamic CSS Data

- To add css in vue js we use -

```html
v-bind:class = {'classname'}
```

- in this class will take as an object.

# step-by-step -

- create class, ex-className

```css
.className {
  color: "red";
}
```

- in Vue-Js add that class

```js
data: {
  className: true;
}
```

- create computed property -

```js
  compClass : function(){
            return {
                avilable : this.avilable,
                toggle : this.toggle
            }
        }
```

- now add this compClass to html file -

```html
<div v-bind:class="compClass"></div>
```

# Conditions -

## v-if & v-show

- v-if is used when we want to use any consition-

* if v-if condition get true then it will render content, and show in DOM.
* if v-if condition get false then it will not render content, and not show in DOM.

```html
<p v-if="sucess">Do Something</p>

<p v-else-if="sucess">Do Something</p>
```

## v-show

-v-show is simmilar to v-if

- if v-show condition get true then it will render content, and show in DOM.
- if v-show condition get false then it will not render content, but show in DOM and one class is added which is display:none; .

```html
<p v-show="sucess">Do Something</p>
```

# Looping with v-for

- To Loop Array -

```html
<li v-for="(ele) in array">{{ele}}</li>
```

- TO loop array without li tag -

```html
<template v-for="(ele) in array">
  <h3>{{ele}}</h3>
</template>
```

- Using template instead of div, it will not create template tag agian and agian in DOM.

# To loop Objects -

```html
<li v-for="(val,key) in obj">{{key}}-{{val}}</li>
```

# To loop array of Object

```html
<div v-for="(ele) in array">
  <div v-for="(val,key) in ele">
    <h3>{{key}}-{{val}}</h3>
  </div>
</div>
```

# Multiple Vue Instance

- to create multiple instance -

```js
new Vue({
  ele: "root",
  data: {},
});

new Vue({
  ele: "root2",
  data: {},
});
```

# Components in Vue

- Use component in vue like Vue.component('componentName',{})

* the first parameter is component name and second parameter is an object.

```js
Vue.component("greeting", {
  template: <p>Hello</p>,
  data: function () {
    return {
      name: "ABC",
    };
  },
});
```

- in this component data is function not object and its return object.

* To use this component in html page we will use component name as a tag

```html
<greeting></greeting>
```
