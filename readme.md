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
function getKitty(){
  var url = "http://kittengifs.com/gifs";
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  })
  .done(function(response){
    console.log(response.length);
  })
  .fail(function(){
    console.log("Could not get kitty.")
  })
} // ends getKitty function
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
I do not know! My only successful form submission so far was in rails using form helpers. I don't recall using jQuery or AJAX. Please send resources to read =)
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
A SQL database is relational, uses tables, and more strict with schema definitions. You can do joins to have more complex relationships. NoSQL DBs are less structured and simpler. The schemas of NoSQL DB data do not have to match. They are more flexible than SQL DBs.
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
Mongoose is annoying and requires that you pass a callback function every time you query for a document. The callback function would have two parameters, err, which is what you would want to do if there is an error, and doc, which is the actual result that was found, which, I think, would then be passed into results.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
In FE JS, models and views are created on the client-side for the user to use and see. It allows for a more responsive and quicker user-experience.
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
```js
Panda.prototype = function eat_bamboo(){
  this.num_bamboo_eaten += 1;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
When you valet park, you hand off your private keys to someone to park your precious car for you instead of doing it yourself. OAuth is when you hand off your data and resources to a third party so that they can authorize a user for you instead of having them sign in locally from your app. OAuth and the valet are both great for convenience and speed.  
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body {
    background-color: yellow;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
When you merge a master branch into a feature branch, you create a new "merge commit" in the feature branch that connects the histories of the two branches. The branches are brought together but are not changed in any way, so this is a simple non-destructive method. However, having many merge commits can make reading and understanding histories more difficult as the project gets bigger. Rebasing is when the entire feature branch is moved to the beginning of the master branch and incorporates all of the new commits into master. Unlike merging which uses a merge commit, rebasing will rewrite the history of the project and create new commits for all the old ones. This will give you a clean history. However, it is considered a more dangerous method since you are rewriting project history.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Workflow A:
1. Person A creates a master remote repo for the team.
2. Persons B-Z forks that repo.
3. Persons B-Z clones their own repo.
4. Persons B-Z creates a feature branch to work on.
5. Persons B-Z merges the feature branch into their master branch (this can also be done last).
6. Persons B-Z pushes their changes to their remote repo.
7. Persons B-Z makes a pull request to incorporate their changes into the team's master repo.
8. Person A resolves the merge conflicts- ha ha.

Workflow B:
1. 1. Person A creates a master remote repo for the team.
2. Persons B-Z clones that repo.
3. Persons B-Z creates a feature branch and makes changes on their local machine.
4. Persons B-Z merges the feature branch into their local master branch (this can also be done last).
5. Persons B-Z pushes their master directly to the upstream, or team's remote master repo.
6. Person A resolves the merge conflicts- ha ha.
```
