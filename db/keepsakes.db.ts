import { mapKeepsakeToCodex } from "lib/utils";
import { CodexData, KeepsakeData } from "models/types";

const keepsakeData: Record<string, KeepsakeData> = {
	silverWheel: {
		name: 'Silver Wheel',
		key: 'silver-wheel',
		flavor: 'From Hecate'
	},

	knuckleBones: {
		name: 'Knuckle Bones',
		key: 'knuckle-bones',
		flavor: 'From Odysseus'
	},

	luckierTooth: {
		name: 'Luckier Tooth',
		key: 'luckier-tooth',
		flavor: 'From Schelemeus'
	},

	ghostOnion: {
		name: 'Ghost Onion',
		key: 'ghost-onion',
		flavor: 'From Dora'
	},

	evilEye: {
		name: 'Evil Eye',
		key: 'evil-eye',
		flavor: 'From Nemesis'
	},

	engravedPin: {
		name: 'Engraved Pin',
		key: 'engraved-pin',
		flavor: 'From Moros'
	},

	discordantBell: {
		name: 'Discordant Bell',
		key: 'discordant-bell',
		flavor: 'From Eris'
	},

	goldPurse: {
		name: 'Gold Purse',
		key: 'gold-purse',
		flavor: 'From Charon'
	},

	metallicDroplet: {
		name: 'Metallic Droplet',
		key: 'metallic-droplet',
		flavor: 'From Hermes'
	},

	whiteAntler: {
		name: 'White Antler',
		key: 'white-antler',
		flavor: 'From Artemis'
	},

	moonBeam: {
		name: 'Moon Beam',
		key: 'moon-beam',
		flavor: 'From Selene'
	},

	cloudBangle: {
		name: 'Cloud Bangle',
		key: 'cloud-bangle',
		flavor: 'From Zeus'
	},

	iridescentFan: {
		name: 'Iridescent Fan',
		key: 'iridescent-fan',
		flavor: 'From Hera'
	},

	vividSea: {
		name: 'Vivid Sea',
		key: 'vivid-sea',
		flavor: 'From Poseidon'
	},

	barleySheaf: {
		name: 'Barley Sheaf',
		key: 'barley-sheaf',
		flavor: 'From Demeter'
	},

	purestHope: {
		name: 'Purest Hope',
		key: 'purest-hope',
		flavor: 'From Apollo'
	},

	beautifulMirror: {
		name: 'Beautiful Mirror',
		key: 'beautiful-mirror',
		flavor: 'From Aphrodite'
	},

	adamantShard: {
		name: 'Adamant Shard',
		key: 'adamant-shard',
		flavor: 'From Hephaestus'
	},

	everlastingEmber: {
		name: 'Everlasting Ember',
		key: 'everlasting-ember',
		flavor: 'From Hestia'
	},

	lionFang: {
		name: 'Lion Fang',
		key: 'lion-fang',
		flavor: 'From Heracles'
	},

	blackenedFleece: {
		name: 'Blackened Fleece',
		key: 'blackened-fleece',
		flavor: 'From Medea'
	},

	crystalFigurine: {
		name: 'Crystal Figurine',
		key: 'crystal-figurine',
		flavor: 'From Circe'
	},

	silkenSash: {
		name: 'Silken Sash',
		key: 'silken-sash',
		flavor: 'From Arachne'
	},

	aromaticPhial: {
		name: 'Aromatic Phial',
		key: 'aromatic-phial',
		flavor: 'From Narcissus'
	},

	concaveStone: {
		name: 'Concave Stone',
		key: 'concave-stone',
		flavor: 'From Echo'
	},

	experimentalHammer: {
		name: 'Experimental Hammer',
		key: 'experimental-hammer',
		flavor: 'From Icarus'
	},

	transcendentEmbryo: {
		name: 'Transcendent Embryo',
		key: 'transcendent-embryo',
		flavor: 'From Chaos'
	},
};

// Convert KeepsakeData to CodexData
const DbKeepsakes: Record<string, CodexData> = {};

Object.entries(keepsakeData).forEach(([k, v]) => {
  DbKeepsakes[k] = mapKeepsakeToCodex(v);
});

export { DbKeepsakes };