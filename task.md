# Task: Deploy a bigger app

* Go over the code in the project folder. Run it locally, investigate what it does and try to understand it.

* Deploy the code to Heroku. It's easiest to do so from a separate repo, so:
  * Copy the code to a separate folder
  * `git init` to create a new git repo in that folder
  * If that folder is inside a parent git repo, add a `.gitignore` to ignore the new sub repo.
  * Use `heroku create` to create a new Heroku project
  * Use `git push heroku master` to push a new version (make sure you commited before).
