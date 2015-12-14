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
$.ajax({url: "http://kittengifs.com/gifs", success: function(response){
  console.log($(response).length)
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
We specify a URL as the first parameter and an object at the second.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases provide a store of related data tables, using a very rigid/fixed format. No SQL databases store JSON values and is much more forgiving/flexible with the inputs of data.
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
var results = mongoose.AuthorModel.find({name: "Bob"});
  console.log(results.name);
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views are how the data is displayed and positioned on the page (ie, JS that makes an image change on mouse hover). Models are how the data is rendered/pulled from the back-end.
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
var eat_bamboo = function(num_bamboo_eaten) {
  eat_bamboo = i++
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth is an authentication method that allows users to approve application actions on their behalf, just like a driver hands over his key to a valet driver to allow said valet to drive the owner's car on his behalf. However, that driver might want to just hand over a valet key, instead of his full key set, in order to give the valet only specific control, just like OAuth.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body{
    font-family: avenir;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Both git rebase and git merge solve the same problem-- they integrate changes from one branch to another. However, rebasing rewrites the history by creating new commits for each existing commit in the original branch. The result is a much cleaner workflow.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Forking gives multiple developers a server-side repository to work on. Pull requests provide an interface to evaluate proposed changes before integrating. Cloning creates an exact but local replica of a given repository on a user's machine. Branches are individual development flows that can later be merged together. They are useful if multiple developers are working on a single project, or if a user wants multiple branches to keep a complex project clean.
```
