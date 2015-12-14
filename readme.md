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
var url = 'http://kittengifs.com/gifs';
$.getJSON(url, function(data) {
  console.log(data.length);
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
On click listeners attached to a form's submit button trigger jQuery selectors to grab the text and other contents of the form elements, which in turn is sent in an AJAX request to the server, which receives the form data at a route established to accept post requests.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
NoSQL databases are easier to prototype with and scale than SQL because the schema can be pretty much changed on the fly (without migrations) and the data inside the NoSQL db is pretty much JSON and easy to work with. NoSQL doesn't handle relational data with complex associations as well as conventional SQL databases though because it lacks all the overhead (join tables) that make all the relational stuff happen.
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
Because the .find() method takes a second argument, a function ( `function(err, docs) { console.log(docs) }`) that handles the asynchronous response (or error) from the database.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models on the front-end let us create client-side instances of objects from JSON ferried over from the server. Views on the front end let us create mini templates for these objects that we can use modularly in our webpage on the client side.
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
Panda.prototyp.eat_bamboo = function() {
  this.num_bamboo_eaten += 1;
};
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth is like a valey key because you're giving authorization to a trusted third-party to handle specified tasks for your web app.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem) {
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
Rebase rewrites and cleans up commit history by combining the commits of two branches and making it look like one branch's commits were always part of another branch's.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
As a contributor to a git repository, you can either contribute directly or maintain a fork. As a direct contributor, you'll to make sure you're always pulling changes from the remote and merging them into your local code. As a forker, you'll be maintaining all your code in fork (like a Github remote) and you will treat your team's project repo as upstream. Another common workflow is to use a feature branch to sandbox work on a feature, so that work can be separate from the master/stable branch.
```
