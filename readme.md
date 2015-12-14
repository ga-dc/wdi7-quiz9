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
  $(".test_ajax_get").on("click", function(){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://kittengifs.com/gifs"
    }).done(function(response) {
      console.log(response.length);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    })
  })
})
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
When the form is submitted you send an AJAX request with the type: 'POST' containing the data from the form to the matching backend route that can receive that data and do something with it.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL, or relational databases, store information in tables with rows & columns that can be related to each other. This has the big advantage of making it easy to connect different entries and tables to one another. The downside is that the schema is rigid which can be a restriction when trying to store data that is atypical.

NoSQL, or non-relational databases, store information in a JSON like format. This makes it more difficult to sort through databases with multiple linked collections. They lack a rigid schema which makes it easy to add data on the fly. They can also be faster for a databases with a limited number of collections/models.
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
This looks ok to me. What is wrong? Maybe needs a promise.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
The traditional way of updating a page is for a browser to send a request and receive back an entire page from the backend. A big advantage to front-end JS is that it allows portions of a page to be updated without having to update the entire page. The front-end JS does this by sending requests for the appropriate information to update and then decoding the response back. The front-end model helps parse through these responses in a way that can be used by the front-end view to display and update the page.
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
Panda.prototype =  {
  eat_bamboo: function() {
    var self = this;
    self.num_bamboo_eaten += 1;
  }
};

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
When a user OAuth gives the User/Browser a token (valet key) representing their logged in state. This token can be sent and exchanged for information about the user or update them but this is different than the actual User (the car).
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@@media (max-width: 40rem) {
  body {
    background-color: blue;
  }
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Both commands integrate changes from two separate branches.

Merging two branches ties together the histories of both branches in a non-destructive operation. It also creates a merge commit in the process.

Rebasing moves one entire feature branch to begin at the tip of the other. Rebasing re-writes the project history by making new commits for every commit in the original branch.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
I had to look this up and found a great article here: https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow

Three options for collaborating are a centralized workflow, a feature branch workflow, and a forking workflow. There is also a fourth option called a gitflow workflow that I'm not going to discuss.

1) Centralized workflow
This uses a central repo where all the changes are submitted to. All collaborators clone the repo and work of the master branch. Changes are submitted by pushing to the central repo.

2) Feature Branch workflow
Also uses a central repo. Each collaborator makes changes on independent branches which are incorporated to the central repo through pull requests.

3) Forking workflow
Instead of a central server-side repo, each collaborator will create a forked copy and work from that. Changes are pushed by each collaborator to their forked repo and then can be later integrated to a central codebase by only the people with access.
```
