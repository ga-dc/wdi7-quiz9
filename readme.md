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
var request = $.getJSON("http://kittengifs.com/gifs").then(function(response){
  console.log(response.length)
})

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
When we submit an AJAX request using jQuery, we are sending a request to an endpoint at an external API.
If the method (post, delete, put, etc) and the route (URL) match, it will respond to the request with data in
some form (usually JSON or XML).
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases are known as relational databases, while NoSQL databases are know as non-relatinoal databases.
The key advantage of NoSQL databases such as mongo are that they store information in collections, and inside these
collections are documents containing the actual data.  Documents can hold other documents.  They can be faster
than SQL databases when there is a very large amount of data that needs to be read and written.  They are easily scalable.

SQL databases are based on structured tables, similar to an excel spreadsheet.  They can be easily queried using SQL query language.  They are fast and suited for very structured datasets.  They are however, not easily scalable.

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
The result should be returned in a promise object.  You need to access that object with a .then or .done method.  The code should look like :

var results = AuthorModel.find({name: "Bob"}).then(function(results){
  console.log(results);
});
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
A view should handle how information is displayed on a page in HTML for a certain model.  A model usually has a backend correspondent.  The front end model access the database through the back end component.  It can then contain all of the functionality for instances of that model.  These can then be called back in the model's view so that instances of that model can be modified and displayed in the browser.
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
Panda.prototype = {
  eat_bamboo : function(){
    this.num_bamboo_eaten++;
  }
};
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth is a method for a 3rd party website to authenticate with an outside website such as Twitter, Facebook, or Google.
When the 3rd party site requests to sign in via Twitter for example, it redirects to the Twitter site, and you sign in there.  It will then send an OAuth authentication token back to the 3rd party site so that Twitter knows that site can access a User's Twitter information.  This is safe because even if the 3rd Party site was hacked, the password cannot be stolen for a User's Twitter.  This is a like a Valet Key, you can drive the car, but still don't have full control of the car.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem){
  body{
    background: #005C92;
  }
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
When you merge a branch you pull all the info from that other branch and merge it into that current branch.  There will still be two different branches.

When you rebase, you take a complete branch, and put it on a branch of your choosing.  This means that there will only be one branch after a rebase.  All of the commits from the rebase branch will be created in the branch you are rebasing to.  It creates a very liner view of workflow.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
The most common git workflow that I used in my group project was for everyone to create a new branch for any new feature they were working on.  When they were ready to incorporate the branch into the project, they would push to branch and merge it to master in GitHub.  If there were merge conflicts we would all take a look at the merge conflicts and merge it to master in the command line after pulling the most up to date version of master.   We would then push to origin master.
```
