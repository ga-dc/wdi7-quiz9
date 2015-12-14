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

$.getJSON("http://kittengifs.com/gifs")
  .done(function(response){
    console.log(response.length)
  }).fail(function(){
    console.log("Failed")
  })
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

When a form is submitted via AJAX the form will be submitted asynchronously for a better experience on the client-side. On the backend a post/patch request is being sent via AJAX to the DB to update/create some data in the DB.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text

At the highest level, SQL databases are relational and NoSQL databases are not relational. In SQL databases relationships are created from one table to the next via a foreign key, e.g., every student in a students database may have a foreign key for their classroom. NoSQL databases on the other hand, do not use foreign keys, rather they use nested documents. In the students example, the classroom would be an entry in the database and the entries for each individual student would be nested within the entry for the classroom.
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
Since "find" is synonymous with "where" in SQL, the query returns an array, thus if there were multiple documents with the name "Bob", all of these objects would be returned.

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text

Models describe the data and the data's attributes e.g., a Student with a name property and a learn method. Views dictate how the data is displayed on the client-side, i.e., the data is displayed to the user.
```

### Question #6

Given the following front-end JS model, add an instance method for all pandas called `eat_bamboo`. Calling this method should increase that panda's value for `num_bamboo_eaten` by 1.

```js
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
}

Panda.prototype = {
  eat_bamboo: function(){
    this.num_bamboo_eaten ++;
  }
}
```

Your Answer:
```Did I miss something here?

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text

OAuth, similar to a valet key, allows the user to grant access to only certain resources, in most instances this would be their Username. For example, a new web app allows the user to login with Twitter, the valet key ensures that this application does not get access to the users DMs, rather the app should only have access to the user's Username.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css

@media (max-width: 40rem) {
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
A rebase "rewrites history" by adding commits that have happened in another branch to be included in your current branch via a pull. Therefore if you make a pull rebase request on your feature branch from the master branch, any additional commits that were made to the master branch will now be included in your git log for the feature branch.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text

A remote repository is created by a single member of a team. Other members of the team fork this repository to have their own remote copies. Members of the team create new "feature branches" to work on an update they have been tasked with. Once the new feature has been created, the member of the team that created the feature will send a pull request to the master branch. The pull request will be reviewed by another member of the team, who will then merge the request and resolve any conflicts.

```
