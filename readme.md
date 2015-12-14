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
var url = "http://kittengifs.com/gifs";
$.getJSON(url).success(function(results){console.log(results.length)});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
Using AJAX, you can post data to a server using a POST request. Like a GET request, you specify the url, http method, and dataType of the response, while also attaching a piece of JSON data (information collected in the form) to the request.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases are relational, meaning they are especially useful for conveying complex relationships between data entities. In a relational database, you link tables using foreign keys. In a NoSQL database, data and relationships between entities are stored explicitly in the schema. In a NoSQL database, relationships are conveyed as documents and sub-documents; for example, all of an artist's songs will be listed as sub-documents of that artists, rather than in a separate table referenced through a foreign key referring back to the artist. SQL databases are preferable when your data schema involves multiple complex relationships like many-to-many, while NoSQL might be preferred when schemas are simpler, one-to-many relationships.
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
I think you need to attach a callback to the method to return the results, since I believe the query is run asynchronously.
```
```js
AuthorModel.find({name: "Bob"}, function(err,docs){
  if (!err){
    console.log(docs);
  }
})
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views and Models in front-end javascript help keep OOJS code organized. Models store information and methods for a database entity on the page, while views are used to render that information, and often contain properties that are related to html elements on the page.
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
```js
Panda.eat_bamboo = function(){
  this.num_bamboo_eaten++;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth uses a third-party site to authenticate users to use your app. I suppose the same way you hand a valet your keys and they park your car, you let OAuth handle the keys to your app and it redirects users to your app once authenticated.
```

## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width:40rem){
  body{
      background-color:red;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Merging combines different branches into a single path while rebasing appends one branch to the end of another. Merging requires a commit, which signifies that branches have been merged, while rebasing sort of erases history by replacing old commits with new ones by allowing you to reorder the way commits initially occurred.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Some of the common workflows include forking a common repo and making pull requests from forks, working on a central repository using collaborator roles, or working on feature branches that get pulled into a central branch. 
```
