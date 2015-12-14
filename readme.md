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
$(document).ready(function(){
  $("h1").on("click", function(){
    var url = "http://kittengifs.com/gifs"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response.length))
    }).fail(function(){
      console.log("Ajax request fails!")
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    })
  })
})
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
We use jQuery to target the form fields so we can then use them in the POST request
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL is much more structured. A column in the SQL database has to be created before you can start adding rows of data. In contrast, a NoSQL database will simply create the column if it doesn't already exist. Also, NoSQL allows you to use arrays within your tables, which you can't do with SQL. SQL is faster when you're working with more complicated relationships between your models, and specifically many to many relationships. NoSQL is better for when you want to get something up and running more quickly and want more freedom with your database.
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
it needs to be in a callback function
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models make requests to the backend usually for json data and then the views render this data. This way you can keep sensitive data on the backend. 
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
  Dog.prototype.eat_bamboo = function(){ num_bamboo_eaten + 1}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
With OAuth a token is generated when a user signs into a 3rd party site that they want to sign in with like twitter. The token from Twitter is then associated with that user and is used to retrieve information from the Twitter account. Similarly a valet key is assigned to a customer and that can be used to retrieve their car
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body{
    color: green;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
rebase when done properly can result in a much cleaner commit history. Instead of having a messy commit history with lots of merges listed, rebase adds all the commits to the master branch. While cleaner, if there are any issues it's much harder to trace when using rebase compared to merge.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Someone makes the master repository and the rest of the team will fork and clone that repo. The team will then make branches for the features they're working on. Once they are done with their features they'll have to "git add .", "git commit -m", and "git push" to their own forks before they can make a pull request to the master. Then the teammate with control over the master will have to handle all the merge conflicts.
```
