[![Build Status](https://travis-ci.org/mlibrary/http-responses.svg?branch=master)](https://travis-ci.org/mlibrary/http-responses)

# HTTP responses

A site for rendering public pages relating to HTTP response status codes.

## 🚀 Quick start

1.  **Clone `http-responses`.**

    ```sh
    git clone https://github.com/mlibrary/http-responses.git
    ```

2.  **Install dependencies.**

    Navigate into your site’s directory and install dependencies with NPM.

    ```sh
    cd http-responses/
    npm install
    ```

3.  **Start developing.**

    Start it up.

    ```sh
    npm run develop
    ```

## 💫 Stage

Use the now.sh to stage the site and get a url to share.

```sh
npm run stage
```

## Making changes

Enter the `src/pages` dir and edit an existing page or add a new page. Each page is written as markdown.

```sh
cd src/pages/
...
```

`title` and `code` frontmatter is required.

## Deployment

Changes to master will trigger a deploy to Github Pages via Travis.

### Example

```md
---
title: Page not found
code: 404
---

We are unable to find this page.
```

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.
