---
title: NPM Publish
outline: deep
---

# NPM Publish

The package name is `@norio-office/rich-text`. The internal npm registry is:

```bash
http://192.168.0.146:40087/
```

## Pre-Publish Checks

Run the checks from the component repository:

```bash
cd D:\work\office\rich-text
npm run typecheck
npm run build:all
npm run publish:dry-run
```

If the current version has already been published, bump the package version before publishing again. npm does not allow overwriting the same package version.

## One-Off Publish

To publish this release to the internal registry, pass the registry through to `npm publish`:

```bash
cd D:\work\office\rich-text
npm login --registry http://192.168.0.146:40087/
npm run publish:npm -- --registry http://192.168.0.146:40087/
```

The `publish:npm` script runs `publish:prepare` first, then publishes from the generated `npm/` directory. Arguments after `--` are forwarded to `npm publish`.

## Scope Registry

To make the internal registry the default for the `@norio-office` scope:

```bash
npm config set @norio-office:registry http://192.168.0.146:40087/
npm login --registry http://192.168.0.146:40087/
```

After that, publishing can use:

```bash
cd D:\work\office\rich-text
npm run publish:npm
```

## Token Auth

If the internal registry uses token authentication, configure `.npmrc` locally or in CI:

```ini
@norio-office:registry=http://192.168.0.146:40087/
//192.168.0.146:40087/:_authToken=YOUR_TOKEN
always-auth=true
```

Do not commit real tokens to the repository.

## Verify

Check the published version:

```bash
npm view @norio-office/rich-text version --registry http://192.168.0.146:40087/
```

Consumer projects should configure the scope registry before installing:

```bash
npm config set @norio-office:registry http://192.168.0.146:40087/
npm install @norio-office/rich-text
```
