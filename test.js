const test = require("ava")
const minecraftPlayer = require(".")

test("main", async t => {
	const { uuid } = await minecraftPlayer("Notch")

	t.is(uuid, "069a79f4-44e9-4726-a5be-fca90e38aaf5")
})
