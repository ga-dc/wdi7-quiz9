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
var url = "http://kittengifs.com/gifs";
$.getJSON(url)
.done(function(res){
  console.log(res);
})

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
You can use the $('selector').ajaxForm or .ajaxSubmit or .serialize with .post. First you need to use the selector for the form and pass it through the ajax post function to send it back to the database you are working with.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL is a Relational Database, table based db consisting of rows that can be linked with a foreign key. SQL db's are good for many to many relationships, they are easier to use and tend to follow more standard schema definitions and best for vertical scaling. You want to use SQL when you have complex relationships going on. NoSQL is non-relational, document based and/or using key-value pair. NoSQL is better suited for hierarchical data storage. May need several servers to deal with high traffic, can't handle as well.

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
```text
Views and models work together on the FE to display backend data to the FE.

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
```text
The way that Oauth authenticates users is by giving one app access to one API for one user using an access token that gives limited rights(whatever is necessary) to create a more secure environment for a persons personal account and information. Example: third party login with Twitter. App redirects user to Twitter account to accept sign in, showing her to what information the app is asking to use which the user can then accept or deny. Oauth uses a token to retrieve credentials for her. The token is similar to a valet key in the sense it gives the app ability to use the 'car' but not access all compartments of the vehicle.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body {
    background: blue;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Using rebase will discard all previous commits and rewrite the history on github as if they new commit had always been there. It moves the entire feature branch to the tip of the master branch. Good for cleaning up all commits but is something to be used after sharing code with whole team. Merge and rebase do the same thing in the sense that they are designed to integrate one branch into another branch. Merging however, is non-destructive and existing branches are not changed. Makes for a sloppy history though.

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Centralized Workflow - remote repo has only master branch. Everyone on the team will clone it down but before pushing they must git pull or fetch to make sure the master is up to date. So the common work flow would be to clone, make changes, check master is up to date and push to master.

Feature Branch Workflow - members of team fork down to their machine. Instead of pushing directly to the master branch, each person will create their own feature branch for what they are working on and submit a pull request to be merged with the master branch.
```
