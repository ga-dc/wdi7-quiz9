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
        $.ajax( "http://kittengifs.com/gifs" [, options])
        console.log(:json );
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text

SQL databases are primarily called as Relational Databases; whereas NoSQL database are primarily called as non-relational or distributed database.

SQL databases are table based databases and NoSQL databases are document      based, key-value pairs, graph databases or wide-column stores. This means that SQL databases represent data in form of tables which consists of a number of rows of data whereas NoSQL databases are the collection of key-value pair, documents, graph databases or wide-column stores which do not have standard schema definitions which it needs to adhered to.
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

Models in front end is a group of html elements which are bind to data.

Views are the representation of   

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

@media screen and (min-width: 36em) and (max-width: 64em) {
  .project-tagline {
    font-size: 1.15rem; }
  }

```

## Git

### Question #9

How is rebase different than a merge?


Your Answer:
```text
Rebase reverts all commits since the current branch diverge from <upstream>, and then re-applies them one by one on top of changes from the HEAD of <upstream>.

Merge changes from <branch name> into current branch.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Fork creates an exact copy of any repo to my list of repositories.

pull request incorporates changes from a remote repository into the current branch. In its default mode, git pull in shorthand for git fetch followed by git merge FETCH_HEAD.


```
