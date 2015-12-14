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
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response.length);
    }).fail(function(){
      console.log("Ajax request fails!");
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.");
    });
}
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
We capture for the form button so the default action does not take place.  We then get all of the data from the form using Jquery.  Once we get all of those values we use the post request to process the data and then return the JSON data.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL is a relational data base that works by creating tables and using keys that match characteristics from table to table.  SQL data bases are strong for complex relationships such as many to many relationships that will require a join table.  NoSQL data bases are non relational and store information with key value pairs.  These are good for scalability and do not require a rigid schema.  They also spread out stress on the server.  You would use this for large amounts of data that do not have complex relationships and can be easily scaled horizontally.
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
You would want to find bob by his id in case there were multiple Bobs. Make a request to find by params id.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Models allow us to create constructor functions that will define our data.  The views allow to to seperate how the data from the models will be viewed in the browser.
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
  this.eat_bamboo = function(){
    return this.num_bamboo_eaten ++;
  }
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
We are using access tokens to give a limited amount of information to someone else so they can ensure safety.  The valey key or access token does not grant full functionality but allows them to check if its you.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media(min-width:40rem){
  h1{
    color: red;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase adds a new feature and commit history on top of the master branch to integrate new changes.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Fork and pull request involves teams forking their own repos from a the main project.  They will make their commits locally and push to their own repo and then making a pull request to update the master repo.  They will have to fetch any updated info from the upstream remote.

Another work flow is everyone clones a copy of the master.  This can be trickier but in this case everyone would work on their own feature branches and then merge them to the master once they are complete and then push up to the master repository.  Each team member would need to pull down the info from the master repository once it is updated.
```
