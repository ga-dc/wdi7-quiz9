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
  url: "http://kittengivs.com/gifs",
  type: "get",
  dataType: "json"
}).done(function(response) {
  console.log(response.length);
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

jQuery allows use to place the ajax calls within the DOM. We call a function on an element and within that function use ajax. The ajax call takes an object as an argument followed by promises determining what will happen on the original element's action.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL: relational database that allows for relationships between tables. These relationships are defined in the database through the use of foreign keys. While this provides much more function for tables that need to be dependent on one another, there are some restrictions. You are not able to delete a row that is represented in another table through a foreign key. noSQL and the non-relational databases do not require a relationship between tables. These collections are much more mutable and allows for more flexibility both in building and destroying records. Another advantage is the speed with which a non-relational database can execute.
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
I think this is a mash up of code you'd write into your application and code you'd put into the mongo interface. I think we'd need to put the console.log into a callback and use error handling.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
The model files in front-end JS are used to hold the constructor function for the model as well as class functions and prototype functions, acting similar to a controller on the back-end. Fetching is an example of a class function. It allows us to parse the database into objects on the client side. Prototype functions allow us to act on each instance within a class. The views function render views based on the models files.
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
Panda.prototype.eat_bamboo = function() { return this.num_bamboo_eaten++}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
This is a metaphore. IRL the valet key allows limited access to the car. OAuth does the same thing for users. It allows users to use an access token from one client to access another while never sharing the user's actual password with the first client. s
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css

body{
  background: turquoise;
}
@media (max-width: 40rem) {
  body{
    background:tomato;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text

Merge is a non-destructive operation meaning that existing branches are not changed in any way. While this is good in some instances, it can mean that a branches history is hard to read since you have to merge every time you incorporate upstream changes into that branch. Alternatively, we can use rebase to move the feature branch to the head of the master branch. This is slightly dangerous because rebase will rewrite the project history by create new commits for the original branch.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text

Teams can either fork a repo and work through pull requests on that repo or they can clone down the repo. It is important to configure upstream remotes so that collaborates can pull or push information. Either workflow works well, provided team members discuss and agree on the workflow ahead of time, as well as agree on a merge flow.
```
