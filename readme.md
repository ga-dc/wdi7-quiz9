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

Kitten.fetch = function(){
  var url = "/kittens"
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done ( function(response){
    console.log(response.Kittens.length);
  }).fail ( function (){
    console.log("Failure");
  }).always( function(){
    console.log("Something's happening");
  })
};

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```
jQuery allows us to easily manipulate AJAX responses to return data in JSON format (or other formats).
It also helps us easily find the values submitted through a form, and add into the given AJAX call.  

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```
A SQL DB is a RELATIONAL db, while noSQL is NON-RELATIONAL.  It would be best to use a SQL db over NoSQL when you have complicated many-to-many relationships between your different models.  NoSQL dbs are useful when you have more straight forward one-many relationships, as it is faster, and can be easier to manipulate.
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
I believe that coed does not actually return anything because there is no promise attached to it after the find.  Once you find the results, there needs to be a ".then" that actually returns the information.
In addition to that, if there are more than 1 "Bob"'s, it would not know which one you want to specify

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```
Views and models in FE JS are mainly a "separation of concerns" situation.  Models are where I would add AJAX calls to populate the FE.  Views are where I would plan to actually build my page on the HTML and then provide the viewing source for that models' AJAX call.

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
Panda.prototype = {
  eat_bamboo: function(){
    var self = this;
    self.num_bamboo_eaten = self.num_bamboo_eaten + 1;
    return self.num_bamboo_eaten
  }
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```
***If I'm understanding this question right:
A valet key is essentially a key that a driver would give to a valet that allows that valet to drive and park the car, but restricts access to things like the trunk, or glove compartments.

OAuth can be though of in a fairly similar sense.  When a user signs up to a web app through OAuth, entering their password, OAuth provides the web app with an encrypted version of that password.  All that it allows the web app to do is check to see if that encryption matches each time the given user logs in.  It does not provide the actual password to the web app, so that it adds some security and the password is not just out there in the open.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```
@media (max-width: 40rem){
  body{
    background: green;
  }
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```
Merging happens when you have two separate branches (ex. master and feature), and they are combined into a new commit on the master branch. From there, merge conflicts are dealt with before proceeding further.

Rebase actually goes back to the most recent commit that the two branches have in common, and then builds the combination from there. This is essentially a means by which you can keep your commits all on the same timeline, instead of having branches that end at various points in time.
Rebasing merges one commit at a time, so it can at times be easier to work through conflicts.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```
git clone allows team members to clone down and contribute to the same repo.
git checkout -b <branch name> creates a new branch and switches the developer to that new branch to work on a new feature.
pull requests can be used so that one team member in charge of the master can review any merges from other branches and then accept or reject them through github.
forking creates a separate repo for a team member to work on.  It makes a new master branch.  However, that team member can still create pull requests back to the original that the original master branch can accept.
git diff shows the differences between two branches to better parse through a merge request


```
