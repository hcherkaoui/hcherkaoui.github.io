How to update and upload the website:

```bash
$ git checkout source
# modify the different pages at _pages/
$ git commit -m"ENH my update"
$ git push -f
$ ./bin/deploy --user
```