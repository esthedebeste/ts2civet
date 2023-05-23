// @ts-nocheck

import { hello } from "./hello.ts"; // should be transformed

const hi = await import("./hi.ts") // transform `const`, not `import()`
let hey = 3

tag: console.log("tagged!") // transform to `:tag`
$: {
	console.log("svelty!")
}

const arrow = a => a + 1 // transform to `(a) => a + 1`
const arrowWithParens = (a) => a + 1
const arrowDistantParens = ( a ) => a + 1

console.log(hi, hey, hello)

@Object.seal // transform to `@@Object.seal`
class Civet {
	static name = "Civet"
	@description(translate("Caffeine time!")) // transform to `@@description`
	drink() {
		return this.fetch(this.coffeeCup)
	}
}

const jsx = <div>hello</div> // don't transform, but trigger "civet coffeeJSX" flag