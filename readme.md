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
var request = $.getJSON('http://kittengifs.com/gifs').then(function(response){
  console.log(response.length);
};

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
Within the front-end view, the required data is collected and passed to a
function within the front-end model that makes a JSON request to the back-end.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
No SQL DBs are more flexible, making them appropriate for less complex
relationships. An SQL DB is more rigid, but it also allows for easier
many-to-many relationships.
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
This is an asynchronous method so the console.log would not reliably get called
after the results variable was set. We would need to call the console.log in a
promise callback.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models and views in FE JS allow us to separate concerns. The code for creating
and manipulating HTML elements is found within the view. If we are creating a
single page app, then the code for requesting JSON from the back-end is found
within the front-end models.

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
};
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
A person can get access to a car through a valet key iff they work for the valet
service.

A person can get access to your site via an OAuth token iff they are registered
with the third party you are using.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body{
    background: blue;
  }
};
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
A rebase will alter the commit history as if the changes to the branch being
merged in had been there all along.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Centralized Workflow: The central repo only has a master branch. Collaborators
clone down this repo and run git fetch/git pull before pushing to master.

Feature Branch Workflow: Collaborators push up a new remote branch each time
they want to submit changes. Then they submit a pull request to bring their
changes into the master branch.
```
