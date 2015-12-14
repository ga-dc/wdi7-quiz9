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
FE = front end Javascript
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
var eat_babmoo = function(){

}
```


## OAuth

### Question #7

How is the concept of OAuth related to a valet key?

Your Answer:
```text
OAuth is the standard way for apps to handle authentication. It allows users to grant 3rd party access to their personal information *without* actually giving the app their passwords. This relates to a valet key in the sense that a valet key lets a valet person operate a car, but restricts access to the trunk, gas tank, and glove compartment where there is sensitive information about the car and owner.
```


## RWD

### Question #8

Write some basic CSS that demonstrates changing a CSS property when the device width drops below 40rem.

```css
@media(max-width: 40rem){
  body{
    background-color: yellow;
    width: 30%;
  }
  ^^kind of tempted to write 39rem to ensure i'm interpreting the question right? Also never heard of rem - cool!
```

## Git

### Question #9

How is rebase different than a merge?

Your Answer:
```text
Both git Merge and git Rebase integrate changes from one branch into another, but they do it in different ways. Merging is referred to as the "non-descrtuvctive" option because when you merge two branches (say featureBranch with master) you can see the the commit history of both branches by running 'git log'. Rebasing is different, because when you would merge these two branches it pushes the feature branch on top of the master, re-writing the project history by making new commits for each commit in the master branch.
```

### Question #10

Describe some of the common git workflows for teams (fork and pull request, etc).

```text
Here is how my team worked during project week.

1 Person owned a repo on github and added the other members as collaborators.

We have one main branch called Master which was uploaded with a generic outline of our project.

The other team members would use the command "git pull origin master" to pull own the latest version of that master branch. They would make updates (either in master or another brancs), push those updates up to our repo, and if they were working in 'master' those updates were automatically inserted into our app. If they made changes in another branch, you would use the same command (git push origin otherBranch) and merge those changes with the master branch using a GitHub pull request. If there were Merge conflicts we would resolve these through the command line and Atom.
```
