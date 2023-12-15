# stylelint-define-config

Provide a `defineConfig` function for `stylelint.config.js`.

## Install

```sh
npm i -D stylelint-define-config
# or
pnpm add -D stylelint-define-config
# or
yarn add -D stylelint-define-config
```

## Usage

By default only stylelint's rules are supported. To activate auto-suggestions for Rules of specific plugins, you need to install the respective types for that plugin.

Plugins can either support their own types, or they could be supported by the community in the [@stylelint-types](https://www.npmjs.com/org/stylelint-types) repository.

`stylelint.config.js`
```js
// @ts-check
const defineConfig = require('stylelint-define-config')

/// <reference types="@stylelint-types/stylelint-scss" />

module.exports = defineConfig({
  extends: 'stylelint-config-standard',
  rules: {
    // ...rules
  }
})
```

## Why?

Improve your stylelint configuration experience with:

- auto-suggestions
- type checking (Use `// @ts-check` at the first line in your `stylelint.config.[c,m]js`)
- documentation

![](./static/rule.png)

![](./static/secondary.png)

## Community Plugins

- [@stylelint-types/stylelint-scss](https://github.com/stylelint-types/stylelint-scss)
- [@stylelint-types/stylelint-stylistic](https://github.com/stylelint-types/stylelint-stylistic)
- - [@stylelint-types/stylelint-codeguide](https://github.com/stylelint-types/stylelint-codeguide)
- [@stylelint-types/stylelint-scales](https://github.com/stylelint-types/stylelint-scales)
- [@stylelint-types/stylelint-order](https://github.com/stylelint-types/stylelint-order)
- [@stylelint-types/stylelint-stylus](https://github.com/stylelint-types/stylelint-stylus)

## Want to support your own plugin?

:warning: **This feature is very new and requires the support of the respective plugin owners**

Add a `declare module` to your plugin package like this:

```ts
declare module 'stylelint-define-config' {
  export interface CustomRuleOptions {
    /**
     * Require or disallow a newline after the closing brace of `@else` statements.
     *
     * @see [at-else-closing-brace-newline-after](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-closing-brace-space-after)
     */
    'scss/at-else-closing-brace-newline-after': AtElseClosingBraceNewlineAfterOptions

    // ... more Rules
  }
}
```
```ts
import { RuleConfig } from 'stylelint-define-config'

export type AtElseClosingBraceNewlineAfterOptions = RuleConfig<'always-last-in-chain', {
  disableFix?: boolean
}>
```

There are other interfaces that can be extended.

- `CustomExtends`
- `CustomPlugins`
- `CustomSyntax`

## LICENSE

[MIT](LICENSE)
