# minecraft-player [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/minecraft-player/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/minecraft-player)

Minecraft player information.

[![NPM Badge](https://nodei.co/npm/minecraft-player.png)](https://npmjs.com/package/minecraft-player)

## Install

```sh
npm install minecraft-player
```

## Usage

```js
const minecraftPlayer = require("minecraft-player");

(async () => {
	const { uuid } = await minecraftPlayer("Notch");

	console.log(uuid);
	//=> "c7da90d5-6a05-4217-b94a-7d427cbbcad8"
})();
```

## API

### minecraftPlayer(player)

#### player

Type: `string`

Username or UUID of the player.

### Player data

#### uuid

Type: `string`

The player's UUID.

#### username

Type: `string`

The player's username.

#### usernameHistory

Type: `array of objects`

The player's username history in order from oldest to newest.

##### username

Type: `string`

The player's username. 

##### changedAt

*Doesn't exist for the oldest username.*

Type: `string`

A timestamp of when the skin was set.

#### textures

Type: `object`

The player's skin information.

##### custom

Type: `boolean`

Whether the player has set a custom skin.

##### slim

Type: `boolean`

Whether the skin is using the slim (Alex) model.

##### skin.url

Type: `string`

A url which resolves as the player's skin.

##### skin.data

Type: `string`

The player's skin as a base64 encoded png.

#### createdAt

Type: `string`

A timestamp of when the player was created.
