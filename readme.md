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
  url: 'http://kittengifs.com/gifs',
  method: 'get',
  dataType: 'json'
}).done(function(data){
  console.log('hello' + data);
})
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
I'm not quite sure i understand this question. Is it referring to how we can make a post request to the server? Because we can use AJAX for that. Is it talking about submitting an actual form? Because all we would need to do is select that form and call submit on it - e.g. $('#form').submit();
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL is the language used for relational database management systems to talk to the database. Relational databases store data in tables in columns and rows (like a spreadsheet.) The columns represent the different data fields (e.g. VARCHAR, INT) and each individual row in a table represents one entry. Relational databases are called so because they are very good at representing relationships between data (e.g. a customer has many orders and each order belongs to a certain customer).

A NoSQL database might be preferred when relationships between data aren't necessarily needed. It is a more flexible and scalable solution in that case because of the freedom it allows for structuring data. It is very easy to change data around because it is represented similarly to objects, with key/value pairs (stored as BJSON). There is no need to change the schema or mess with migrations which is a very taxing thing to do in a RMDBS. In SQL a row represents one database record, where as in a NoSQL database such as MongoDB it is represented as a document. A collection is similar to a table in a SQL database, and stores many documents.
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
I think we need a callback to be able to do something with bob. So we need a .done(data) and then do something with data?
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
In FE JS, the models are used to represent data we fetch from the database as JS objects on the front end. We write methods such as fetch which make ajax json calls to the database on the backend, and the returned json objects allows us to use them on the front end and essentially allows us to update data in real time.  

FE views on the other hand are used to render the actual HTML with the data we obtain from the FE models. The only HTTP request we make is to get the index.html file which has a single div inside. It is that div that gets populated by our FE views. We write methods on our views that will use jQuery (or native JS) to add elements and append them in different places, and the data is (once again) the json we get from the ajax calls we make.
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
Panda.prototype.eat_bamboo = function () {
  this.num_bamboo_eaten++;
  console.log(this.name + 'has eaten' + this.num_bamboo_eaten )
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth allows applications to authenticate with different third-party applications to access some of their services (APIs). It is like a valet key in that the authentication happens via tokens, which are separate from the other passwords a user might have on a particular website, and the access rights granted to them by the third party apps can be controller. If you were to leave your car to a valet, you may only give him the car key but not the key to the glovebox.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem) {
  body {
    background: papayawhip;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
git-rebase – Sequentially regenerate a series of commits so they can be
             applied directly to the head node

git-merge - Join two or more development histories together

From what i understand, rebasing is cleaner because if you rebase your branch into someone's branch, it looks as if you checked out their branch cleanly and started work from there. When you merge your branch into someone's branch the histories are intertwined and it looks messier.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
When we worked on the group project, we would each checkout a new branch and work on certain files without affecting the others, so that commiting and pushing them and doing pull requests would have as few merge conflicts as possible. When we would have to change other files that teammates were working on we would sit down after the merge conflict happen and work on keeping what we needed and then resolving the conflicts.
```
