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
@.ajax({
  type: 'GET',
  dataType: 'json',
  url: http://kittengifs.com/gifs,
}).done(function(response){
  var count = 0;
  for (var i=0; i<response.length; i++) {
    count = count+1;
  }
  console.log(count);
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
jQuery allows us to select elements on a page and adjust/extract the values there. In this case, we would use jQuery to extract the form values from the page, and use those values in our AJAX call parameters.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL (Structured Query Language) and NoSQL are two different database structures for storing, accessing, and adjusting data. SQL is typically more rigid in terms of matching data types and schemas, while NoSQL has somewhat less structure. SQL uses tables, and is more akin to your typical excel spreadsheet experience. NoSQL uses documents which look and feel more like objects in programming, or specifically JSON-like objects.

SQL is good for many to many relationships, and keeping track of foreign keys.

NoSQL can work well if you aren't sure what the end product/databse needs to look like, as there is a bit more leeway in terms of data structures.
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
The .find() function needs a second input to be passed in, a callback function. So something like
var results = AuthorModel.find({name: "Bob"}, function(err,docs){
  console.log(docs);
});
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models and Views on the front end serve a similar purpose to their potential counterparts on the backend (specify and display information), but in this case the rMVC structure can be used to fetch and show JSON-like responses from external (or in house back-end) APIs from the front-end.
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
eat_bamboo: function() {
  var self = this;
  var data = {
    num_bamboo_eaten: self.num_bamboo_eaten + 1,
  };
  self.panda.update(data).then(function() {
    self.render();
  });
},
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
Apparently the Valet Key is a commonly used metaphor for OAuth. I didn't know that many people still have/use valet keys, but let's just roll with it.

Basically a valet key allows a driver to only open and start the car (so - not get into the glove box, trunk, etc... where other valuables like computers and briefcases may be). With OAuth, when users sign in to site B using credentials from site A, site B does NOT receive all the access to the user's info from site A. Site B does not know the user's password, the user's stats, etc... Site B simply receives a positive/negative confirmation from site A, not the keys to the whole car.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body{
    background: yellow;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Instead of bringing the two branches back together (as with a merge) a rebase rewrites the git commits into one single string line, which allows for a cleaner and more linear project history.

I'm not a fan though (at least not yet), it seems less accurate in tracing what actually occurred, and (at least until I know it better), seems less safe in terms of correctly resolving potential conflicts.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Every member of the team can fork from the central repository, and then clone, make changes, add/commit/push/pull request back to the main repo. This way gives the owner of the central repo a bit more control about what is going on there. In project 3, my team decided to all be collaborators within one repo (another option), and the benefits were that we didn't have to constantly be making pull requests. The drawbacks were that sometimes versioning wasn't as clear.
```
