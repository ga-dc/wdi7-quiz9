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
$.getjson('http://kittengifs.com/gifs', function(data) {
  console.log(data.length)
}))

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
  We use jquery to submit a form via ajax by either by passing information through the headers or using the body-parser module( or similar) to retrieve data from the ajax post request.
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
  A SQL DB is relational meaning it uses pre-defined relationships between tables in your database based on the schema. These relationships can be leveraged by different tools, in our case ActiveRecord, to gain a significant amount of functionality. Besides the built in functionality leveraged by ActiveRecord and rails, SQL DBs a preferred when defining a many to many relationship.

  A NoSQL DB is based off collections and documents. A document can have sub-documents and in many ways a NoSQL DB can act like a SQL DB when your model has a one to to or one to many relationship but more efficiently. Twitter found it preferable to use a NoSQL DB when celebrities began having millions of followers. The example I read, said they began to recognize a problem when it could take upwards of 5 minutes for Lady Gaga to send out a tweet to all her followers and their solution was to integrate a NoSQL DB.

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
var Author = mongoose.model('Author', AuthorSchema)

Author.find({ name: 'Bob' },function(err,doc){
  console.log(doc)
  })
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text
  Views and models in front-end js are used very similarly to traditional JS. They encapsulate behavior (models) and data that needs to be referenced during the session of use of your app. In front-end JS this generally means storing a subset of data from your database and then acting upon the HTML in a manner dictated by the data(views).

  It is similar because it creates a template system that can be used to efficiently reproduce the same type of look or behavior repetitively. It is different because it has direct access to the HTML displayed to the user while only having access to the DB through AJAX calls. So they are powerful tools to produce single page, non-refreshing applications that still use data that persists outside of sessions but needs to create a unique user experience within a session.
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
  this.num_bamboo_eaten ++
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text

  OAuth is related to a valet key in that grants temporary access to a specific subset of actions required to complete a certain function. The token system used by OAuth prevents us from having to print a new key for every driver of our car and it allows us to grant access to only the part of our User that we want the new authenticator to have... and not the trunk.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
  @media (max-width: 40rem) {
    body{
      background: black
    }
  }
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
  A rebase is different because instead of a single merge commit that resolves the differences in the two branches it stacks the commits of the rebasing branch on top of the rebased branch. You can use it to condense and streamline your commit history
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
  Fork and pull request means creating your own version of the orginal remote repository that you can work on locally and the submit back to the main repo via pull request.

  Or you can be added as a collaborator and can work in branches off the main branch. and combine features via merge.

```
