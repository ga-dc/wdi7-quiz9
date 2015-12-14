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

$(document).ready(function(){
  var url = "http://kittengifs.com/gifs";
  function getKitGif(){
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).then(function(response){
      console.log(response.length);
    });
  }

  getKitGif();
});

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```

Ajax request data from an API. When you make a request, you need to be specific with regards to what data you are requesting. In the example above, We requested JSON data from "kittengifs.com" using a "get" method.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```
Data stored in a SQL databases are called tables. This data is stored using rows and columns. Each instance of a model is saved in a row, and is defined by its columns.

Data sets stored in a No-SQL database (like Mongo) are called collections, and is not organized by rows and columns. Each instance of a model, or an object is saved within the collection. Objects within the collection may have different attributes, and may have values that are stored as an array - both contrary to a SQL database.

```

<!-- SKIP SKIP SKIP -->

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

Views and Models in Front End JS

Views - Views are responsible for the layout and what appears on the page when a browser requests it. The view files in OOJS are typically named after their model+View -- in this example you can generate a constructor method that will generate a view of a particular instance of a model.

Models - Models are responsible for culling the information from the back-end databases, and creating the methods which will be used by the views. The Models ask the back-end for the data about the collections and its objects and make it accessible.

```

### Question #6

Given the following front-end JS model, add an instance method for all pandas called `eat_bamboo`. Calling this method should increase that panda's value for `num_bamboo_eaten` by 1.

```js
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
}

Panda.prototype = {
  eat_bamboo: function(){
    self = this;
    var eaten = self.num_bamboo_eaten;
    self.num_bamboo_eaten = eaten + 1;
  }
}

```

Your Answer:
```text

So here, I added a prototype after the constructor method that adds one to num_bamboo_eaten

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text

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

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text

```
