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
function getKittens(){
  var url = "http://kittengifs.com/gifs";
  $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response.gifs.count);
    }).fail(function(){
      console.log("Ajax request failed!");
    }).always(function(){
      console.log("Something happened but I'm not going to tell you what.");
    });
}

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
The jQuery library includes AJAX (Asynchronous JavaScript and XML), which enables asynchronous server side calls to refresh information on the page without a full browser refresh. The $.ajax call requires that you specify a URL, an HTTP method (GET, POST, PUT, etc), and a data-type, and then it responds with a JSON object which you can then make use of in the promises that follow (.done(function(response){}), .fail(), etc).
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
The key difference between SQL and NoSQL is the way data is stored - SQL uses tables that have columns and rows, and NoSQL uses collections of documents, which are like JSON objects in structure and function (called BJSON). A SQL database is much better suited to handle complex relationships between objects because you can add foreign keys and create join tables; with NoSQL it's better to stick with one-to-many relationships in order to maintain processing speed. NoSQL can be faster than SQL as long as it doesn't try to go beyond one-to-many, so I would use it if I wanted fast processing on a simple app. I would use SQL for storing data with more complex relationships.
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
The .find() method requires a callback function, so it would look more like the below (or just skip the results variable and console.log(author)).
```
```js
AuthorModel.find({name: "Bob"}, function(err, author){
  var results = author;
  console.log(results);
}
```


## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views and models in FE JS enable AJAX access to the server without a full-page refresh. Views function as views and controllers, which listen for requests and send them to the appropriate FE model, which communicates with the BE to pass data back to the FE views which then render on the page.
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
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
  this.eat_bamboo = function(){
    this.num_bamboo_eaten ++;
  }
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  .container {
    background: lemonchiffon;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rather than combining the finished data from two different branches via a single commit, it combines the two branches themselves.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
One technique for a team would be for one person to initialize the repo, and then each team member forks a copy, clones it to their own desktop, makes changes, pushes them back up to their forked copy and then makes a pull request to the parent repo, which a team member would review and then merge with master.

Another technique is for the team to use one remote repo to clone down to each machine, but then each member would create their own branches to make changes, and would then push their branch up to the remote repo and do a pull request to master, which another team member would review and then merge, after resolving any conflicts.

A good way to avoid merge conflicts is to do a pull from your remote master, and merge any changes into your branch before pushing up the branch to the remote repo.
```
