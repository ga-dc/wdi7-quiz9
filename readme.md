# Quiz Week 9

## Instructions

1. Fork this repo
2. Clone your fork
3. Fill in your answers by writing in the appropriate area, or placing an 'x' in
the square brackets (for multiple-choice questions).
4. Add/Commit/Push your changes to Github.
5. Open a pull request.

## AJAX

### Question #1

Using jQuery, write code that makes an AJAX get request to "http://kittengifs.com/gifs". Output to the console the total number of results you get back. (Assume the server responds with a JSON array of objects representing gifs.)

Your Answer:
```js
$(document).ready(function(){
  $("h1").on("click", function(){
    var url = "http://kittengifs.com/gifs"
    $.ajax({
      url: url,
      type: "get"
      datatype: "JSON"
    })
  }
}
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
By doing requests to the client asynchronously
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases have predefined schema whereas NOSQL databases have dynamic schema for unstructured data.
```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);
```

Your Answer:
```js
var results = AuthorModel.find({name: "Bob"});
console.log(name)
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views - show an output based on changes in the model.
Model- Stores data that is commanded from the controller and presented in the view.
```

### Question #6

Given the following front-end JS model, add an instance method for all pandas called `eat_bamboo`. Calling this method should increase that panda's value for `num_bamboo_eaten` by 1.

```js
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
}
```

Your Answer:
```js
var Panda = function(name, age) {
  this.name = name
  this.age = age;
  this.eat_bamboo
  this.num_bamboo_eaten = 0

  var eat_bamboo = function()
  if(eat_bamboo > 0, eat_bamboo++)
}else {
      (eat_bamboo)
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth acts as the middle man between your apps password and the password used to through the authentication process. It provides an access token with limited responsibility.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
body{
  background: green;
}
@media (min-width: 40rem){
  body{
    background: yellow;
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Merge takes all the changes in one branch and merges them with the master branch
Rebase - Moves the branch to a new starting point.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
For teams one person starts the respository and other teams members can fork this repo, git clone it down and make a branch from the master to do their own seperate work to later merge their work back with the master. Pull requests if you are working and want all the new commmits that were pushed to the master branch.
```
