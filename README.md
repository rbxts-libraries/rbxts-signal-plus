# Signal Plus

Signal (plus) is a fairly personalized, all-in-one, and lightweight implementation served for communication between scripts across the same environment (client -> client and server -> server).

## Installation

### 📦 — NPM:

```
npm i @rbxts/signal-plus
```

### 🧶 — Yarn:

```
yarn add @rbxts/signal-plus
```

### 📀 — pnPM:

```
pnpm add @rbxts/signal-plus
```

## Signal API

### Types

```ts
interface Destroyable {
	Destroy(): void;
}

type Object =
	| never
	| undefined
	| ((this: defined) => void)
	| ((_: defined) => void)
	| ExtractKeys<defined, () => void>
	| thread
	| RBXScriptConnection
	| Signal
	| Signal.Destroyable
	| Signal.Connection;
```

### Constructor

```ts
const signal = new Signal<string>("Local_Signal");
```

### `Signal.Is`

```ts
public Is(
		object?: T extends Signal.Object | Signal.Destroyable | true ? RBXScriptConnection : T | defined,
	): boolean;
```

Returns whether or not the specified class is a valid Signal reference.

### `Signal.Connect`

```ts
public Connect(Callback: Callback): (Callback: Callback);
```

Connect to the signal while awaiting on a fire to successfully load for the specified callback.

### `Signal.ConnectOnce`

```ts
public ConnectOnce(Callback: Callback): (Callback: Callback);
```

Unlike the normal connect method, this will run once.

### `Signal.ConnectParallel`

```ts
public ConnectParallel(Callback: Callback): (Callback: Callback);
```

Unlike the normal connect method, this will run in parallel, resulting in zero code interference.

### `Signal.ConnectToOnClose`

```ts
ConnectToOnClose(Callback: Callback): (Callback: Callback);
```

Unlike the normal connect method, this will run when specified callback when the server's closing.

### `Signal.Wait`

```ts
public Wait(Callback: Callback): Signal.Wait;
```

Wait for the connection to be fired and then return any retrieved values.

### `Signal.Fire`

```ts
public Fire(...args: Array<defined>): void;
```

Fire the current signal's connections.

### `Signal.FireUntil`

```ts
FireUntil(Callback: Callback, ...args: Array<defined>): void;
```

Fire the current signal's connections until the specified callback is reached.

### `Signal.OnInvoke`

```ts
OnInvoke(Callback: Callback): void;
```

Create a callback function that'd be activated on invoke, retrieving the function's callback.

### `Signal.Invoke`

```ts
Invoke(...args: Array<defined>): (...args: Array<defined>);
```

Wait until the "OnInvoke" method exists and then invoke with the necessary arguments.

### `Signal.Destroy`

```ts
public Destroy(): void;
```

Destroy and cleanup a Signal (making it unusable).

## Example

```ts
// Modules
import { Signal } from "@rbxts/signal-plus";

// Functions
const Table: Array<number> = [1, 2, 3];

const TableSignal = new Signal<string>("TableSignal");

function callback(currentString: string, ...args: any[]): any | undefined {
	if (typeIs(currentString, "string") && currentString === "NewEntry") {
		for (const arg of args) {
			Table.push(arg);
		}

		print(Table);
	}
}

TableSignal.ConnectOnce(callback);

function callback() {
	while (true) {
		if (Table.includes(7)) {
			break;
		}

		task.wait(1);
	}
}

TableSignal.FireUntil(callback, "NewEntry", 1);

TableSignal.Destroy();
```
