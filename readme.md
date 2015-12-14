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
var url = "http://kittengifs.com/gifs"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response)
    }).fail(function(){
      console.log("it's a fail!")
    }).always(function(){
      console.log("this always happens.")
    })

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
Ajax type post takes data input into form and passes as json into db.  Data that will be written into db is defined in data {} (ex: data{name: , nationality: , gender: }).
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL DB is a relational DB; works better when playing with complex and many:many relationships.  Models define tables with rows, columns.  Each row is a record.  I liked the structure in these DBs.  

NoSQL DB uses documents instead of tables to define records, each one containing key/value pairs.  Mongo feels more flexible, less structured, which I think creates opportunity but is a little more complex for me as I continue to wrap my head around it.
```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
// var results = AuthorModel.find({name: "Bob"});
// console.log(results);

var AuthorModel = require('models/author');

AuthorModel.find({name: "Bob"}, function(look){
  console.log(look);
});
```

Your Answer:
```text
the results aren't the variable to return; mongoose code requires the model we've created, then calls the find method on that variable.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views use instructions contained in models to render data from the DB.

Models hold constructor functions created for an app.  Constructor functions define the way data is arranged and stored in the DB.  
```

### Question #6

Given the following front-end JS model, add an instance method for all pandas called `eat_bamboo`. Calling this method should increase that panda's value for `num_bamboo_eaten` by 1.

```js
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
}

var panda =

function(eat_bamboo);
```

Your Answer:
```text
Saved this one for last and ran out of time!
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
A valet key allows a valet to perform certain functions, like unlocking the driver door and starting the car.  Unlocking trunk and glove box, for example, are off limits.  Giving the valet the valet key authenticates him to be in the car, but limits what he's authorized to do.

Similarly, OAuth authenticates a user who is able to log in successfully while authorizing the user to perform all or certain functions depending on admin setup.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
body{
  background: orange;
}

@media (max-width: 40rem){
  body{
    background: purple;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Merge puts the latest commit on a branch onto the end of the branch being merged to.  The branch histories and commits remain separate.

Rebasing merges the two branches entirely, so there is no longer a commit history in each branch.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Centralized workflow means the only branch on the project repo is the master.  That's cloned, then each user can create branches on his repo to work on.  To update, user should pull master from project repo to be sure cloned master is current, then merge to master on his repo, then pull request his repo master to project master.

Feature branch works sort of the same way, but feature branches are pushed up to project repo, where they're merged, instead of merging feature branches on individual's repo and then pull-requesting that.

Integration manager (distributed) workflow means that everyone has a forked version of the original, and each person submits pull requests to the original that are accepted/merged by one person.  

(In our project, I don't think we were rigorous enough about making sure project master was not directly worked on, that updates were merged into it regularly, and that we branched from latest version of project master at each step.  Caused merge conflict headaches.)
```
