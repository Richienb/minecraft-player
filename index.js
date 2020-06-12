"use strict"

const camelcaseKeys = require("camelcase-keys")
const ky = require("ky-universal").extend({
	throwHttpErrors: false
})

module.exports = async player => {
	if (typeof player !== "string") {
		throw new TypeError(`Expected a string, got ${typeof player}`)
	}

	const result = await ky(player, {
		prefixUrl: "https://api.ashcon.app/mojang/v2/user/"
	})

	if (!result) {
		throw new Error("Server returned invalid data!")
	}

	const data = await result.json()

	if (data.error) {
		throw new Error(data.reason)
	}

	delete data.textures.raw

	return camelcaseKeys(data, { deep: true })
}
