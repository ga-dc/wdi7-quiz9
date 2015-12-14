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
  type: 'POST',
  url: http://kittengifs.com/gifs,
  success:function(data){
    console.log(data.length);
  }
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
jQuery submits a request to the API via AJAX (usually requesting specific data by using key value pairs) and then posts the result of that request to the server. You can then append the results to your html using jQuery and display the resulting data from the API in your browser view.  
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases, like PostgresQL, store data in a relation model with rows and columns that can include foreign keys, to connect one row in a table to another in a separate table. The schema in a SQL database is fixed, and can only be changed through a migration. More data means more data in your table, which can become more expensive over time. noSQL databases, like mongoDB, are seen to be more agile and scalable, since you can easily change your schema and your data is stored across multiple containers/servers. If you're going to be working with large quantities of rapidly changing data, then a noSQL database might be the best choice. However, if your data set is more static, and you want to store your data with structured attributes and consistent relationships, then a SQL databases may still be the best choice.
```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);
```

Your Answer:
```js
var results = AuthorModel.findOne({ name: "Bob"}, function(err, docs){
  console.log(results.docs)
});
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
A view file describes what will be rendered in the user's browser window after he/she makes a request to a specific URL. Models describe what attributes (key/value pairs) below to each instance of that class in the database. If you define instance variables in your controller files, then you can access the attributes assgined to that model in your view files.
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
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
  var eat_bamboo = function(num_bamboo_eaten){
    return (num_bamboo_eaten + 1)
  };
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth allows users to authorize applications to do work on their behalf, or access their information, without sharing their unique personal password. In this way it is similar to a valet key, because while it is not an exact copy of the driver's key to the car, it does allow the valet to operate the vehicle (on behalf of the owner), but doesn't give them full access to the car (for example, most valet keys will not open the lock to the trunk of the car).
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem) {
  body {
    max-width: 75vw;
    margin: 0 auto;
    background-color: red;
   }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Rebase and merge both solve the same problem of integrating changes from one branch to another, but they do so in different ways. When you merge changes from a feature branch into the master, you create a merge commit message and preserve the real history of the development/feature branch and master. Rebasing, on the other hand, rewrites the commit history by moving the entire feature branch directly onto the most recent version of the master branch, effectively merging all of the commits from the feature branch into the master. Rebase can be a valuable tool, but it's important to remember never to do this on a public branch that other team members are working on, or you could inadvertently end up working on different versions of the "master".
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
During our group project, my team decided to work from one main repository, which we were all added to as contributors. This gave all team members to ability to push and pull from the repository, without needing to set an upstream master (which would be required if team members forked the repo and then cloned down their own fork to work on). Using one main repository worked well for us, because everyone could push their own feature branches to the main repo, and then create a pull request when they felt their code was ready to be incorporated into the master branch. Another team member would review their code, check for any merge conflicts, and then approve the pull request to merge their changes. We then slacked out a group message letting everyone know they should do a "git pull origin master" to pull the most recent version of the master branch down onto their local work environments.
```
