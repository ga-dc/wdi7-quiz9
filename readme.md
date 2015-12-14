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
jQuery allows us to select elements on a page and adjust/extract the values there. In this case, we would use jQuery to extract the form value from the page, and use that value in our AJAX call parameters.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL (Structured Query Language) and NoSQL are two different database structures for storing, accessing, and adjusting data. SQL is typically more rigid in terms of matching data types and schemas, while NoSQL has somewhat less structure. SQL uses tables, and is more akin to your typical excel spreadsheet experience. NoSQL uses documents which look and feel more like objects in programming, or specifically JSON objects.

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

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text

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

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text

```
