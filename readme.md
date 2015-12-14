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
  // ajax get
  $(".test_ajax_get").on("click", function(){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://kittengifs.com/gifs"
    }).done(function(response) {
      console.log(response.length)
    }).fail(function(response){
      console.log("ajax get request failed")
    })
  })
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```  
$(".test_ajax_post").on("click", function(){
    var name = $(".name").val()
    var photoUrl = $(".photo_url").val()
    var nationality = $(".nationality").val()
    $.ajax({
      type: 'POST',
      data: {artist: {photo_url: photoUrl, name: name, nationality: nationality}},
      dataType: 'json',
      url: "http://localhost:3000/artists"
    }).done(function(response) {
      console.log(response)
      $("ul.articles").append("<li><a href='/artists/" + response.id + "'>" + response.name + "</a></li>")
    }).fail(function(response){
      console.log("ajax post request failed")
    })
  })

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```SQL is for relational NoSQL is for non-relational
```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);
```

Your Answer:
```I think you just need '.findById'

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```
Models hold the constructor function and fetch from the database.

Views hold the prototype function and create a user-friendly not crypted view of the json


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
var eat_bamboo = function () {
  console.log('this.name' + ('num_bamboo_eaten' + ii'));
};
```
//not sure at all


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```

"For most people, their car is one of their most valuable possessions, valued in tens of thousands of dollars.  They are convenient places to leave our other valuables like computers and clothing.  Yet we are sometimes required to give them to a parking attendant or valet whom we’ve not met before. A valet key solves the problem – it’s an access token with limited rights that can operate the vehicle but not grant access to the trunk or glove box."

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```
@media (max-width: 60em){
  .column-6{
    width: 100%;
  }
  .column-4{
    width:83.33%;
  }
}
@media (max-width: 40em){
  .header > .column-2,
  .column-4{
    width:100%;
  }
}
@media (max-width: 30em){
  .column-2,
  .column-8{
    width:100%;
  }
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```rebase is when you switch out the master for a new master branch

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```
Fork, clone, git add ., git commit, git push origin 'branchname', submit pull request, merge, git pull upstream master.

```
