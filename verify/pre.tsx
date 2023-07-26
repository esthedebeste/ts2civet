// @ts-nocheck
// eslint-disable
// the https://civet.dev/cheatsheet/ typescript side in one big file to test civet generation
const a = 10
let b = 10
let c: number | string = 0
let d: boolean
let v: any
let sos
let square
sos = 0
for (const item of iterable) {
	square = item * item
	sos += square
}
let sos = 0
for (const item of iterable) {
	let square = item * item
	sos += square
}
let ref
if ((ref = regex.exec(string))) {
	const match = ref
	console.log(match[1], match[2])
}
let ref
if ((ref = /^(.*\/)?([^/]*)$/.exec(file))) {
	const [, dir, base] = ref
	console.log(dir, base)
}
let ref
if ((ref = getLocation())) {
	const { x, y } = ref
	console.log(`At ${x}, ${y}`)
} else {
	console.log("Not anywhere")
}
let node = linkedList.head
let ref
while ((ref = node)) {
	const { data, next } = ref
	console.log(data)
	node = next
}
const person = { name: "Henry", age: 4 }
const obj = {
	a: 1,
	b: 2,
	c: {
		x: "pretty",
		y: "cool",
	},
}
$: document.title = title
;({ $: "dollar" })
;({ $: "dollar" })
const another = {
	name: person.name,
	x: obj?.c?.x,
}
const computed = { foo: foo(), bar: bar() }
let ref = x + y
const named = {
	[ref]: lookup[ref],
}
const templated = {
	[`${prefix}${suffix}`]: result,
}
point = { x: data.x, y: data.y }
point = { x: data.x, y: data.y }
;({ x: point.x, y: point.y } = data)
const complex = { x: obj.a, y: obj.b.c()?.y }
const merged = { ...data.global, ...data.user }
;({ a: data.a, b: data.b, ...data.rest } = result)
const config = {
	debug: true,
	live: false,
	verbose: false,
}
const p = {
	name: "Mary",
	say(msg) {
		const _RET = console.log(this.name, "says", msg)
	},
	setName(name1) {
		this.name = name1
	},
	get NAME() {
		const _RET = this.name.toUpperCase()
	},
}
p.say(p.NAME)
json["long property"]
json[`${movie} name`]
matrix[0][0]
array.at(-1)
const rotate = [c, -s, s, c]
func.apply(this, [arg1, arg2])
const people = [
	{
		name: "Alice",
		id: 7,
	},
	{
		name: "Bob",
		id: 9,
	},
]
;([...head] = [1, 2, 3, 4, 5]), ([last] = head.splice(-1))
;({ a, b, ...rest } = { a: 7, b: 8, x: 0, y: 1 })
function justDoIt(a, ...args) {
	let [cb] = args.splice(-1)
	const _RET = cb.apply(a, args)
}
;([first, ...ref] = array), ([last] = ref.splice(-1))
const letters = ["a", "b", "c", "d", "e", "f"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const indices = ((s, e) => {
	let step = e > s ? 1 : -1
	const _RET = Array.from({ length: Math.abs(e - s) }, (_, i) => s + i * step)
})(0, array.length)
const start = numbers.slice(0, 1 + 2 || 1 / 0)
const mid = numbers.slice(3, -2)
const end = numbers.slice(-2)
numbers.splice(1, -1 - 1, ...[])
console.log("Hello,\nworld!")
console.log(`<div>
  Civet
</div>`)
console.log(`<div>
  Civet ${version}
</div>`)
console.log(`<div>
  Civet ${version}
</div>`)
const center = min + length / 2
const name = user?.name ?? defaultName
typeof x === "string" && (x += "!")
result! as string | number
a + (b = c)
;(count[key] ??= 0), count[key]++
;(count[key] ??= 0), (count[key] += 1)
++count, (count *= 2)
a === b
a !== b
a && b
a || b
!(a in b)
!(a instanceof b)
a != null
array.includes(item)
!array.includes(item)
string.includes(substring)
container.includes(item1) && !container.includes(item2) // Unicode
a &&= b
a ||= b
a ??= b
obj.key ??= "civet"
obj?.[key]
fun?.(arg)
a < b && b <= c
a <= b && b <= c // Unicode
a == b && b === c && c != d && d !== e
a === b && b !== c
a instanceof b && !(b instanceof c)
a instanceof b
!(a instanceof b)
a instanceof b && !(b instanceof c)
typeof a === "string"
typeof a !== "string"
typeof a === "number"
typeof a !== "number"
/// builtin function binops removed
// let xor: (a: unknown, b: unknown) => boolean = (a, b) => (a ? !b && a : b)
// xor(a, b)
// xor(a, b)
// a = xor(a, b)
// a = xor(a, b)
// let xnor: (a: unknown, b: unknown) => boolean = (a, b) => (a ? b : !b || a)
// xnor(a, b)
// xnor(a, b)
// a = xnor(a, b)
// a = xnor(a, b)
// let modulo: (a: number, b: number) => number = (a, b) => ((a % b) + b) % b
// let a = -3
// let b = 5
// let rem = a % b
// let mod = modulo(a, b)
// console.log(rem, mod)
// https://github.com/DanielXMoore/Civet/issues/579
// let is: {
// 	<B, A extends B>(a: A, b: B): b is A
// 	<A, B>(a: A, b: B): a is A & B
// } = Object.is as any
// is(a, b)
// !is(a, b)
console.log(Object.keys(data))
;(x.length + 1).toString()
const _RET =
	(await (await fetch(url)).json()(response => console.log(response.status))(
		(ref = await fetch(url))
	),
	(json => console.log("json:", json))((ref = await ref.json())),
	callback(ref))
function abort() {
	const _RET = process.exit(1)
}
function circle(degrees: number): {
	x: number
	y: number
} {
	const radians = (degrees * Math.PI) / 180
	const _RET = {
		x: Math.cos(radians),
		y: Math.sin(radians),
	}
}
function abort(): void {
	process.exit(1)
}
function abort() {
	process.exit(1)
}
function f() {
	{
		const _RET = console.log("Named")
	}
}
function f(x) {
	{
		const _RET = console.log(x)
	}
}
function add(a: string, b: string): string
function add(a: number, b: number): number {
	const _RET = a + b
}
function add(a: number, b: number) {
	const _RET = a + b
}
function curryAdd(a: number) {
	const _RET = (b: number) => a + b
}
function sum(list: number[]) {
	let ret = 0
	for (const item of list) {
		ret += item
	}
	const _RET = ret
}
function search<T>(list: T[]): T | undefined {
	let ret: T | undefined
	if (!list) {
		const _RET = ret
	}
	for (const item of list) {
		if (match(item)) {
			ret = item
		}
	}
	if (ret) {
		ret++
	}
	list.destroy()
	const _RET = ret
}
function calls<T, R>(t: T, f: (this: T) => R): R {
	const _RET = f.call(t)
}
import type { Civet } from "animals"
import { contains } from "bar"
import type { JSX } from "solid-js"
export function has(x, y) {
	const _RET = contains(y, x)
}
switch (dir) {
	case ">": {
		civet.x++
		break
	}
	case "<": {
		civet.x--
		if (civet.x < 0) {
			civet.x = 0
		}
		break
	}
	case "BLOCKLESSCASE":
		console.log(":p")

	default: {
		civet.waiting += 5
	}
}
const getX = (civet: Civet, dir: Dir) => {
	switch (dir) {
		case ">": {
			const _RET = civet.x + 3
		}
		case "<": {
			const _RET = civet.x - 1
		}
		case "^": {
			const _RET = civet.x + 0.3
		}
	}
}
if (s === "") {
	console.log("nothing")
} else if (typeof s === "string" && /\s+/.test(s)) {
	console.log("whitespace")
} else if (s === "hi") {
	console.log("greeting")
}
if (Array.isArray(a) && a.length === 0) {
	console.log("empty")
} else if (Array.isArray(a) && a.length === 1) {
	const [item] = a
	console.log("one", item)
} else if (Array.isArray(a) && a.length >= 2) {
	const [first, ...middle] = a,
		[last] = middle.splice(-1)
	console.log("multiple", first, "...", last)
} else {
	console.log("not array")
}
if (typeof x === "object" && x != null && "type" in x && x.type === "text" && "content" in x) {
	const { type, content } = x
	console.log(`"${content}"`)
} else if (typeof x === "object" && x != null && "type" in x) {
	const { type, ...rest } = x
	console.log(`unknown type ${type}`)
} else {
	console.log("unknown")
}
if (
	Array.isArray(x) &&
	x.length >= 1 &&
	typeof x[0] === "object" &&
	x[0] != null &&
	"type" in x[0] &&
	x[0].type === "text" &&
	"content" in x[0] &&
	typeof x[0].content === "string" &&
	/\s+/.test(x[0].content)
) {
	const [{ type, content }, ...rest] = x
	console.log("leading whitespace")
} else if (
	Array.isArray(x) &&
	x.length >= 1 &&
	typeof x[0] === "object" &&
	x[0] != null &&
	"type" in x[0] &&
	x[0].type === "text" &&
	"content" in x[0]
) {
	const [{ type, content }, ...rest] = x
	console.log("leading text:", content)
} else if (
	Array.isArray(x) &&
	x.length >= 1 &&
	typeof x[0] === "object" &&
	x[0] != null &&
	"type" in x[0]
) {
	const [{ type }, ...rest] = x
	console.log("leading type:", type)
}
if (x < 0) {
	console.log("it's negative")
} else if (x > 0) {
	console.log("it's positive")
} else if (x === 0) {
	console.log("it's zero")
} else {
	console.log("it's something else")
}
if (x % 15 === 0) {
	console.log("fizzbuzz")
} else if (x % 3 === 0) {
	console.log("fizz")
} else if (x % 5 === 0) {
	console.log("buzz")
} else {
	console.log(x)
}
if (typeof e === "object" && e != null && "type" in e && "key" in e) {
	const { type, key: eventKey } = e
	// const _RET = [type, eventKey]
}
if (
	Array.isArray(x) &&
	x.length === 2 &&
	typeof x[0] === "object" &&
	x[0] != null &&
	"type" in x[0] &&
	typeof x[1] === "object" &&
	x[1] != null &&
	"type" in x[1]
) {
	const [{ type: type1 }, { type: type2 }] = x
	const type = [type1, type2]
	type
}
const squares = (() => {
	const results = []
	for (const item of list) {
		results.push(item * item)
	}
	const _RET = results
})()
function parities(list: number[]): string[] {
	const results = []
	for (const item of list) {
		if (item % 2 === 0) {
			results.push("even")
		} else {
			results.push("odd")
		}
	}
	const _RET = results
}
const x = (() => {
	{
		const y = f()
		const _RET = y * y
	}
})()
class Civet {
	static {
		try {
			this.colors = getCivetColors()
		} catch (e) {}
	}
}
type ID = number | string
type Point = { x: number; y: number }
type Point = {
	x: number
	y: number
}
interface Point {
	x: number
	y: number
}
interface Point3D extends Point {
	z: number
}
interface Signal {
	listen(callback: () => void): void
}
interface Node<T> {
	value: T
	next: Node<T>
}
enum Direction {
	Up,
	Down,
	Left = 2 * Down,
	Right = 2 * Left,
}
export { a, b, c } from "./cool.js"
<>
	<div foo={foo}>Civet</div>
	<div name={props.name}>Civet</div>
	<div data={data()}>Civet</div>
</>
;<>
	<div foo>Civet</div>
	<div data={data()}>Civet</div>
	<div name={this.name}>Civet</div>
	<div onClick={this.onClick.bind(this)}>Civet</div>
	<div onClick={modal.onClick.bind(modal)}>Civet</div>
	<div name={props.name} value={props.value}>
		Civet
	</div>
	<div {...foo}>Civet</div>
</>
;<>
	<div {...{ [expr]: value }}>Civet</div>
	<div {...{ [`data-${key}`]: value }}>Civet</div>
</>
;<div>
	{/* Comment */}
	Civet
</div>
const _RET = (
	<>
		<div>Hello {name}!</div>
		{svg}
	</>
)
const _RET = (
	<>
		<h1>Hello World!</h1>
		<div>Body</div>
	</>
)
;[<h1>Hello World!</h1>, <div>Body</div>]
;<For each={items()}>
	{item => {
		const _RET = <li>{item}</li>
	}}
</For>
type IntrinsicElements<K extends keyof JSX.IntrinsicElements> =
	JSX.IntrinsicElements[K] extends JSX.DOMAttributes<infer T> ? T : unknown
const link = (<a href="https://civet.dev/">Civet</a>) as any as IntrinsicElements<"a">
let key, item, index, value
let hasProp: <T>(this: T, prop: keyof T) => boolean = {}.hasOwnProperty as any
let len = array.length // ts2civet edit
for (let i = 0; i < len; i++) {
	item = array[(index = i)]
	console.log(item, index)
}
for (key in object) {
	value = object[key]
	console.log(key, value)
}
for (key in object) {
	if (!hasProp.call(object, key)) continue
	value = object[key]
	console.log(key, value)
}
for (item of iterable) {
	console.log(item)
}
console.log(`Hello ${name}!`)
x === y && y !== z
x !== y
!(x == y)
!x == y
x ?? y
let indexOf: <T>(this: T[], searchElement: T) => boolean = [].indexOf as any
indexOf.call(array, item) >= 0
key in object
X.prototype
X.prototype.a
true
false
true
false
// one-line comment
