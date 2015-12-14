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
  url: "http://kittengifs.com/gifs"
  method: "get"
})
  .then(function(results){
    console.log(results.length)
  });

// Note: you could use $.getJSON() here as well, since it's a shortcut version of $.ajax().
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
When submitting a form via AJAX, there are a few things we need to do:
1. Register an event listener for the form submissions (buttton click).
2. When the `submit` happens, we need to preventDefault() to keep the browser from submitting the form.
3. Next, we need to collect all the data from the form, and package it up into an object to be submitted by ajax. We can use `.val()` to get the value of an input
4. Finally, we use $.ajax() with a post/put verb, to make the ajax request. We also need to include a `data` property which contains the form data.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases are built around the idea of tables, rows (entries), and columns (attributes). SQL databases are optimized for relational data, and support relating data through JOIN operations and Foreign Keys. SQL databases have a rigid schema, which describes the structure of the tables and columns.

NoSQL databases often lack a schema, and allow us to insert any documents (similar to JSON objects) we want into the databases collections (related groups of objects). NoSQL can be faster for some cases, but slower when dealing with relational data.
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
This code is not using a callback function to process the results. Mongoose DB operations (find, save, etc) are all async, which means we need to pass a callback function to handle the results when they come back. Example below:
```

```js
var results = AuthorModel.find({name: "Bob"}, function(results){
  console.log(results);
});
```


## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Front-end models represent our data, and their actions. Generally, they contain methods for CRUD actions. In order to persist to the DB, a Front-End model will usually use AJAX requests to update the data accordingly on the back end.

Front-end views generally have two main purposes:
1. Take data (from F.E. Models) and render them to HTML and put them on the page (DOM).
2. Defining how to respond to user events (clicks, keypresses, etc), by updating the DOM, using models, etc.

Because they have two 'jobs', they are sometimes called ViewControllers.
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
Panda.prototype.eat_bamboo = function() {
  this.num_bamboo_eaten = this.num_bamboo_eaten + 1;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
Valet keys allow you to give someone the keys to your car without full access (e.g. they can't open the trunk or glovebox). Similarly, OAuth allows you to share your account on a 3rd party provider (e.g. Facebook, Twitter, Google), without given the consumer app your password, or necessarily full access to your account, such as reading / modifying  your data, posting on your behalf, etc.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem) {
  body{
    background: lemonchiffon;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
A rebase takes a set of commits, and re-writes them (modifies them) so that they appear to apply to a more recent point in history. This effectively makes it look like the rebased work was originally done on the commit it was rebased on, not the original commit it really was made on. In other words, the history appears to be liner, one change happening at a time, as opposed to being branched off.

A merge makes a new commit that describes how to combine the changes made in more than one branch. This preserves the history of how the work was done, but does lead to branches in your history.

A branch should never be rebased if the branch has been shared with others, as it can lead to confusion and conflicts.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
There are plenty of workflows a team can use:

1. Everyone is a contributor, and simply pushes their work to master.
2. Everyone is a contributor, but pushes their work to feature branches. Other team members merge in the branches at their discretion. Pull Requests may or may not be used.
3. Everyone forks the repo, and creates Pull Requests from their fork to the master. One or more people are in charge of reviewing and approving Pull Requests.

In addition to the above, teams may set their own policies on code review, when PRs can be merged, etc.

Additionally, teams may decide on a convention for naming their branches, and how changes get merged into the master branch (e.g. there may be an intermediate Development branch for integrating multiple PRs and testing how they work together.) One such example is the git flow model.
```
