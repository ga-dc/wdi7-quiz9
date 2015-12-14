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
  var searchKeyword = function(keyword){
  var url = http://kittengifs.com/gifs
  $.ajax({
    dataType: 'json',
    url: url,
    type: 'GET'
  }).done(function(response){
    console.log(searchKeyword);
  }).fail(function(){
    console.log("failed");
  });
}}
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
Just like we use jquery to make ajax get request to 3rd party api to get json data in the above example, jquery is used in similar fashion to submit a form using the "POST" datatype. the format is similar - so using jquery, ajax can perform all crud requests.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL is a relational database, where data is put in tables with rows and columns. Example is Postgresql. SQL database has a predefined schema. NoSQL on the otherhand is a non-relational database. Unlike SQL, it doesnt have a predefine schema and data isn't put in a table format - but rather in an unstructured document as key-value pairs. I'd assume that for complex data queries, a relational database might perform better. Example of a NoSQL DB is Mongo.
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
db.authors.find({name: "Bob"})

To query name of the author from a NoSQL database, you would simple run the above command. Authors being the author model.  
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
The front-end models fetches & saves json. It also sends to the backend http requests in json format. Models communicate with views for data queries back and forth. Views then take what the models brings back and turns it into html to render on the browser for client.
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

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth lets you in through a 3rd party api. It doesn't save your password. So it is limited in what it can do, just like a valet key is used for limited purpose.  
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
They both solve the same problem, but in very different ways. Rebase has a much linear commit history. It takes the master branch and adds it to the end of a feature branch. Unlike rebase, merge ties the histories of both branches, so you don't lose anything. Though rebase is much cleaner, I would not recommend it to those new to git.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
In a team of three working on a project together, one group member will create the initial repo, add the other two as collaborators. The collaborators will then fork and clone that repo. They will then add the initial repo as an upstream in order to be able to pull updates from it directly. For adding new features to the upstream, the two members will create feature branches from their local master branch. Push those to their github, and from each feature create a pull request to the upstream. After merging the feature into the upstream, one can then remove the feature branch from local machine.  

```
