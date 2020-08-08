declare namespace minecraftPlayer {
	export interface FirstNameChangeData {
		/** The player's current username. */
		username: string
	}

	export interface NameChangeData {
		/** The player's past username. */
		username: string

		/** A timestamp of when the skin was set. */
		changedAt: string
	}

	export interface Skin {
		/** A url which resolves as the player's skin. */
		url: string

		/** The player's skin as a base64 encoded png. */
		data: string
	}

	export interface Textures {
		/** Whether the player has set a custom skin. */
		custom: boolean

		/** Whether the skin is using the slim (Alex) model. */
		slim: boolean

		/** The skin data. */
		skin: Skin
	}

	export interface ReturnValue {
		/** The player's UUID. */
		uuid: string

		/** The player's username. */
		username: string

		/** The player's username history. */
		usernameHistory: [FirstNameChangeData, ...NameChangeData[]]

		/** The player's skin information. */
		textures: Textures

		/** A timestamp of when the player was created. */
		createdAt: string
	}
}

/**
Minecraft player information.
@param player Username or UUID of the player.
@example
```
const minecraftPlayer = require("minecraft-player");

(async () => {
	const { uuid } = await minecraftPlayer("Notch");

	console.log(uuid);
	//=> "c7da90d5-6a05-4217-b94a-7d427cbbcad8"
})();
```
*/
declare function minecraftPlayer(player: string): Promise<minecraftPlayer.ReturnValue>

export = minecraftPlayer
