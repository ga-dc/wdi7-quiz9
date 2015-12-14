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
$(document).ready(function{
  var url = "http://kittengifs.com/gifs";
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    }).done(function(){
      console.log(gifs.length)
      }).fail(function(){
        console.log("Ajax request failure")
        }).always(function(){
          console.log("Ajax did a thing")
          })
  });

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```
jQuery and AJAX uses $.ajax to submit a form with the attributes of the url used for the form request, the type of request being made, and the type of object notation for the form to submit to. Ajax then uses promises to check for the result of the submission. The promises can be used to respond to a success or fail on submission in different ways.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```
SQL database tables are relational, but the table remains the same amongst every row of data inside the table. It is a very rigid method of storing data. NoSQL will accept any key-value pairs into their collections. An SQL database would be used when there are only a set number of types of relational information we want to store, and we will not need to save new, custom classes of information to the table. NoSQL would be used when we need to be more flexible with the information we save, such as in the Google Places API, where some Places may have more or a bigger variety of detailed information saved in the collection, such as opening/closing hours, types of events hosted, etc.

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
The result would need to be rendered using res.render instead of just a console.log.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models allow for dynamic creation of objects with specified attributes in JS using constructors. Views are the rendering of information on the page, and allow for dynamic creation of pages for models, so that large amounts of models may be rendered on request without having to hardcode views on the front end for every instance of a model you create.
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
  this.num_bamboo_eaten++;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth works by being a standardized method of allowing you to log in to other website's services without sharing your user's current login information to the other website's service, preventing proliferation of your authorization information. OAuth works like a valet because a user will need to have their user information stored by another site temporarily, but only does this by giving a limited access key to that site. A valet key only allows you to drive the user's "car" for a short distance, and cannot access the secured areas of that "car", such as the glove box, console, or trunk.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem) {
  background-color: red;
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
A merge brings the branch being given the new features up to the latest merge commit by bringing 2 commits together and combining them. Merging will also preserve your branch history. Rebasing will create a linear history of commits by putting your feature branches' code on top of the branch it is rebased to. This avoids merge conflicts, but can have catastrophic results if not tested locally, first.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
The git czar creates the repo and either allows collaborators, or requires their repo to be forked and cloned by team members. Team members checkout new branches for their featuers, and pushes them up to the repo. When it is time to incorporate the featres, they are merged into the master branch using pull requests.
```
