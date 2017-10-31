## Delete Branches
You can delete branches after their commits get merged to the master branch. If they haven't been merged deleting branches can be destructive. 

### Locally
Already merged local branches.

```$: git branch -d <branch-name> ```

Force, even if the branch hasn't been merged. Think twice before doing this.
```$: git branch -D <branch-name> ```

### On the remote
```
$: git push --delete origin <branch-name>
```