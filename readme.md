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
$.ajax({
  url: 'http://kittengifs.com/gifs',
  type: 'GET',
  dataType: 'json'
})
.done(function(results) {
  console.log(results.length);
})
.fail(function() {
  console.log("error");
})
.always(function() {
  console.log("complete");
});

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
In order to send a form via ajax using jquery we store the values of the in inputs of our form into and object that we send via a post ajax call in json format to the server. JQuery is just used for the ajax call.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL DB is great for relational data models that have one-to-many and many - to - many relations. NoSQL DB are good for one-to-many up to a point but the deeper the connections the efficiency drops. I would use sql for data that has a lot of relations and no sql for simple one to two level deep one-to-many relationships.
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
Their is no promise that has the document retrieved from the db.
var results = AuthorModel.find({name: "Bob"}).then(function(results){console.log(results);});

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views contain the code of how to display an object in the DOM. Models contain how an object is constructed with properties and methods. Models create the object and views determine how it gets displayed.
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
Panda.prototype = {
  eat_bamboo: function(){
    this.num_bamboo_eaten = this.num_bamboo_eaten + 1;
  }
};
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
The concept is similar in that there is an exchange system that makes sure that you are the owner of your car before it is brought to you. You pull up and hand over your key and you get a ticket(token). Your car goes somewhere and you hope they dont adjust you settings. To get the car back you hand them your ticket(token) and they check it against their ticket list to see if it matches. If it does then a request to get your car is made and it is delivered to you.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40em) {
  .some-class {
    background-color: blue;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase pulls all the changes from a branch and adds it to the head of the branch in your local repo and moves all of your recent commits to the front to make it look like a linear progression of commits. Merge ties branches together at a point and you can see the parallel commit history.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Forking a repo allows you to do what every you like to any file in the project and have your own master to play with. In order for your changes to actually become apart of the project you would need to submit a pull request that stages your changes for someone to review to match sure the code is ready to be merged into the main branch or another branch. It helps with code review as well as keeping the master clean.
```
