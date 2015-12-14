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
$.getJSON(http://kittengifs.com/gifs).then(function(response){
  console.log(response.length);
})

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
An AJAX call takes three variables: path, method and format. When submitting a form through AJAX, we can specify a "POST" method and pass the input variables. To be able to read the input variables, we'd need body-parser in the backend to parse the information in the request.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases store data in tables and each row of the table is for one data point. NoSQL stores data in objects using key value pairs. The SQL databases are less flexible than NoSQL databases but better at mapping complex relationships such as many-to-many relationships. Any changes to a SQL database would need to start with the schema and adding/editin/removing columns from the tables. A feature of NoSQL databases is that they are adaptable to changes anytime and anywhere.
```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);

AuthorModel.find({name: "Bob"}).then(function(author){
  console.log(author);
})
```

Your Answer:
```text
This code does not take into account that Mongoose and JavaScript are asynchronous. The console logging takes place while Mongoose is finding the AuthorModel. The fix is using a promise.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
  The models on the client side retrieve data from the database through AJAX calls to the custom API and create js objects that are replicas of the database objects and may be manipulated in a similar fashion. Using the models on the front end allows CRUD functionality without making frequent requests to the database for each step. Similarly, client side rendering of the views reduces HTTP requests for HTML documents to the server and allows the user to interact with the application once the script files are loaded.
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
Panda.prototype.eat_bamboo: function(){
  this.num_bamboo_eaten ++;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
Like a valet key, OAuth uses a standard protocol to authenticate and grant access but doesn't expose everything on the server and database to the third party used for authentication. 
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body{
    background-color: red;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
A merge brings in the latest commits from one branch to another but doesn't change the structure or the history of the branches. A rebase puts one branch on the head of another to form a single path and rewrites the previous commits to reflect that.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
A collaborating team may decide to work on one repo (using collaborator persmissions) or fork the repo and work strictly through pull requests to the original repo. Team members usually work on separate feature/bugfix branches and once their changes are approved by the group members or a team lead, merge their code into the master branch. It's a good idea to keep the master branch in production mode and only push changes that are ready to go live. Another best practice is not to ever merge your own code into Master and have a second pair of eyes check the work.
```
