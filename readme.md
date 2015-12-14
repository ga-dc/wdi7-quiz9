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
```
$(document).ready(function() {
  $("h1").on("click", function() {
  var url = "http://kittengifs.com/gifs"
  $.ajax({
    url: url,
    type: "get",
    datatype: "json"
    })
    .done(function(){
      console.log("Success!")
  }).fail(function(){
      console.log("Failure!")
  }).always(function(){
      console.log("Always!")
    })
  })
})

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```
 - Capture the form submit button and prevent the default action from taking place
 - Get the data from the form using jQuery
 - Submit using AJAX
 - Show errors if there are any

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```
SQL is a relation-based database, whereas NoSQL is document based.  A NoSQL database might be preferred when dealing with less complex associations.  Another benefit of a NoSQL DB is that they are less rigid than relational DBs so adding migrations are easier.

```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);
```

Your Answer:
```text

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```
The purpose of views in FE JS is to render models into HTML and to respond to events appropriately.

The purpose of models in FE JS is to represent the data in a structured way and to provide an interface that syncs that data with the server.

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
```text

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```
OAuth is a security protocol that allows user to grant third-party access to their web resources without sharing their passwords.

A valet key gives access to certain things while using another key to unlock everything else...?

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```
ul {
  font-size: 40rem;
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```
Rebase moves the entire feature branch to begin on the tip of the master branch and thereby incorporates all the new commits into master.  Rebase basically destroys past commits as they are added which creates a very clean project history, while merge ties together the history of feature branches with the master branch resulting in a tree-like structure.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text

```
