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
  type: "GET",
  dataType: "json"
}).done(function(response){
  console.log(response.length);
}).fail(function(){
  console.log("Aw man, no gifs this time?");
}).always(function(){
  console.log("Meow!");
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
A post request is made using the jQuery method $.ajax and using the response that it retrieves to post data on the client-side to the API. 
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
A SQL database consists of tables, with a set number of columns and a defined schema that new data entries must follow. You would use a SQL database if you have more data relations, e.g. many-to-many relationships.

A NoSQL database is less structured and can contain a hierarchy of key-value pairs. This makes a NoSQL database more advantageous when data may need to be nested, e.g. A school that has many teachers who each have many students -- all in one collection, whereas a SQL database would have to have multiple tables to contain this data.
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
In mongoose, interacting with the database requires beginning with "db." to tell mongoose where to look. So, to get this code to work, we could fix it to say:
```

```js
var results = db.AuthorModel.find({name: "Bob"});
console.log(results);
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
The models contain the constructor functions that will be used to create new client-side instances of an object. Views are then used to render objects on the client-side.
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
```js
Panda.prototype.eat_bamboo = function(){
  this.num_bamboo_eaten--
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
A valet key can only be used to unlock the driver door and start the car, but cannot access anything else in the car (trunk, glovebox). Similarly, OAuth allows a user to allow a website/app to access their third-party account (Facebook, Twitter, etc.) for the purpose of user authentication without sharing other sensitive information held on that third-party account.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media(min-width: 40rem){
  body{ background: skyblue; }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
While a merge creates a new commit wherein two branches are combined, a rebase not only doesn't create that new commit but creates a linear git project history by rewriting new commits for the original branch commits. Merge is a safer option while rebase is a cleaner option.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
A common git workflow may go something like:
- Two members create their own feature branches (git checkout -b 'cool' and 'rad').
- Feature 'cool' is completed before feature 'rad'. That member performs 'git push' to put their work up on GitHub. They git also merge their feature into the master branch and git push that as well.
- The person working on 'rad', upon finishing their feature , performs  a git stash when notified that the master branch has changed.
- They then git pull the changes made to master and git stash apply their feature commits.
- They git push to the remote repository.
- Another person who is not a collaborator of this repo forks and clones the repository to work on another 'sweet' feature.
- Upon completion, they submit a pull request for the collaborators of the remote repository to review and accept and merge or reject the changes.
```
