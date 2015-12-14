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
$(document).ready(function() {
      var url = "http://kittengifs.com/gifs.json"
      var request = $.ajax({
          url: url,
          type: "GET",
          dataType: "json"
        }).done(function(response) {
            var kittens = [];
            for (var i = 0; i < response.gifs.length; i++) {
              console.log(response.gifs[i].img);
            }
          });
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases store data in tables, you can think of each entry in a SQL database as a row with an ID. for Many to Many relationships SQL databases use Join tables where each row is a relationship (ID, author ID, Book ID ) and each relationship has an ID, SQL databases use schema to set up the database so all the rows are uniform. NoSQL Databases store information in "docs"  where each entry is like a page. all the fields on a doc do not have to be the same, often people create schema for NoSQL databases but they are not required
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
the Author Model is a constructor one would need to call an instance of that model.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models hold information, but typically don’t handle behaviour. Views format how the information is formatted.
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
  this.eat_bamboo = function() {this.num_bamboo_eaten + 1};
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth is an agreed-upon set of standards for logging in through a third party service. Like a valet service OAuth uses special keys to identify that people are who they say they are.  
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body{
    background: tomato;
  }
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
In a rebase you merge master into your feature branch to get out bugs there and then merge the feature branch back into master, this leads to a cleaner history on the master branch
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Centralized Workflow: everyone works on Master, Feature Branch Workflow: developers create branches based on features  (nav bar, carousel etc. ), Gitflow Workflow
```
