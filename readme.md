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
```$.ajax({
  url: http://kittengifs.com/gifs,
  data: String,
  success: null,
  dataType: String
});

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```Jquery uses a serialize method to get form data and then uses Ajax methods to send data back to the back-end.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```SQL databases are called Relational Databases and NoSQL database are called  non-relational or distributed databases.
This means that SQL databases represent data in form of tables which consists of a number of rows of data whereas NoSQL databases are the collection of key-value pairs, documents, and/or graph databases.
SQL databases have predefined schema whereas NoSQL databases have dynamic schema for unstructured data.
You might choose to use the SQL vs NoSQL depending on the type of data being stored, SQL databases are not best fit for hierarchical data storage. But, NoSQL database fits better for the hierarchical data storage as it follows the key-value pair way of storing data similar to JSON data. NoSQL database are highly preferred for large data set

```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);
```

Your Answer:
```Because there is no arthur model defined in the code.

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```The purpose of views and models in Front-end Javascript is to connect to the controller and share stored data with the controller when requested.

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
```
var Panda = function(name, age) {
this.name = eat_bamboo;
    this.age = age;
    this.num_bamboo_eaten = 1;
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
