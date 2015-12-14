# Quiz #10

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
var request = $.getJSON(url, function(res){
  var totalgifs = res.data.length;
 	console.log(totalgifs):
});

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
 We need to capture the values of the form using jQuery, and one approach could be using the .val() method. For example, if a form included an input tag for a person's firstname (with a class of "firstname"), we could use $(“.firstname”).val() to grab that value. After we use jQuery to grab all of the input values we need, we would then send a AJAX Post request to our server with those values passed in as an object(a data object with key value pairs associated with those values). Furthermore, we could then pass in promises that may or may not happen as a result of the ajax request.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text

SQL databases are relational, and include lists of related tables with columns and rows. NoSQL databases store JSON like documents with key value pairs. In SQL, you must create a schema, adding tables and field types before adding any data, and overall can be considered more rigid. On the other hand with NoSQL databases, the structure and schemas can be more flexible and more easily manipulated.

I would choose SQL over NoSQL for more complex associations with a lot of models. However, If that was irrelevant to my domain, and I needed a faster, high preforming database for what I was trying to achieve, I would choose NoSQL.
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

First, we are using .find versus .findOne method in mongoose. The .find method will return an array of documents, where as .findOne will return a single document. Additionally, we might want to pass an additional callback function in order to grab the results.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
In front end Javascript, typically our views could be condensed into a single index.html document that would contain the basic html structure for our application, and then use Javascript to dynamically add additional html and change the format. We might create a views directory with separate files to render our models into HTML. We could then create functions in our views directory and files that dynamically create html based on events in the browser. Furthermore, the models in front-end JS, might typically contain Object constructor or prototype functions that allow us to model documents or objects of our database on the front end. Additionally, our models would contain code for connecting our data to the server. Overall, this structure is not required, but allows us as developers to create cleaner and more concise code.
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

Panda.prototype.eat_bamboo = function(){
  return this.num_bamboo_eaten + 1;
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
 OAuth is a security protocol that allows users to grant third party access to their web resources without sharing their passwords. It delegates authentication between applications using an access token. It is related to a valet key, in that the valet driver can be compared to the access token, sharing limited rights to use a vehicle but not further operate besides parking and grabbing the car.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
body{
  background-color: red;
}
@media(max-width: 40rem){
  body{
    background: green;
  }
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
 Rebase is different than a merge, in that instead of merging the data through one commit, it combines the two branches themselves, and can help with cleaning and organizing a project's git history. When you rebase, you are disregarding your old commits and replacing them with new commits.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
One workflow is the centralized workflow, where there is one remote repo branch designated as a master and all team members will clone this master onto their local machines, and will pull and push directly from/onto that single repo. Another common workflow is the feature branch workflow, where team members will fork and clone a copy of the master repo and will push branches and changes to their forked copy, then submit a pull requests to the master repo in order to merge changes.
```
