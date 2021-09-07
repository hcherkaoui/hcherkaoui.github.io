How to update and upload the website:

```bash
$ git checkout source
# modify the different pages at _pages/
$ git add --all
$ git commit -m"ENH my update"
$ git push
$ ./bin/deploy --user
```