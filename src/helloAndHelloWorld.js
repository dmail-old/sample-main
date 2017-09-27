import { helloWorld } from "@dmail/sample-dependency"
import { hello } from "@dmail/sample-common-dependency"

export const used = (a = 10) => a

export const helloAndHelloWorld = `${hello} and ${helloWorld}`

