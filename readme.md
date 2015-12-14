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
$.get('http://kittengifs.com/gifs', function(data){
    console.log(data.length + 1);
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
jQuery triggers an AJAX request to a prescribed URI. The contents of the form are passed as parameters in the URI.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL is a relational database. You might use this if your data can be separated into distinct classes/tables that have multiple or complex relationships between them.  NoSQL is a non-relational database, and is better at delivering data quickly. However, NoSQL DBs do not easily store relationship data and are therefore better used for data that is not dependent on its context vis-a-vis other datatypes.
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
1) AuthorModel is not defined.
2) results will likely be an array if this is a valid search.
3) console.log() should be a callback:
AuthorModel.find({name: "Bob"}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log(docs);
        }
    });
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models and Views are for separation of concerns.  While it is possible to not use them, it is highly advisable to do so for 1) readability and 2) longevity.
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
Panda.prototype={
    var self = this;
    eat_bamboo: function(){
        this.num_bamboo_eaten += 1;
    }
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
    A Valet Key only gives access to the areas of a car required for the valet to perform its duties, IE, the driver's seat and ignition. OAuth is similar in that it allows a user to authorize and app to have access to a limited portion of their data on a third-party app, for purposes of authorization or integration.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){

}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase is used primarily for bringing a feature branch up to date before merging or creating a pull request. It will wipe git history for that branch and therefore should not be used after sharing your code with anyone on your team.  It should also only be used if you are committed to the code you have written. Merging brings together two branches and, using git history, will notify the user of any conflicts.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
While some teams prefer that each member or workgroup fork the master REPO and develop their feature on that fork before making a pull-request, others prefer to have each member create a feature branch from the master and push pull-request once a feature is available.  This breaks down into a similar concept to waterfall vs agile development, in that a feature will not be added to the app until it is fully developed in its fork.  In another light, forking the master repo adds an additional layer of separation between workgroups, protecting the 'master.'
```
