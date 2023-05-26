# ts2civet

Converts [TypeScript](https://www.typescriptlang.org/) code to [civet](https://civet.dev/).

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

$ ts2civet src/index.ts -t decl -t import
> Transformed src/index.ts to src/index.civet

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
const code = transform('console.log("Hello, world!")', "./code.ts", {
	transform: "all",
}) // console.log "Hello, world!"
```
