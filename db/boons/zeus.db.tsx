import { IconAir, IconMagick } from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsZeus: Record<string, BoonData> = {
  heavenStrike: {
    name: "Heaven Strike",
    key: "heaven-strike",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Your <strong>Attacks</strong> inflict <strong>Blitz</strong>.
      </>
    ),
    scaleLabel: "Blitz Damage",
    scaleValue: 80,
  },

  heavenFlourish: {
    name: "Heaven Flourish",
    key: "heaven-flourish",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Your <strong>Specials</strong> inflict <strong>Blitz</strong>.
      </>
    ),
    scaleLabel: "Blitz Damage",
    scaleValue: 100,
  },

  stormRing: {
    name: "Storm Ring",
    key: "storm-ring",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Your <strong>Casts</strong> cause lightning bolts to repeatedly strike{" "}
        <strong>1</strong> foe at a time.
      </>
    ),
    scaleLabel: "Bolt Damage",
    scaleValue: 20,
    scaleRate: 0.25,
  },

  thunderSprint: {
    name: "Thunder Sprint",
    key: "thunder-sprint",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Your <strong>Sprint</strong> causes nearby foes to be struck by
        lightning bolts, which use <strong>3</strong> <IconMagick /> each.
      </>
    ),
    scaleLabel: "Bolt Damage",
    scaleValue: 20,
    scaleRate: 0.15,
  },

  ionicGain: {
    name: "Ionic Gain",
    key: "ionic-gain",
    god: "zeus",
    element: "air",
    desc: (
      <>
        In each <strong>Encounter</strong>, an <strong>Aether Font</strong>{" "}
        appears in the area and restores <em>all</em> <IconMagick /> when used.
      </>
    ),
    scaleLabel: "Reappearance Time",
    scaleValue: "10 Sec.",
    descExtra: (
      <>
        <strong>Aether Font</strong>: Restores your <IconMagick /> when used,
        then expires, eventually reappearing in a random spot.
      </>
    ),
  },

  airQuality: {
    name: "Air Quality",
    key: "air-quality",
    god: "zeus",
    type: "infusion",
    desc: (
      <>
        While you have at least <strong>5</strong> <IconAir />, you can never
        deal less damage than the limit.
      </>
    ),
    scaleLabel: "Min Damage per Hit",
    scaleValue: 30,
  },

  divineVengeance: {
    name: "Divine Vengeance",
    key: "divine-vengeance",
    god: "zeus",
    element: "air",
    desc: (
      <>
        After you take damage, your foe is struck by lightning, and again{" "}
        <strong>50%</strong> of the time.
      </>
    ),
    scaleLabel: "Bolt Damage",
    scaleValue: 100,
    scaleRate: (
      <>
        (up to <strong>2</strong> times)
      </>
    ),
  },

  staticShock: {
    name: "Static Shock",
    key: "static-shock",
    god: "zeus",
    element: "air",
    desc: (
      <>
        After you enter a <strong>Location</strong>, <strong>Prime 50</strong>{" "}
        <IconMagick /> to make your strikes emit chain-lightning.
      </>
    ),
    scaleLabel: "Lightning Damage",
    scaleValue: 10,
  },

  spiritSurge: {
    name: "Spirit Surge",
    key: "spirit-surge",
    god: "zeus",
    element: "air",
    desc: (
      <>
        While you have no more than <strong>10</strong> <IconMagick />,{" "}
        <em>all</em> foes are occasionally struck by lightning.
      </>
    ),
    scaleLabel: "Bolt Damage",
    scaleValue: 60,
    scaleRate: 5,
  },

  lightningLance: {
    name: "Lightning Lance",
    key: "lightning-lance",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Hold <b>Cast</b> to aim where the binding circle appears. Foes within
        are struck by lightning.
      </>
    ),
    scaleLabel: "Bolt Damage",
    scaleValue: 50,
  },

  doubleStrike: {
    name: "Double Strike",
    key: "double-strike",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Your lightning bolt effects may strike <strong>1</strong> more time.
      </>
    ),
    scaleLabel: "Bonus Strike Chance",
    scaleValue: "+10%",
  },

  toastingFork: {
    name: "Toasting Fork",
    key: "toasting-fork",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Your <strong>Blitz</strong> effects deal damage even if they expire
        without being activated.
      </>
    ),
    scaleLabel: "Blitz Expiration Damage",
    scaleValue: "75%",
  },

  electricOverload: {
    name: "Electric Overload",
    key: "electric-overload",
    god: "zeus",
    element: "air",
    desc: (
      <>
        Whenever your Blitz effects activate, a bolt of chain-lightning fires
        from the foe.
      </>
    ),
    scaleLabel: "Lightning Damage",
    scaleValue: 10,
  },

  shockingLoss: {
    name: "Shocking Loss",
    key: "shocking-loss",
    god: "zeus",
    element: "air",
    type: "legendary",
    desc: (
      <>
        Whenever you first deal damage to susceptible foes, you may destroy them
        outright.
      </>
    ),
    scaleLabel: "Instant Destruction Chance",
    scaleValue: "20%",
    flavor:
      "The lightning bolt forever remains a symbol of the impulsive power of the Lord of Olympus.",
  },
};
