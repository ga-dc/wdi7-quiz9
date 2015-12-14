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
$.get("http://kittengifs.com/gifs", function(data){
  console.log(data.length);
})

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
In order to submit a form using jQuery via ajax, we should create a form in html, prevent its default action in a linked js file, and instead use a jQuery post request in order to submit the data.  We may need to encode our data (which is likely a json) in some way, either using a method like JSON.stringigy, or serialization.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases are not meant to be human-readable, while mongoDB is human-readable.  SQL databases have built in join methods, which make creating and using join tables quite easy.  NoSQL databases do not have built-in joining and were not built with table-joining in mind (although this behavior can be achieved using ObjectIDS).

This means that, for complex relationships (many-to-many) you're probably better off using a SQL DB.  If you're not working with complex relationships between your models, then you are probably okay using mongoDB or another NoSQL DB.

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
Most mongoose methods are asynchronous, so we can only access the results of a query in the callback or by chaining .then.  A correct way to write this would be:

```
```js
AuthorModel.find({name: "Bob"}).then(function(docs, err){
  if (!err) {
    var results = docs;
    console.log(results);
  }
})
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
In front-end js, models mirror a model on the back end and so allow you to access data from your server in order to manipulate it on the front-end.  

The purpose of views is to take the data from our server (now represented in front-end js models) and display it on the front-end, using DOM manipulation.
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
Panda.prototype.eat_bamboo = function(){
  this.num_bamboo_eaten++;
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth methods involve a user logging in via a third-party site.  That user's credentials are never visible to site that he wants to log in on, rather, he is re-directed to a different site and, upon logging in, returns to the initial site.  So, his password is never available to the site he started on.  However, that site will have access to an OAuth token, which can be thought of as a kind of valet key that grants limited privileges to the holder.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  .nav {
    width: auto;
  }
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase and merge are two different options for merging two branches.

Rebase re-writes git history, moving one branch and all its commits onto the end of the branch with which it is being merged.

Merge preserves a more accurate picture of what happened, that is, two separate branches that combine only when the merger occurs.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
A common git work-flow would be:
1. checkout development from master
2. checkout feature branch, add feature
3. checkout development, merge feature, testing
4. checkout master, merge development, testing
5. (re)deployment

Another one might be:
1. fork repo
2. checkout personal branch
3. make changes, add and commit changes
4. push to origin (personal branch)
5. open pull request to upstream, probably to development branch

```
