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
```
var URL = "http://kittengifs.com/gifs"
$.getJSON(URL, function(err,results){
  console.log(results.length)
  console.log(err)
  })

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
We use the .post method of jQuery to submit a form via AJAX so that we do not have to do a page refresh.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases are relational, while NoSQL is not relational.  SQL have pre-defined schema, whereas NoSQL do not.  SQL uses tables, with these pre-defined schema, whereas NoSQL are basically just key-value pairs within objects or arrays.  Models can be related to other models, but not as formally.  If you have many to many relationships and other complex queries, that would be better for SQL.  NoSQL would work better, however, for hierarchical data relationships since you can just add more objects within an array.  
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
Not really sure what is wrong with this.  My guess is that there needs to be a callback function after "Bob".
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views and models in FE JS are to display on the client side the information.  
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
var eat_bamboo = function(){
  num_bamboo_eaten ++;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
A valet key is like a regular key but only works for certain functions, and disallows certain functions, like the trunk or glove box access.  OAuth gives permission to a website to use something like Facebook just for logging in but does not allow access to all of a person's facebook.  It is just one part - the user authentication.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body {
    background: red;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
With a rebase, you essentially change the commit history of the branches so that they match in previous commits.  For example, if you are on a feature branch you can rebase with the master so that when you merge with the master it will include the changes that have been made on the master since the feature branch was created.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
One way is a centralized work flow, where all of the team members work independently on the master branch on their localized repos. When it is time, they can git pull to make sure they have the up-to-date master, then push their changes up to the master.  Another method is the feature branch workflow.  In this option, team members make branches off of the master for their particular feature.  When time to merge, they just push to their own branch then from their make a pull request to the master.
```
