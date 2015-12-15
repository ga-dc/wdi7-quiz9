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
N/A

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```We would use Promise Callbacks to submit a form via AJAX

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```SQL are table databases where data is represented with rows and columns.  SQL = MongoDB

```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);
```

Your Answer:
```
var results = authorModel.findBy({name: "Bob"});
console.log(results);

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```
I believe models hold information, while views hold the behavior of the pages. The view is part of the app where the users interact with.

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
	N/A
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```
	the valet key is another key within the browser when you log into/onto a website.  That's your special key when you log in. Its basically to keep a session on that website.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```
	N/A
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```
	It seems as if merging is better because when you merge, you still have history of that branch.  But when you rebase, it overwrites and fully commits everything onto the master branch. The benefit of rebase is that it gives you a cleaner project history.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```
	fork, git clone, git push origin [branch], git pull, git merge, and merge conflicts. 
```
