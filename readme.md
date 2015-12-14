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
  type: 'GET',
  dataType: 'json',
  url: "http://kittengifs.com/gifs"
}).done(function(response) {
  console.log(response.length);
}).fail(function(response){
  console.log("Ajax get request failed.");
})

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
It allows us to make asynchronous requests (typical CRUD requests) on the client side so we can make single page applications.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL orders each instance in the table has the same attributes filled in (columns). In contrast, NoSQL databases are not relational so instances are unordered and don't necessarily have all the same attributes. SQL databases are best in complex associations whereas NoSQL databases are more flexible and best used in less complex situations.
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
var results = AuthorModel.findOne({ name: 'Bob'}, function(err, results){
  console.log(results);
  })
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Views tell the application what it should look like while models structure the information. They are useful in front-end JavaScript for keeping the code manageable so you don't end up with spaghetti code.
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
var eat_bamboo = Panda.prototype = {
  var self = this;
  self.num_bamboo_eaten += 1;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
You want to use their valet service so you give them your key (app ID and app secret) and in exchange they take your car and give you something to identify which car is yours (access token)
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
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
Merging combines a branch with the master (assuming you're on master and git merge branch_name) even if they go off and haven't remerged with an updated version of master. Rebasing keeps everything linear and works the branches into the master like they've always been there.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
One person makes a repo and add the other team members as contributors. Then both people clone down the repo to their local machine and make changes that they can push to master/any branch. To get the new information that other team members contributed you git pull which pulls the data from the remote repo.
```
