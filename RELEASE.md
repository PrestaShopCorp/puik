# How to release

To release new versions of our package we use a Github action that triggers on the creation of a new Github release   
As we use [pnpm](https://pnpm.io/) to manage our monorepo the `pnpm publish` command is used in this Github action and will release all the packages not flagged with the `private` property in the `package.json`
The released packages are:

- `@prestashopcorp/puik-components`
- `@prestashopcorp/puik-web-components`
- `@prestashopcorp/puik-resolver`
- `@prestashopcorp/puik-theme`
- `@prestashopcorp/puik-tailwind-preset`
- `@prestashopcorp/puik`

## Use github release system

You can find the link `Create a new release` on the right on this [page](https://github.com/PrestaShopCorp/puik) or you can use directly this [link](https://github.com/PrestaShopCorp/puik/releases/new).

Once you clicked on, you have to create a tag by clicking on `Choose a tag`, write your tag name like `vX.X.X` by respecting the [semantic versioning](https://semver.org/).

Make sure that `main` is selected as `Target`.

Set the `Release title` as the version of your tag `vX.X.X` and for the description you have to click on `Generate release notes`.

And finally you can smash the `Publish release` button.

The 5 packages will be pushed to `npm` publicly.
