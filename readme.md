# ts2civet


Converts [TypeScript](https://www.typescriptlang.org/) code to [civet](https://civet.dev/).
## <span style="color: red;">WIP fork: unstable, unusable, unfinished, untested, etc.</span>

This branch switches from parsing & text modifications to a full re-emit of the AST.  
This makes supporting new features more difficult, but it allows much more in-depth transformations.  

also adds some (unused) testing infrastructure.

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
