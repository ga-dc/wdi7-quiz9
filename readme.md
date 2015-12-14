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
```$.ajax({
  url: http://kittengifs.com/gifs,
  data: [],
  success: success,
  dataType: JSON
});

```

### Question #2

Describe at a high level how we use jQuery to submit a form via AJAX.

Your Answer:
```When we use jQuery to submit a form via AJAX it has some advantages. Such as we can process the form without having to refresh the page. It is very useful in single paged apps. We can run both Client and Server validation. Show errors if there are any. Also showing success if a form is submitted correctly. All from one page with out reload.

```


## Mongo / Mongoose

### Question #3

Describe the differences between a SQL and NoSQL DB, and when you might use each.

Your Answer:
```SQL we have a schema, but in order to manipulate that schema we have to re-seed our data to
  update the database where with a NoSQL DB like mongoose we are able manipulate it directly and update
  without having to reseed.

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

```

## Front-end OOJS

### Question #5

Describe the purpose of views and models in FE JS.

Your Answer:
```The views and models are what are rendered by JS on the site. We build our models in views in js and than reference them on what part of our index we want them to show up. We often use this for layout and forms of our application.

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

```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```They are convenient places to leave our other valuables like computers and clothing.  Yet we are sometimes required to give them to a parking attendant or valet whom we’ve not met before. A valet key solves the problem – it’s an access token with limited rights that can operate the vehicle but not grant access to the trunk or glove box.

If Jerry visits a site, which uses a service provided by Twitter. This site is using it's OAuth credentials to begin the authentication process. The site then redirects to Twitter to login. The site never sees Bob's Twitter password. The page asks if it has access to Twitter so the application can be utilized. If the sign in is successful the site will uses its own OAuth token to retrieve those credentials The site then stores Bob's credentials along with the account.

```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```

```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```Rebasing re-writes the project history by creating brand new commits for each commit in the original branch. When you do a git merge, the result of the merged branches is placed on your current branch. The result of the merge is a new commit on the current branch.

```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```When we fork a project we are copying all files and putting them into our own git profile, and create our own repo. From there we can change code as we see fit. We can create other branches to work on. It is basically our own copy.
Though the changes we make do not effect the original project. When we fork the project we then have to clone it to
our hard drive so that we can access it in our code editor. Once the clone is made our changes can be committed to our
repo on git hub.

If we want our changes to be made to the original project we can then submit a pull request to ask the original project owner to apply those changes the their original code. If the Owner accepts the changes then they will be pushed into the
the original project.

When working in groups there are often several different branches that developers will be working on. Unless the branch is on the original project repo. Developers will often have to pull upstream to get the most up to date version of the repo.
This ensures that the changes being made are not breaking original code.

```
