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
  dataType: 'JSON'
}).done(function(data){
  console.log(data.length);
}).fail(function(){
  console.log('fail to get kitten gifs');
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
Similar to how we made a GET request above, we would make an AJAX call with a POST method to send form data to our backend. The dataType field would be changed to 'POST'. The form data would also be sent via the options object as a data object.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL database is a relational database that is could for complex relationships. It is strict on the data types and structure of data that is stored in each table.  SQL would be used for many-to-many relationships, such as tags and posts. NoSQL database is not relational. Documents stored in these database can follow any structure and can be nested inside each other. Simpler relationships are better for NoSql relationships, an example being TUNR (artists and songs).
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
Find returns a collection.
To fix, we could either make the call findOne, or console.log(results[0]).
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views handle everything the user sees on the screen. The information it displays in each view is provided by the FE models, which can be populated by ajax calls.
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
OAuth is similar to a valet key, in that the user authorizes/gives permission to a 3rd party to access their information on another site (via a access token). This is analagous to someone giving their car key to a valet - you get the key back whenever you want.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media screen and (max-width: 40rem){
  body {
    background-color: purple;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase moves the branch ahead of the master branch, changing the git history of that branch. Merging does not change the history, it just adds a new commit merging to branches together.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Fork and pull request - each member forks the main repo and pushes their changes to their new branch in their forked repo. They pull request this branch to the master branch of the main repo.

Single repo many branches - each member works from the same repo. They each make new branches to push up with changes they are making. These are merged into the master branch when ready.

Main repo admin - one person is responsible for managing the main repo - they handle merging all of the pull requests.
```
