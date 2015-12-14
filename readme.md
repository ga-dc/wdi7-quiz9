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
$.getJSON("http://kittengifs.com/gifs/?s="+query).done(function(response){
  console.log(response.Search);
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL is table based and NoSQL is document based so rows and columns vs. lists, graphs, etc. SQL also has a defined schema, while NoSQL's schema is dynamic. SQL is generally better for databases where the data doesn't change often, while NoSQL is great for rapidly changing databases.
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

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models are the kind of back end calculations on how to use the database. Views render the models in a usable way, interpreting the models work dynamically into the HTML, etc.
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
eat_bamboo = function (num_bamboo_eaten)
  this.Panda.push(num_bamboo_eaten)
for (var i = 0; i < this.num_bamboo_eaten; i++){
  var P = response.Search[i];
  Panda.eat_bamboo
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
A valet key allows for access to a vehicle and to start it, but it can't be used to access other areas like the trunk. OAuth works in a similar fashion, so when visiting a site and logging in through twitter or FB, the site sends you to Twitter or FB to verify your credentials once that happens the site uses it's own limited token to the verifying site to retrieve whatever information is allowed via that token. It's the "valet" key.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
body {
  background: orange;
}
@media (max-width: 40em) {
  body{
    background: green;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Merge brings in a branch to the master. They remain two separate paths, but are joined from that point forward, while rebase starts the master joins the paths as one single entity from that pint forward. There is no way to go backwards.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Fork - create a copy branch of a repo in the users repo.
Pull Requests - Alerting the master repo of changes done on a fork to be merged into it.
Clone - Copy a repo locally on a machine.
Push - Send changes done locally up to a repo branch.
Branch - Create a separate path of a repo.
Pull - Bring changes/updates to a repo down to a local machine.
Merge - Add and combine changes from a branch to another branch or master.
```
