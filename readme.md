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
```
$.ajax ({
  url: “http://kittengifs.com/gifs”,
  type: “get”,
  dataType: “json”
  }).done (function (response){
    var total = response.length;
    return(total)
  }
  }).fail (function () {
    console.log(“Ajax request Fails!”)
    }).always(function(){
      console.log(“This always happens!”)
      })
  }

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
-	Bind an event handler to the submit
-	And then send data to backend endpoint
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```
SQL is a relational database that’s divided into tables and rows and data is store in terms of schema. While NoSQL Database doesn’t have any fixed table and rows or fixed schema. It’s flexible. It poses data faster than SQL Database. No SQL database are faster because their data model are simple. If for interactive app and mobile application I will use NoSQL.
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
Var results = AuthoModel.find({name: “Bob”}, callback);
Console.log(results);

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```
Front end models takes data from view, send it back to server side app.js. It also fetch data from server side and saves it.

When front-end view gets click or submit request it goes to front end model to request data data or sends data to front end model and renders html page back to browser.

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
Panda.prototype.num_bamboo_eaten = 1;
var Panda1 = new Panda(“bob”, 22);
console.log(“Hello I am” + this.name + “I am” + this.age + “and I have ate” + this.num_bamboo_eaten);

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```
Valet key is special key that you give to your parking assistant. With that key you give permission to parking assistant to park your car with in certain boundary and only limited access because some valet key doesn’t function full as regular key.

Oauth is same you give permission to third party with limited privilage without sharing your actual credentials.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css

```@media screen and (min-width: 40rem) {
    body {
        background-color: lemonchiffon;
    }
}


## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```
 Merging is non destructive operation. The existence branch are not changed. Rebase moves all the feature branch on top of master branch. Rebase destroys all commit history.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```
- Create a master repository. This is the branch you deploy.  
- You work on your branch – when you are ready to push your changes on your branch – make sure you have latest changes from master you have to do pull request first. If there is no conflict then, you push your changes and then pull request and merge into master. – This notifies to all members of your group that you have done pull request so they can have pull request to their working branches. After you have done this step you can delete your branch on local or remote.

```
