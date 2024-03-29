# ts2civet

Converts [TypeScript](https://www.typescriptlang.org/) code to _concise_ [civet](https://civet.dev/). Demo at [ts2civet.esthe.win](https://ts2civet.esthe.win/)

***<span style="color: red;">WIP! Use carefully and double-check output.</span>***

## CLI

```bash
npx ts2civet --help
```

Examples:

```bash
$ ts2civet src/**/*.ts
> Transformed src/a.ts to src/a.civet
> Transformed src/b.ts to src/b.civet
> Transformed src/folder/file.ts to src/folder/file.civet

$ ts2civet src/index.ts -o-
> console.log "Hello, world!"

$ ts2civet src/a.ts -o src/civety-a.civet src/b.ts -o. src/import.ts -o-
> Transformed src/a.ts to src/civety-a.civet
> Transformed src/b.ts to src/b.civet
> console.log "Hello, world!"
```

## API

```ts
import { transform } from "ts2civet"
const code = transform('console.log("Hello, world!")', "./code.ts") // console.log "Hello, world!"
```
