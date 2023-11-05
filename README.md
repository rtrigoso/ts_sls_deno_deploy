# Deno Deploy Template
Base deno repository 

#### Built with:
- `deno 1.37.0` (release, x86_64-apple-darwin)
- `v8 11.8.172.3`
- `typescript 5.2.2`

#### Includes:
- [Makefile](https://makefiletutorial.com/) for simplified scripting.
- Git [hooks](https://www.atlassian.com/git/tutorials/git-hooks) to prevent formatting issues.
- [Deno test](https://docs.deno.com/runtime/manual/basics/testing/) examples.
- VScode [extension](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions) recommendations.
- Testing workflow with [github actions](https://docs.github.com/en/actions).

## Setup
Remove the suffix `.sample` from the `.env.sample` file and fill in the required env values.


### Deno
Requires a [deno.com/deploy](https://deno.com/deploy) account.

From the Deno Deploy dashboard, click the "New Project" button and choose the option to "Select a repository". Follow the on-screen instructions to deploy your existing application. This setup was setup to use the `main` branch as the release branch.

### Hooks
To enable git hooks, create a symlink from the `git-hooks` directory to the hooks directory under the `.git` folder.

`ln -s $(pwd)/git-hooks/* .git/hooks`

### Github workflow
When creating a new pull request using the `main` branch as the target, github runs the `test` job. If all steps are successful, the `ready-to-merge` label is added to the pull request.

The `merge` job blocks merges if the `ready-to-merge` label is not present.

### Makefile
The makefile has been included to speed up local runs of common commands. To use a command, type `make` followed by the command label and press enter.

```
╰─⠠⠵ make test
which deno || (echo "Please install deno"; exit 1)
/usr/local/bin/deno
deno test --allow-read
Check deno/tests/utils/strings.test.ts
running 1 test from ./deno/tests/utils/strings.test.ts
server ...
  should return a default value for the variable name ... ok (1ms)
server ... ok (3ms)

ok | 1 passed (1 step) | 0 failed (129ms)
```