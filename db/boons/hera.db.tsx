import { TextHighlight } from "components/TextHighlight";
import { IconEarth, IconMagick } from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsHera: Record<string, BoonData> = {
  swornStrike: {
    name: "Sworn Strike",
    key: "sworn-strike",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Attacks</strong> deal more damage and inflict{" "}
        <strong>Hitch</strong>.
      </>
    ),
    scaleLabel: "Attack Damage",
    scaleValue: "+50%",
  },

  swornFlourish: {
    name: "Sworn Flourish",
    key: "sworn-flourish",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Specials</strong> deal more damage and inflict{" "}
        <strong>Hitch</strong>.
      </>
    ),
    scaleLabel: "Special Damage",
    scaleValue: "+60%",
  },

  engagementRing: {
    name: "Engagement Ring",
    key: "engagement-ring",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Casts</strong> inflict <strong>Hitch</strong>. Whenever
        foes within are slain, they damage surrounding foes.
      </>
    ),
    scaleLabel: "Death Blast Damage",
    scaleValue: 50,
  },

  nexusSprint: {
    name: "Nexus Sprint",
    key: "nexus-sprint",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Sprint</strong> inflicts <strong>Hitch</strong> on contact
        with foes, and deals damage when it does.
      </>
    ),
    scaleLabel: "Damage with Hitch",
    scaleValue: 60,
  },

  bornGain: {
    name: "Born Gain",
    key: "born-gain",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Whenever you run out of <IconMagick />, <strong>Prime</strong> to
        restore <em>all</em> <IconMagick /> up to the reduced limit.
      </>
    ),
    scaleLabel: "Magick Primed",
    scaleValue: 20,
  },

  properUpbringing: {
    name: "Proper Upbringing",
    key: "proper-upbringing",
    god: "hera",
    type: "infusion",
    desc: (
      <>
        While you have at least <strong>3</strong> <IconEarth />, <em>all</em>{" "}
        your <strong>Common Boons</strong> gain <strong>Rarity</strong>.
      </>
    ),
    scaleLabel: "Improved Rarity",
    scaleValue: (
      <>
        <TextHighlight type="rare">Rare</TextHighlight>
      </>
    ),
  },

  bridalGlow: {
    name: "Bridal Glow",
    key: "bridal-glow",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Boons</strong> become{" "}
        <TextHighlight type="heroic">
          <strong>Heroic</strong>
        </TextHighlight>
        , then lose <strong>Rarity</strong> every <strong>5 Encounters</strong>.
      </>
    ),
    scaleLabel: "Random Boons Affected",
    scaleValue: 2,
  },

  uncommonGrace: {
    name: "Uncommon Grace",
    key: "uncommon-grace",
    god: "hera",
    element: "earth",
    desc: (
      <>
        While none of your other <strong>Boons</strong> are{" "}
        <strong>Common</strong>, deal more damage.
      </>
    ),
    scaleLabel: "Common-Less Bonus Damage",
    scaleValue: "+10%",
  },

  nastyComeback: {
    name: "Nasty Comeback",
    key: "nasty-comeback",
    god: "hera",
    element: "earth",
    desc: (
      <>
        After you take damage, inflict your foe with <strong>Hitch</strong> and
        deal damage in greater measure.
      </>
    ),
    scaleLabel: "Damage Reflected",
    scaleValue: "500%",
  },

  bloodLine: {
    name: "Blood Line",
    key: "blood-line",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Ω Moves</strong> create a rift that strikes foes in front
        of and behind you, but use <IconMagick value="+15" />.
      </>
    ),
    scaleLabel: "Rift Damage",
    scaleValue: 100,
  },

  hereditaryBane: {
    name: "Hereditary Bane",
    key: "hereditary-bane",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Hitch</strong> effects deal more damage and last{" "}
        <strong>+5 Sec</strong>.
      </>
    ),

    scaleLabel: "Hitch Damage",
    scaleValue: "+10%",
  },

  dyingWish: {
    name: "Dying Wish",
    key: "dying-wish",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Whenever <strong>Hitch</strong>-afflicted foes are slain, damage all
        other <strong>Hitch</strong>-afflicted foes.
      </>
    ),

    scaleLabel: "Hitch Death Damage",
    scaleValue: 40,
  },

  rousingReception: {
    name: "Rousing Reception",
    key: "rousing-reception",
    god: "hera",
    element: "earth",
    desc: (
      <>
        Your <strong>Casts</strong> damage any foes as they join the{" "}
        <strong>Encounter</strong>, whever they appear.
      </>
    ),

    scaleLabel: "On-Spawn Damage",
    scaleValue: 60,
  },

  braveFace: {
    name: "Brave Face",
    key: "brave-face",
    god: "hera",
    element: "earth",
    type: "legendary",
    desc: (
      <>
        Automatically use <IconMagick /> to resist up to <strong>50%</strong> of
        any damage.
      </>
    ),

    scaleLabel: "Magick Cost per Damage Point",
    scaleValue: 5,
  },
};
