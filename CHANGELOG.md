# [1.7.0](https://github.com/stylelint-types/stylelint-define-config/compare/v1.6.0...v1.7.0) (2024-10-29)


### Features

* add `formatter` configuration property ([4d9584b](https://github.com/stylelint-types/stylelint-define-config/commit/4d9584b514b8ad3417f83db78243a3d4483dd1f2))
* add support for `string | RegExp` to `ignoreValues` option of `value-no-vendor-prefix` ([c0ed9fc](https://github.com/stylelint-types/stylelint-define-config/commit/c0ed9fc11d6a20b4ea32f9869dfc115dc0cf60db))
* add support for `string` to `ignoreLonghands` option of `declaration-block-no-redundant-longhand-properties` ([c975bf4](https://github.com/stylelint-types/stylelint-define-config/commit/c975bf4b188adcf5773041369de8937e0ad14637))
* update stylelint to `16.10.0` ([0ab1ac4](https://github.com/stylelint-types/stylelint-define-config/commit/0ab1ac452d11b0da060c184b20e0ea340a1067f6))



# [1.6.0](https://github.com/stylelint-types/stylelint-define-config/compare/v1.5.0...v1.6.0) (2024-08-18)


### Features

* add `url` secondary option ([5d0c69f](https://github.com/stylelint-types/stylelint-define-config/commit/5d0c69f8f338e8fd2deb58348047dd362923f4c5))
* update stylelint to `v16.8.x` ([61de38c](https://github.com/stylelint-types/stylelint-define-config/commit/61de38c52e28099c87e015d5824a41c8cc2ec900))



# [1.5.0](https://github.com/stylelint-types/stylelint-define-config/compare/v1.4.0...v1.5.0) (2024-5-3)


### Features

* regex support to `ignoreValues` for `value-no-vendor-prefix` ([d9b079e](https://github.com/stylelint-types/stylelint-define-config/commit/d9b079e1c6047a464c8017644e878209e602a3de))



# [1.4.0](https://github.com/stylelint-types/stylelint-define-config/compare/v1.3.0...v1.4.0) (2024-4-28)


### Features

* add `ignore: ["keyframe-selectors"]` to `rule-selector-property-disallowed-list` ([47ee8f6](https://github.com/stylelint-types/stylelint-define-config/commit/47ee8f61ed60e2f78c6b8f28901bf1d2c28f2d05))
* add `ignoreLonghands: []` to `declaration-block-no-redundant-longhand-properties` ([94a2924](https://github.com/stylelint-types/stylelint-define-config/commit/94a292409ecd9ff979f89c9c8fb31d83560a886b))
* add `no-unknown-custom-media` ([b78279f](https://github.com/stylelint-types/stylelint-define-config/commit/b78279fe272045a1fb52d4623b3c1b5a44095009))



# [1.3.0](https://github.com/stylelint-types/stylelint-define-config/compare/v1.2.0...v1.3.0) (2024-4-9)


### Features

* add `ignoreSelectors: []` to `selector-max-compound-selectors` ([82a1148](https://github.com/stylelint-types/stylelint-define-config/commit/82a1148892c7dc5d03363ea5278e3aabe5352b0a))


### Performance Improvements

* update `stylelint` to `v16.3.1` ([944cede](https://github.com/stylelint-types/stylelint-define-config/commit/944cedea04b14c0a8e32df16d3010be1255ea9e9))



# [1.2.0](https://github.com/stylelint-types/stylelint-define-config/compare/v1.1.0...v1.2.0) (2024-2-20)


### Features

* ` ignore: ["keyframe-selectors"]` to `selector-disallowed-list` ([62c8a1f](https://github.com/stylelint-types/stylelint-define-config/commit/62c8a1f68dc9f53b1f05942525ae60193a345dc7))
* `checkContextFunctionalPseudoClasses: []` to `selector-max-id` ([775da81](https://github.com/stylelint-types/stylelint-define-config/commit/775da81bd54a64ee5356287c540d4f8f1df62c0d))
* `media-query-no-invalid` specific problem messages ([c7cabbf](https://github.com/stylelint-types/stylelint-define-config/commit/c7cabbf287ec19bd3cc862fecc33536d9b92d054))
* add `KebabCaseStandardPropertiesMap` type ([eb32e76](https://github.com/stylelint-types/stylelint-define-config/commit/eb32e76a8adc02187bb9901666abad602cb8b1f8))
* add `lightness-notation` rule ([22992bb](https://github.com/stylelint-types/stylelint-define-config/commit/22992bb541b60e7db61fea20ab8215934f0bb302))
* add viewport unit types ([4b844cc](https://github.com/stylelint-types/stylelint-define-config/commit/4b844cc451f7266578fc51d9516d663cfc6bebf7))
* rename `@stylistic/stylelint-plugin` ([5c80fb7](https://github.com/stylelint-types/stylelint-define-config/commit/5c80fb7a533dde7eb9e967d3ecc905b832028b07))


### Performance Improvements

* bump non-major deps to latest ([60fccd1](https://github.com/stylelint-types/stylelint-define-config/commit/60fccd1abd32e7f6690582704eb0136bede5a32e))



# [1.1.0](https://github.com/stylelint-types/stylelint-define-config/compare/v1.0.2...v1.1.0) (2023-12-16)


### Features

* add rule desc ([afb544e](https://github.com/stylelint-types/stylelint-define-config/commit/afb544e94f9d04fd4c1ba647a65b58729827b71b))



## [1.0.2](https://github.com/stylelint-types/stylelint-define-config/compare/v1.0.1...v1.0.2) (2023-12-15)


### Performance Improvements

* export Rules types ([9be13fa](https://github.com/stylelint-types/stylelint-define-config/commit/9be13fae6912456b5af3f5cf865b98040303848a))



## [1.0.1](https://github.com/stylelint-types/stylelint-define-config/compare/v1.0.0...v1.0.1) (2023-12-12)


### Performance Improvements

* update `RuleConfig` ([484b6bd](https://github.com/stylelint-types/stylelint-define-config/commit/484b6bd4b72319a012cd50e6d6be8192559ee863))



# 1.0.0 (2023-12-11)


### Features

* add `alpha-value-notation` rule ([249d57e](https://github.com/stylelint-types/stylelint-define-config/commit/249d57e50ae1e99528408db8952d552ab4c1580b))
* add `CustomSyntax` ([053eef1](https://github.com/stylelint-types/stylelint-define-config/commit/053eef1e4bc3d795a71542de0589d43aa0d2f56b))
* add `defineConfig` ([9be8471](https://github.com/stylelint-types/stylelint-define-config/commit/9be8471e63b4f67f0aac64518f8ec2d55160c195))
* add `extends` types ([c712bf4](https://github.com/stylelint-types/stylelint-define-config/commit/c712bf47d36a3f746fa89c3ad6d1909af8471852))
* add `LiteralUnion` types ([74dcca3](https://github.com/stylelint-types/stylelint-define-config/commit/74dcca3172bc35e61bba0da779be70fa7f420c20))
* add `media` types ([a9a9284](https://github.com/stylelint-types/stylelint-define-config/commit/a9a9284fcf4061304617bea70fbf35a779a2db53))
* add `plugins` types ([f106ded](https://github.com/stylelint-types/stylelint-define-config/commit/f106ded60f9fa4dada3e3d65423c6a9c09bb4592))
* add `StylelintConfig` ([4835c57](https://github.com/stylelint-types/stylelint-define-config/commit/4835c573973e70625ecf7ef78a53099450c6a58c))
* add `unit` type ([da19aac](https://github.com/stylelint-types/stylelint-define-config/commit/da19aac7fef6e54d492802e1dedb838dcd28f19b))
* add `utils` ([ff621ca](https://github.com/stylelint-types/stylelint-define-config/commit/ff621ca9d122a8dcb7ae61fd3621227a8cf8b943))
* add 50+ rules ([0541989](https://github.com/stylelint-types/stylelint-define-config/commit/0541989b7c4b6319255e6fbeeed1bf97c6535016))
* add 70+ rules ([ffca7ce](https://github.com/stylelint-types/stylelint-define-config/commit/ffca7ce0a6baea5d898a76df6adb35bd87e78523))
* add at-rule types ([ee61f6e](https://github.com/stylelint-types/stylelint-define-config/commit/ee61f6e8a11b41df2faf66835988109816c66683))
* add css `function` types ([aad45e6](https://github.com/stylelint-types/stylelint-define-config/commit/aad45e67120e551805c6f304f08fe8e39142cfe5))
* add css `property` types ([bef297c](https://github.com/stylelint-types/stylelint-define-config/commit/bef297c5202ea917f2457adcd45cbad617218d50))
* add entry files ([f96169e](https://github.com/stylelint-types/stylelint-define-config/commit/f96169e54bbfc185188eeb4918f070a50b8f5ec9))
* add rule-config ([2ff553f](https://github.com/stylelint-types/stylelint-define-config/commit/2ff553f345e383a17ea879b6097aaa80cfaa28ff))
* add rules jsdoc ([27b9482](https://github.com/stylelint-types/stylelint-define-config/commit/27b9482f333b1346cc76413bfbba86356b093119))
* add selector type ([96ed4db](https://github.com/stylelint-types/stylelint-define-config/commit/96ed4db5e7016007a5441fad1dd9c1f69df798a9))
* export all rules options ([0ee1971](https://github.com/stylelint-types/stylelint-define-config/commit/0ee1971900899cd5d3cd2fbdf992ba7b789a2c81))
* support `CustomRuleOptions` ([9db75db](https://github.com/stylelint-types/stylelint-define-config/commit/9db75db28ef732fe6e4c1008bc4b182a1c320c57))
* update `alpha-value-notation` rule ([a1d5f5a](https://github.com/stylelint-types/stylelint-define-config/commit/a1d5f5a8a7079fb5e2c114df02d1e39c206277fc))



