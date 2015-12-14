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
  url: http://kittengifs.com/gifs,
  type: "get",
  dataType: "json"
}).done(function(response){
  console.log(response.length);
}).fail(function(){
  console.log("Ajax request failed");
});
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases use tables to store information while NoSQL databases use objects stored in collections. SQL databases are more structured and are more efficient at processing many-to-many relationships while NoSQL is flexible and faster at processing one-to-many relationships.
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

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Model files for the front-end are used to fetch the information for that particular model from the backend while the views take that information and present it on the page for the user.
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
Panda.prototype.eat_bamboo = function() {
  return this.num_bamboo_eaten += 1;
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth allows users to share only the information they want to share without putting their password/security at great risk. Similar to how a valet key can start the car but can not open the glovebox.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
body {
  background-color: white;
}

@media (max-width: 40rem) {
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
Rebase re-writes the commit history as a linear progression of commits while merge only brings together the two most recent commits of the respective branches.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
pull requests allow the developer to request that their changes to another branch (typically the master branch, or a different repo) be merged together. The request makes sure that the core developer(s) can look at these changes and decide if they want to integrate it into the code or not.

forks allow users to create their own copy of a repo so they can make changes to the code with the intent of doing a pull request to the original repo.
```
