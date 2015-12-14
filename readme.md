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
```
$.get("http://www.kittengifs.com/gifs")

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```
To submit a form using AJAX, we need to
1. capture the form submit button
2. get all the data from the form using jQuery
3.Submit using AJAX (we can use the $.post() method)

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```
SQL: Has relational databases
NoSQL: Non-relational. Uses collections. No schema is required.

NoSQL generally processes data faster than SQL. SQL are best fit for heavy duty transactional type of applications.

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
```
Models represent the domain-specific knowledge and data in an application.

Views are typical considered the User-interface in an application.

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
var eat_bamboo = function(){

}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```
An OAuth token gives one app access to one API on behalf of one user.

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
```
Git rebase rewrites the project history by creating brand new commits for each commit in the original branch.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```
git merge
git rebase
git pull
git push
git clone
git stash


```
