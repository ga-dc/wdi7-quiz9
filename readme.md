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
var URL="http://kittengifs.com/gifs";
$.ajax({
  url: URL,
  type: "get",
  dataType:"json"
}).done(function(response){
  console.log(response);
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
We use jQuery to asynchornously response to the requests.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
Difference between SQL and noSQL is relational data base. in SQL, each dataset has relation to another. However, in noSQL, the data are all in one big dataset with key value pair format.
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
where is the AuthorModel from? it did not specify where it's coming from. We can fix the following way:
1. var results = db.AuthorModel.find(...);
2. //use mongoose
var mongoose =require('mongoose');
mongoose.connect('mongodb://url');
var results=mongoose.AuthorModel.find({...});
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
It is much easier to debug and maintain if we keep the interested parts seperate depends on their purposes.
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
Panda.prototype={
  eat_bamboo: function(){
    var self = this;
    self.num_bamboo_eaten += 1;
  }
};
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth is using a token verified thru the token provider such as google, or facebook.
Which, in case of a valet, you are borrowing the key to park the car.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media(max-width: 40rem){
  body{
    background: tomato;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase is keeping develpment stream line in one line, which keeps tidy. In order to do that, it erases the different branch and merges.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Some have centralized hub where they oversee what's added, the other commits to the master branch from their seperate branch.
Master --> fork and clone --> create a branch and work on --> merge to master branch
                                                          --> pull request
```
