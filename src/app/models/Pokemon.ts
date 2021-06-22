export interface Pokemon {
	readonly name : string;
	readonly types : [string, string];
	readonly abilities : [string, string];
	readonly weight : number;
	readonly spriteUrl : string;

}

const pokemon: Pokemon = {
	name: "undefined",
	types: ["undefined", "undefined"],
	abilities: ["undefined", "undefined"],
	weight: 0,
	spriteUrl: "http://via.placeholder.com/96",
};
