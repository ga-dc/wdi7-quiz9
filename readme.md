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

Using jQuery, write code that makes an AJAX get request to "http://kittengifs.com/gifs". Output to the console the total number of results you get back.
(Assume the server responds with a JSON array of objects representing gifs.)

Your Answer:
```js
jQuery.ajax( "http://kittengifs.com/gifs" [results] )
console.log(results)
```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
jQuery makes a request to AJAX and uses the routers and controllers to push the from to AJAX.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
SQL databases are relational databases; NoSQL DBs are non-relational databases. You could use either in many situations but when you have many complex
relationships between datasets, it's more efficient to use a SQL database.
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
Bob has quotations marks around it. In order to show an author model on the second line you'd have to make "Bob" a function.
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
Well, views are a way of getting information to show up on the client side (browser); models are a way of structuring the data sets and giving them a form so
they all evaluate in a similar way.
```

### Question #6

Given the following front-end JS model, add an instance method for all pandas called `eat_bamboo`. Calling this method should increase that panda's value for
`num_bamboo_eaten` by 1.

```js
var Panda = function(name, age) {
  this.name = name;
  this.age = age;
  this.num_bamboo_eaten = 0;
}
```

Your Answer:
```text
Panda.prototype.eat_bamboo = function(num_bamboo_eaten + 1) {
    this.eat_bamboo = num_bamboo_eaten;  
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
In the case of OAuth, the app specifically requests limited access OAuth Token (valet key) to access the the APIs (enter the car) on the user's behalf.  If
the user can grant that access, the application can retrieve the unique identifier for establishing the profile.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
.device {
  width: 40em;
  font-size: 12em;
}
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Git rebase and git merge solve the same problem; git rebase should be used with care by beginners. Merge and rebase are designed to integrate changes from one
branch into another. Git rebase moves the entire feature branch to begin on the tip of the master branch, effectively incorporating all the new commits in
master.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
So with our team, Joe created the git repo, added added me and Alea as collaborators, we both cloned the repot and started adding feature branches. Near the
end of the project we ran into some merge conflicts that we found easier to solve by creating pull requests.
```
