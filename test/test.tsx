// @ts-nocheck
// TODO: proper testing ;p

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

 // transform object literals to remove braces and commas before newlines
const braceless = {
	foo: "bar",
	$: "foo",     
	thingy: "thingy",    // trailing comment. $: also has trailing whitespace fyi.
	"hi": 2,
	arrow: () => {
		return "haii"
	}
}

const keepBracesAndFancify = {
	hey,
	method() {
		return "hello"
	},
	name: person.name,
	x: obj?.c?.x,
	foo: foo(),
	[ x + y ]: lookup[x + y],
	flagT: true, flagF: false,
}

implicit(call(1), call(2, 3)) // transform to `implicit call(1), call(2, 3)`
implicit(call(3))
keepExplicit() // don't transform
keepExplicit(call(4)).thingy // don't transform