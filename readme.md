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
var request = $.getJSON("http://kittengifs.com/gifs").then(function(res){
  console.log(res.length)
})
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
We use jQuery to get the information input into the form fields, and an AJAX call
to send an http POST/PATCH/DELETE (etc.) request using that data (in JSON).
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases store data in tables and are structured/ordered by IDs. NoSQL databases
store data in documents as sets of key-value pairs. SQL databases are relational
and can be associated through join tables via foreign keys; NoSQL databases are
non-relational and are more suited for less complex associations.
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
Should be included as a callback - i.e.
AuthorModel.find({name: "Bob"}, function(err, results){
  console.log(results)
  }))
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Front-end models are responsible for handling data that is passed to (or from) them
by the back-end (which directly interfaces with the database). Front-end views take
the data that is interpreted by the models and render them to the browser.
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
  eat_bamboo: function(num_bamboo_eaten){
    num_bamboo_eaten += 1;
  }
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth is similar to a valet key in that it provides a token with limited access to
the 'important stuff', but still allows the 'driver' enough privileges to get things
done (in this case, authenticating )
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
body {
  background-color: #000000;
}

@media (max-width: 40rem){
  body {
    background-color: #FFFFFF;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Merging takes an existing branch and integrates the changes from a separate branch
back into it, obviating the need for the second branch in the process. Rebasing
integrates the second branch off of a specific commit and 'rewrites history' in
the process when combining the two branches.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Centralized workflow - everyone works on features on a local clone of their master,
pushes independently to the remote master repository.

Feature Branch workflow - work for each new feature is done in its own separate
branch, and merged into master when ready. Allows for other developers to sign off
on features via PR. Updates to local repos can be pulled down.
```
