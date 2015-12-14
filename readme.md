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

var url='http://kittengifs.com/gifs'
$.getJSON(url,function(data){
  console.log(data.length);
});

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

We take the body of our form, parse it into a JSON object, then submit an AJAX
post, put, or patch request to the appropriate restful route, which is
configured to accept JSON, including our form data as the data, and
application/json as the type.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text

SQL is a relational database. A NoSQL DB is non-relational. You might use an SQL
database when relations are important in the domain you're working in, or if you
need to implement a many-to-many relationship. You might use NoSQL if you've got
one model in your domain, which needs to hold a large amount of data nested
within it.

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
This mongoose method is going to return a promise, so we need to append a
callback function to it and log the result from there.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text

Views create templates and fill those templates with data from the...Models,
which retrieve and manipulate data about the given model, like a Profile or
Artist, using methods like fetch.

```

### Question #6

Given the following front-end JS model, add an instance method for all pandas
called `eat_bamboo`. Calling this method should increase that panda's value for
`num_bamboo_eaten` by 1.

```js
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
}
```

Your Answer:
```text

Panda.prototype.eat_bamboo=function(){
  this.num_bamboo_eaten++;
};

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text

You're giving a third party limited access to a resource that is very valuable
to you. It allows them to do what you want them to do, but forbids them from
abusing their power and driving off with your ferrari like that valet from
ferriss bueller.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css

@media(max-width:40rem){
  transform: translate3d(10px,0,0);
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text

Whereas merging merges the branch to be merged into the branch you're working
in, Rebase leaves intact the other branch, and just incorporates its changes
into the branch you're working on.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text

Adding team members as collaborators. They fork a central repo, have both origin
and upstream remotes. They pull changes from upstream, push changes to origin
(their fork), then make pull requests from their fork to the central repo.
Fetching, rebasing, merge conflicts, git diff'ing...

```
