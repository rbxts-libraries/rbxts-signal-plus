// Signal.d
// Written by Demo (R0BL0XIAN_D3M0)
// [https://www.roblox.com/users/289025524/profile]
// 09/05/2023

// Types
declare namespace Signal {
	export interface Destroyable {
		Destroy(): void;
	}

	export type Object =
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

	export type Connection = {
		Disconnect(): Callback;
	};

	export type Wait = () => (...args: Array<defined>) => void;
}

type Signal = {
	/**
		@within Signal

		@method Connect

		@param Callback -- The callback to hook to.

		@return table -- Return a table consisting of disconnect-related functions.

		Connect to the signal while awaiting on a fire to successfully load for the specified callback.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local function callback(currentString: string, ...: any?): any?
				if (((type(currentString)) == ("string")) and ((currentString) == ("NewEntry"))) then
					table.insert(Table, ...)

					print(Table)
				end
			end

			TableSignal:Connect(callback)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const Table: Array<number> = [1, 2, 3];

			const TableSignal = new Signal("TableSignal");

			function callback(currentString: string, ...args: any[]): any | undefined {
				if (typeIs(currentString, "string") && currentString === "NewEntry") {
					for (const arg of args) {
						Table.push(arg);
					}

					print(Table);
				}
			}

			TableSignal.Connect(callback);
		```
	 */
	Connect(Callback: Callback): (Callback: Callback) => Signal.Connection;

	/**
		@within Signal

		@method ConnectOnce

		@param Callback -- The callback to hook to.

		@return table -- Return a table consisting of disconnect-related functions.

		Unlike the normal connect method, this will run once.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local function callback(currentString: string, ...: any?): any?
				if (((type(currentString)) == ("string")) and ((currentString) == ("NewEntry"))) then
					table.insert(Table, ...)

					print(Table)
				end
			end

			TableSignal:ConnectOnce(callback)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const Table: Array<number> = [1, 2, 3];

			const TableSignal = new Signal("TableSignal");

			function callback(currentString: string, ...args: any[]): any | undefined {
				if (typeIs(currentString, "string") && currentString === "NewEntry") {
					for (const arg of args) {
						Table.push(arg);
					}

					print(Table);
				}
			}

			TableSignal.ConnectOnce(callback);
		```
	 */
	ConnectOnce(Callback: Callback): (Callback: Callback) => Signal.Connection;

	/**
		@within Signal

		@method ConnectParallel

		@param callback -- The callback to hook to.

		@return table -- Return a table consisting of disconnect-related functions.

		Unlike the normal connect method, this will run in parallel, resulting in zero code interference.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local function callback(currentString: string, ...: any?): any?
				if (((type(currentString)) == ("string")) and ((currentString) == ("NewEntry"))) then
					table.insert(Table, ...)

					print(Table)
				end
			end

			TableSignal:ConnectParallel(callback)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const Table: Array<number> = [1, 2, 3];

			const TableSignal = new Signal("TableSignal");

			function callback(currentString: string, ...args: any[]): any | undefined {
				if (typeIs(currentString, "string") && currentString === "NewEntry") {
					for (const arg of args) {
						Table.push(arg);
					}

					print(Table);
				}
			}

			TableSignal.ConnectParallel(callback);
		```
	 */
	ConnectParallel(Callback: Callback): (Callback: Callback) => Signal.Connection;

	/**
		@within Signal

		@method ConnectToOnClose

		@param callback -- The callback to hook to.

		@return table -- Return a table consisting of disconnect-related functions.

		Unlike the normal connect method, this will run when specified callback when the server's closing.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local function callback(currentString: string, ...: any?): any?
				if (((type(currentString)) == ("string")) and ((currentString) == ("NewEntry"))) then
					table.insert(Table, ...)

					print(Table)
				end
			end

			TableSignal:ConnectToOnClose(callback)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const Table: Array<number> = [1, 2, 3];

			const TableSignal = new Signal("TableSignal");

			function callback(currentString: string, ...args: any[]): any | undefined {
				if (typeIs(currentString, "string") && currentString === "NewEntry") {
					for (const arg of args) {
						Table.push(arg);
					}

					print(Table);
				}
			}

			TableSignal.ConnectToOnClose(callback);
		```
	 */
	ConnectToOnClose(Callback: Callback): (Callback: Callback) => Signal.Connection;

	/**
		@within Signal

		@method Wait

		@return Wait -- Return a table consisting of any retrieved values.

		Wait for the connection to be fired and then return any retrieved values.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			task.defer(function(): any?
				local args: any = {TableSignal:Wait()}

				print(table.unpack(args))
			end)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			task.defer(function () {
				const args: unknown[] = [TableSignal.Wait()]

				print(...args)
			})
		```
	 */
	Wait(): Signal.Wait;

	/**
		@within Signal

		@method Fire

		@param ...: any? -- The specified arguments to fire with.

		Fire the current signal's connections.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			TableSignal:Fire("NewEntry", 1)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			TableSignal.Fire("NewEntry", 1)
		```
	 */
	Fire(...args: Array<defined>): void;

	/**
		@within Signal

		@method FireUntil

		@param ...: any? -- The specified arguments to fire with.

		Fire the current signal's connections until the specified callback is reached.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			--// Very poor usage, though this works.
			local function Callback(): any?
				repeat
					task.wait(1)
				until (table.find(Table, 7))
			end

			TableSignal:FireUntil(Callback, "NewEntry", 1)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			function callback() {
				while (true) {
					if (Table.includes(7)) {
						break;
					}

					task.wait(1);
				}
			}

			TableSignal.FireUntil(callback, "NewEntry", 1);
		```
	 */
	FireUntil(Callback: Callback, ...args: Array<defined>): void;

	/**
		@within Signal

		@method OnInvoke

		@param callback -- The specified callback function.

		Create a callback function that'd be activated on invoke, retrieving the function's callback.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local function callback(currentString: string): number
				if (((type(currentString)) == ("string")) and ((currentString) == ("RetrieveTotalCount"))) then
					return (Table[table.getn(Table)]) :: table
				end
			end

			TableSignal:OnInvoke(callback)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			function callback(currentString: string, ...args: any[]): number | undefined {
				if (typeIs(currentString, "string") && currentString === "RetrieveTotalCount") {
					const lastElement = Table[Table.size() - 1];
					return lastElement
				}
			}

			TableSignal.OnInvoke(callback);
		```
	 */
	OnInvoke(Callback: Callback): void;

	/**
		@within Signal

		@method Invoke

		@param ...any -- The specified arguments to invoke with.

		@return Callback -- Return the callback associated with "OnInvoke."

		Wait until the "OnInvoke" method exists and then invoke with the necessary arguments.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			TableSignal:Invoke("RetrieveTotal")
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			TableSignal.Invoke("RetrieveTotal")
		```
	 */
	Invoke(...args: Array<defined>): (...args: Array<defined>) => Callback;

	/**
		@within Signal

		@method Destroy

		Destroy and cleanup a Signal (making it unusable).

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			TableSignal:Destroy()
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			TableSignal.Destroy();
		```
	*/
	Destroy(): void;
};

interface SignalConstructor {
	readonly ClassName: "Signal";

	/**
		@within Signal

		@param Object -- The object to cleanse.

		@return table -- Return the cleanser class's metatable.

		Index a new Siugnal object.

		### Luau:
		```lua
			--// Types
			type table = { [any]: any }

			--// Services
			local ReplicatedStorage: ReplicatedStorage = game:GetService("ReplicatedStorage")
			local Workspace: Workspace = game:GetService("Workspace")

			--// Modules
			local Signal: table = require(ReplicatedStorage:FindFirstChild("Signal", true))

			--// Functions
			local Table: table = { 1, 2, 3 }

			local TableSignal: table = Signal.New("TableSignal")
		```

		### TypeScript:
		```ts
			// Modules
			import { Signal } from "@rbxts/signal-plus";

			// Functions
			const Table: Array<number> = [1, 2, 3];

			const TableSignal = new Signal("TableSignal");
		```
	 */
	new <T extends string | undefined>(
		signalName?: T | string & defined,
		listener?: T | string | defined,
	): Signal;

	/**
		@within Signal

		@function Is

		@param Object -- The signal object.

		@return boolean -- Return whether or not the item's a valid Signal.

		Returns whether or not the specified class is a valid Signal.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			print(Signal.Is(Signal.new())) -- --> true
			print(Signal.Is(nil)) -- --> false
		```

		### TypeScript:
		```ts
			// Functions
			--// Placeholder code.
			print(Signal.Is(new Signal<{}>())) // --> true
			print(Signal.Is(undefined)) // --> false
		```
	 */
	Is<T extends void | object>(
		object?: T extends Signal.Object | Signal.Destroyable | true ? RBXScriptConnection : T | defined,
	): boolean;
}

declare const Signal: SignalConstructor;

export { Signal };
