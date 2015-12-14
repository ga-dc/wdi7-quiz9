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

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```In brief, jQuery includes the javascript commands necessary to capture html or radio selections from the DOM and communicates this to the backend generating an asynchronous response that is ideally seamless to the user.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```SQL databases efficiently interpret large, strictly structured data tables that are built upon established relationships of two or more given elements. SQL databases connect specific sets of defined data, due to their rigid schemas they are most useful at structuring large pools of predictable data.

NoSQL databases better serve related data types that do not share all of the same attributes. NoSQL is a developers best choice if one is dealing with diverse arrays of objects that through the magic of NoSQL, can be queried through a loose search across an entire document vs SQL's dependence on a structured examination of rigid data channels.

```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);
```

Your Answer:
```var results = Author.name.find({"Bob"});

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```Front End JavaScript models are the structure that define a given data set. Front End JS views get closer to structuring the DOM's actual layout of the selected data models.

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
```var eat_bamboo = function(){
      this.num_bamboo_eaten += [i]

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```OAuth relates to a valet in that a valet only holds your car key with your consent, and only for that moment you are using the valet. Just like the valet doesn't copy your key, OAuth doesn't record your plain text password.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```body{
    @media (max-width: 40rem) background: green;
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```rebase smoothes out past commit tracks but this can be dangerous because it removes access to past versions.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```git pull
git Push
git merge
head reset
git branch
checkout branch


```
