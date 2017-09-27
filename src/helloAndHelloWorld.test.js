import { helloAndHelloWorld } from "./helloAndHelloWorld.js"

const test = ({ pass, fail }) => {
	if (helloAndHelloWorld === "hello and hello world") {
		return pass("hello world as expected")
	}
	return fail("expecting hello world")
}
export default test
