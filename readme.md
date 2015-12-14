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
  url: "http://kittengifs.com/gifs",
  type: "get",
  dataType: "json"
  }).done(function(response){
    console.log("Total number of responses: " + response.results.length);
  }).fail(function(response){
    console.log("AJAX request failed");
    console.log(response);
  })
})
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
jQuery allows us to pull information from a form's input fields and submit the data as a javascript object in post request back to the server. With an AJAX request, this communication with the server happens asynchronously and does not require a full page reload. The "post" or "patch" method is used on the AJAX request and the data should be provided as a javascript object.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
A SQL database has a very well-defined schema (requires migrations to update) with a strong "table with rows" structure. It is better for more complicated data relationships (especially many-to-many relationships).

A NoSQL database uses the concept of documents and nested objects to structure the information. It is more flexible to changes in the schema.
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
We need a callback function to handle the response from Mongoose. To fix, we should wrap a return statement in an anonymous function.

var results = AuthorModel.find({name: "Bob"}, function(err, docs){
  return docs;
});

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views and models in Front-end OOJS help communicate asynchronously with the server while maintaining a separation of concerns on the front-end.

Models contain the information we want to render. The views tell us how to render that information on the client-side.
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
Panda.prototype.eat_bamboo = function(){
  this.num_bamboo_eaten += 1;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth allows an application to hand off the responsibilities of signing up/logging in to a website to a third-party. It allows an application to authenticate users without having them create a password (similar to a valet key, which gives the valet limited access and ability to drive a car).
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
h1 {
  color: green;
}

@media (max-width: 40rem) {
  h1 {
    color: red;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase rearranges commits to clean up the git history. For example, when merging a feature branch with a master branch, it rewrites the history to more seamlessly apply the master branch changes with the feature branch changes. This should not be done after sharing your code with someone, as it can mess up their project history.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Integration Manager Workflow
- Everyone has their own copy of the repository. Collaborators can make changes and submit pull requests to be merged into a master branch.
- One person act as the "manager" and handles the accepting of pull requests.

Centralized Workflow
- Remote repo has one branch (master).
- Collaborators all work on their own branches and, before pushing their changes up to the master branch, make sure they run a "git pull" on master to get the most updated version.

Feature Branch Workflow
- Similar to the Integration Manager Workflow, but could possibly have more than one person act as an integration manager.
```
