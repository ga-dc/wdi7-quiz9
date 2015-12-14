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
  url: "http://kittengifs.com/gifs",
  type: "get",
  dataType: "json"
}).done(function(response){
  console.log(response)
})
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
We make an AJAX call with a type of "POST" to a URL that we want to post to. In turn we made a new artist by posting to "/artists". The AJAX post request would be made on click of a submit button.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
The difference between SQL and NoSQL is that SQL is a relational database and NoSQL(like Mongo) is a non relational database. This means that in SQL tables are related to each other with foreign and primary keys and join tables for many to many relationships. NoSQL has no relationships between tables; all relationships are represented within the main "document" or model. For Tunr, SQL we would have two tables, artists and songs and the songs table would have a artist id in it to relate the song to its artist. In NoSQL(Mongo) We would only have artist documents, and the songs would be a attribute or subdocument of the artist.
```


### Question #4

What's wrong with this mongoose code and how might we fix it?
(Hint: Assuming there is a document with a name of "Bob", why is results not an author model on the second line?)

```js
var results = AuthorModel.find({name: "Bob"});
console.log(results);

//possible fix
var results = AuthorModel.find({name: "Bob"}, function(err,docs){
  if(err){
    console.log(err)
  }
  else{
    console.log(docs)
  }
})
```

Your Answer:
```text
The .find() command is asynchronous so the request to the database may not be finished in time for the console.log so it may return undefined. To fix it we would have to attach a callback function in the .find() to make sure it console logs after the result is found.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
One purpose of views and models in FE JS is to make dynamic updates to your webpage and DB using AJAX requests. The models help you create new objects and the views help you render those objects on the webpage. Another purpose of models and views in FE JS is to make your FE JS code more readable and maintainable.
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
Panda.prototpe.eat_bamboo = function(){
  this.num_bamboo_eaten +=1
}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
It grants limited access rights to some of our information so we can be authorized but our valuable private information is not compromised.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
  @media (max-width: 40rem){
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
Merging combines finished data from two different branches, feature branch and master branch, using a single commit. Rebasing combines the feature and master branches as if the commits on the master branch had always been there.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Each member of the team will fork and clone a copy of the main repository. The members will create feature branches and commit to those feature branches. When a feature is completed those changes can be pushed to github and a pull request can be made to the main repository. The code is reviewed by the other members and it can be declined or merged. If the branch is to be merged there may be merge conflicts. Once merge conflicts, if there are any, are resolved those changes can be pulled down via and git pull upstream/git pull by the team members.
```
