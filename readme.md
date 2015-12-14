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
  $.ajax({
    url: "http://kittengifs.com/gifs",
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log("Ajax request success!");
    console.log(response.length + " kitten gifs acquired.");
  }).fail(function(){
    console.log("Ajax request fails!");
  }).always(function(){
    console.log("Something happened.");
  })

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```
You'll need to attach a submit handler to the form that prevents the default action from being carried out, and instead directs it to an AJAX request that is built like the code above, except with 'type: "POST"' instead of "GET". Each field of the form will need to be appropriately mapped to a column in the database (I think this is with name="whatever" in the HTML tag for the field ...)

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```
NoSQL databases like Mongo have collections rather than tables, and don't designate a schema. Instead of columns, there are fields, and instead of rows there are documents. This allows you to store arrays of mutliple values in one column, instead of relating that column to a separate table.

Regular SQL databases store complex relational data across multiple tables better, so it's preferable when you need to build out many relationships between different data points. NoSQL is less structured and more flexible, but retrieves data faster when storing simple data.

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
You may not have declared AuthorModel correctly. Mongo doesn't automatically create its own schema that would generate a model, so you you would need to declare a line such as var AuthorModel = mongoose.model("Author") in your code.

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```
By separating out views and models, you can separate functionality. In the model files, you can code JSON requests, and push any updates or deletions to the database so they can be presented properly to the user in the view.


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
Panda.prototype.eat_bamboo = function() {
	this.num_bamboo_eaten++;
}

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```
Assuming that Google was right in telling me that a valet key unlocks doors and starts the car but can't unlock the glove compartment or the trunk ... OAuth offers the user an option of logging in with another service like Twitter or Faceebok. If they take that option, they then log into, e.g., Twitter (if they haven't already), and twitter generates an OAuth token for the user. Then the user is redirected to the original app, with the token attached as a GET parameter, and the app can grab certain information from Twitter, and use that information to create the user's profile, rather than making them log in all over again.

So I guess OAuth is like a valet key in that it allows access to certain parts of a users car/profile, in order to do certain things with it, but doesn't permit blanket scraping of all the data/joyriding around town.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media (max-width: 40rem) {
	.columns {
		width: 10rem;
	}
}

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```

Merging combines code from two different branches, but rebasing combines the two branches themselves, makking it appear as if the two separate branches never existed. This can make your commit history much cleaner, but you lose the individual commits from each branch - you only see various iterations of merged results, which will be similar but not identical to the original branches. 

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```
When a team member decides to create a new feature, they should run a pull request on the master branch (assuming they've already forked and cloned it to their computer), to make sure the code on their computer is up-to-date. Then they'll need to create and checkout a new branch for their feature. When their feature is done and they want to integrate it with the master code, they'll need to switch branches to master, run another pull request, switch back to their original feature branch, and run a merge. If there are any merge conflicts they'll have to resolve them in their text editor before the merge will be accepted. Then they can push it back to master.

```
