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
$.getJSON({
    url: "http://kittengifs.com/gifs"
    method: "get"
  })
  .then(function(results){
    console.log(results.length)
  });

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

It lets us send a server side request without refreshing the page, no browser requests.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text

SQL are generally for more complex databases because they're relational and have complex data models. No SQL are faster and used for smaller and less complex databases. Also there is no schema required in a NoSQL database.

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

It needs a callback
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text

You need both views and models so everything doesn't get extremely cluttered and you can make single page apps.

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
Panda.prototype.eat_bamboo = function() {
  this.num_bamboo_eaten = this.num_bamboo_eaten +1;
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text

OAuth gives someone a token essentially to use for that short period of time, but it's not really theirs. The same way a valet key works.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css

@media (max-width: 40rem) {
  div{
    color: white;
  }
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text

Merges make new commits and rebase just overwrites them. Rebase changes the commit history of previous commits essentially.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text

Fork off of one person. Then everyone has their own version on their local machine after they clone it down. You can then push, pull, merge, etc. You can merge yourself if you're a contributor, which is what my group did. You can push to upstream as well or pull it down for any new changes you have.

```
