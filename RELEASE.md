# How to release

To release new versions of our package we use a Github action that triggers on the creation of a new Github release.
As we use [pnpm](https://pnpm.io/) to manage our monorepo the `pnpm publish` command is used in this Github action and will release all the packages not flagged with the `private` property in the `package.json`
The released packages are :

- `@prestashopcorp/puik-components`
- `@prestashopcorp/puik-web-components`
- `@prestashopcorp/puik-resolver`
- `@prestashopcorp/puik-theme`
- `@prestashopcorp/puik-tailwind-preset`
- `@prestashopcorp/puik`

ℹ️ Only packages whose version has been bumped will be published in the npm registry (see below):

## 1 - Versioning with changset

> ⚠️ **Be careful, this is an important step** :
>
> Before creating a release on github, you must bump the versions of the packages that have been modified with [Changeset](https://github.com/changesets/changesets).
>
> For the moment this step is not yet automated and the following steps will need to be carried out.

Here are the steps to follow:

1. To generate a new changeset, run `pnpm changeset` in the root of the repository. The generated markdown files in the .changeset directory should be committed to the repository.

2. Run `pnpm changeset version`. This consumes all changesets, and updates to the most appropriate semver version based on those changesets. It also writes changelog entries for each consumed changeset.

3. Run `pnpm install`. This will update the lockfile and rebuild packages.

4. Commit the changes and create a new Pull Request to `main` branch.

5. Merge Pull Request to `main` branch and then you can create a new release from github (see next step).

## 2 - Use github release system

You can find the link `Create a new release` on the right on this [page](https://github.com/PrestaShopCorp/puik) or you can use directly this [link](https://github.com/PrestaShopCorp/puik/releases/new).

Once you clicked on, you have to create a tag by clicking on `Choose a tag`, write your tag name like `vX.X.X` by respecting the [semantic versioning](https://semver.org/).

Make sure that `main` is selected as `Target`.

Set the `Release title` as the version of your tag `vX.X.X` and for the description you have to click on `Generate release notes`.

And finally you can smash the `Publish release` button.

The packages will be pushed to `npm` publicly.
