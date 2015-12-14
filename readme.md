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
var url = "http://kittengifs.com/gifs"
$.ajax({
  dataType: 'json',
  url: url,
  data: data
  console.log(data)
}).done(function(){
  console.log('success')
})



```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```text
  When a request comes in to the page ajax sends the information in the form of json
  which then gets translated back to html/css or whatever it needs to be
```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```text
 a noSQL db is usually used when there is only one to many relationships or very few many to many relationships (if any at all).  SQL databases have more structural options and can handle the many different types of relationships including many to many.  In a noSQL db a program can handle the calls to the db for you where as with a SQL db you would have to set up the sql calls.
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
 You are missing the two params that it's looking for error and success.

you could rewrite it something like:
AuthorModel.find({name: 'Bob'}, function(err, name){
  if (err)
  console.log('i'm a failure)
  else console.log('what's my name)
  })
```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```text


  The model is all about the information and getting the data.  The view renders the model and
  usually gives it some type of meaning with a visual representation.
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
var eat_bamboo = function(){
var this = self

for (i=0; i<self.num_bamboo_eaten.length; i++){
  self.num_bamboo_eaten + 1
  }
}



```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
  There is one key for each car and if you lose the key you lose your job.  
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (min-width: 40rem)
body{
  background: pink;
};

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
  In all seriousness, I had a dream about this last night, which is crazy.  The world depended on a merge to happen in the code and it kept not going through properly like what happened when we did the group project.  Finally I said with the most serious tone "we need to do a rebase" and the code merged to master and the world was saved

  Merge takes all the commits from one branch and jam packs them into another branch usually the most current version of master

  Rebase says forgot all those commits in the middle lets just jump from the now until master

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
You could fork but then you run the chance of living in your own world and forgetting about the master, so I cloned the master directly and worked with pull requests.

Basically you clone the master make a separate feature branch and before you push the branch up make sure you pull down the latest changes from master and merge them to your feature branch then push the branch up and make a pull request on master.  
```
