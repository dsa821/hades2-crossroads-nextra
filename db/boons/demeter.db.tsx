import {
  IconLife,
  IconMagick,
  IconMaxLife,
  IconMysterySeed,
  IconWater,
} from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsDemeter: Record<string, BoonData> = {
  iceStrike: {
    name: "Ice Strike",
    key: "ice-strike",
    god: "demeter",
    element: "water",
    desc: (
      <>
        Your <strong>Attacks</strong> deal more damage and inflict{" "}
        <strong>Freeze</strong>.
      </>
    ),
    scaleLabel: "Attack Damage",
    scaleValue: "+30%",
  },

  iceFlourish: {
    name: "Ice Flourish",
    key: "ice-flourish",
    god: "demeter",
    element: "water",
    desc: (
      <>
        Your <strong>Specials</strong> deal more damage and inflict{" "}
        <strong>Freeze</strong>.
      </>
    ),
    scaleLabel: "Special Damage",
    scaleValue: "+40%",
  },

  arcticRing: {
    name: "Arctic Ring",
    key: "arctic-ring",
    god: "demeter",
    element: "water",
    desc: (
      <>
        Your <strong>Casts</strong> repeatedly deal damage in the area and
        inflict <strong>Freeze</strong>.
      </>
    ),
    scaleLabel: "Cast Damage",
    scaleValue: 10,
    scaleRate: 0.5,
  },

  frigidSprint: {
    name: "Frigid Sprint",
    key: "frigid-sprint",
    god: "demeter",
    element: "water",
    desc: (
      <>
        Your <strong>Sprint</strong> forms a <strong>Cyclone</strong> around you
        that lingers after you stop.
      </>
    ),
    scaleLabel: "Cyclone Damage",
    scaleValue: 4,
    scaleRate: 0.25,
    descExtra: (
      <>
        <strong>Cyclone</strong> <em>(Curse)</em>: A vortex that makes foes{" "}
        <strong>20%</strong> slower and their ranged shots <strong>60%</strong>{" "}
        slower. Lasts <strong>3 Sec.</strong>
      </>
    ),
  },

  tranquilGain: {
    name: "Tranquil Gain",
    key: "tranquil-gain",
    god: "demeter",
    element: "earth",
    desc: (
      <>
        After remaining inactive for <strong>1 Sec.</strong>, rapidly restore{" "}
        <IconMagick /> until you act.
      </>
    ),
    scaleLabel: "Magick Restoration",
    scaleValue: "40%",
    scaleRate: 1,
  },

  frostyVeneer: {
    name: "Frosty Veneer",
    key: "frosty-veneer",
    god: "demeter",
    type: "infusion",
    desc: (
      <>
        While you have at least <strong>6</strong> <IconWater />, you cannot
        take more damage per hit than the limit.
      </>
    ),
    scaleLabel: "Max Damage per Hit",
    scaleValue: 15,
  },

  rareCrop: {
    name: "Rare Crop",
    key: "rare-crop",
    god: "demeter",
    element: "earth",
    desc: (
      <>
        Your <strong>Boons</strong> become <strong>Common</strong>, then gain{" "}
        <strong>Rarity</strong> every <strong>3 Encounters</strong>.
      </>
    ),
    scaleLabel: "Random Boons Affected",
    scaleValue: 1,
  },

  galeForce: {
    name: "Gale Force",
    key: "gale-force",
    god: "demeter",
    element: "water",
    desc: (
      <>
        Your <strong>Casts</strong> also create a <strong>Cyclone</strong> at
        the binding circle.
      </>
    ),
    scaleLabel: "Cyclone Damage",
    scaleValue: 4,
    scaleRate: 0.25,
    descExtra: (
      <>
        <strong>Cyclone</strong> <em>(Curse)</em>: A vortex that makes foes{" "}
        <strong>20%</strong> slower and their ranged shots <strong>60%</strong>{" "}
        slower. Lasts <strong>3 Sec.</strong>
      </>
    ),
  },

  plentifulForage: {
    name: "Plentiful Forage",
    key: "plentiful-forage",
    god: "demeter",
    element: "earth",
    desc: (
      <>
        Whenever you gather plants, seeds, or mushrooms, gain <IconMaxLife />.
        Receive <strong>1</strong> <IconMysterySeed /> now.
      </>
    ),
    scaleLabel: "Max Life from Gathering",
    scaleValue: 5,
  },

  snowQueen: {
    name: "Snow Queen",
    key: "snow-queen",
    god: "demeter",
    element: "earth",
    desc: (
      <>
        After you enter a <strong>Location</strong>, <strong>Prime</strong> a
        barrier that absorbs <strong>1</strong> instance of damage.
      </>
    ),
    scaleLabel: "Magick Primed",
    scaleValue: 20,
  },

  localClimate: {
    name: "Local Climate",
    key: "local-climate",
    god: "demeter",
    element: "earth",
    desc: (
      <>
        Your <strong>Ω Cast</strong> deals bonus damage and follows you, even as
        you start to <strong>Channel</strong> it.
      </>
    ),
    scaleLabel: "Cast Damage",
    scaleValue: "+20%",
  },

  coldStorage: {
    name: "Cold Storage",
    key: "cold-storage",
    god: "demeter",
    element: "water",
    desc: (
      <>
        Your <strong>Freeze</strong> effects last longer.
      </>
    ),
    scaleLabel: "Freeze Duration",
    scaleValue: "+2 Sec.",
  },

  weedKiller: {
    name: "Weed Killer",
    key: "weed-killer",
    god: "demeter",
    element: "earth",
    desc: (
      <>
        Your <strong>Ω Attack</strong> deals more damage, but uses{" "}
        <IconMagick value="+10" />.
      </>
    ),
    scaleLabel: "Omega Attack Damage",
    scaleValue: "+50%",
  },

  winterHarvest: {
    name: "Winter Harvest",
    key: "winter-harvest",
    god: "demeter",
    element: "earth",
    type: "legendary",
    desc: (
      <>
        <strong>Freeze</strong>-afflicted foes shatter at <strong>10%</strong>{" "}
        <IconLife />, dealing damage in the area.
      </>
    ),
    scaleLabel: "Shatter Area Damage",
    scaleValue: 100,
  },
};
