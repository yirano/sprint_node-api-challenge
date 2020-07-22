### Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

#### Mention two parts of Express that you learned about this week.

1. Express is to backend what React is to frontend. It's a minimal Node.js web app framework that provides amazing features to develop web and mobile apps, while facilitating fast and easy development.
2. It sits on top of the raw `http` server module and adds extra functionality like routing and middleware support.

#### Describe Middleware?
- Middleware means just that --> A functions that sits in the middle of a request handler(?). They can change the `req` or `res` but it doesn't have to.

#### Describe a Resource?
- A resource is a set of data or information that is sent back to the client when the user makes an `HTTP` request -- or dependent on the type of request?

#### What can the API return to help clients know if a request was successful?
- The API can return `HTTP` status codes and data back in `JSON` format.

#### How can we partition our application into sub-applications?
_I don't get this question so I'll answer this in a couple of different ways._
- You can organize your files into reusable codes? For example, middlewares. You can separate these into its own folder so that you can use custom middlewares to validate inputs and such.
- You can deploy your API to servers like `Heroku` to use it on other projects.
- I don't get this question.
  