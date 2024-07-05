import { TextHighlight } from "components/TextHighlight";
import {
  IconDeathDefiance,
  IconGold,
  IconGrasp,
  IconLife,
  IconMagick,
  IconMaxLife,
  IconMaxMagick,
  IconReroll,
} from "components/icons";
import { ArcanaData } from "models/types";
import Link from "next/link";

const arcanaData: Record<string, ArcanaData> = {
  sorceress: {
    name: "The Sorceress",
    key: "sorceress",
    order: 1,
    grasp: 1,
    flavor:
      "Left to her own devices, she learned to confront the world on her own terms.",
    desc: (
      <>
        While you <strong>Channel</strong> your <strong>Ω Moves</strong>,
        everything moves slower for <strong>4 Sec.</strong>
      </>
    ),
  },

  waywardSon: {
    name: "The Wayward Son",
    key: "wayward-son",
    order: 2,
    grasp: 1,
    flavor:
      "Even the Underworld itself struggled to contain him, such was his lust for life.",
    desc: (
      <>
        After you exit a <strong>Location</strong>, restore <strong>4</strong>{" "}
        <IconLife />, or twice that if you have no more than{" "}
        <strong>30%</strong>
        <IconLife />.
      </>
    ),
  },

  huntress: {
    name: "The Huntress",
    key: "huntress",
    order: 3,
    grasp: 2,
    flavor:
      "Through discipline and instinct comes surpassing skill both in shadow and the light of the Moon.",
    desc: (
      <>
        While you have less than <IconMagick value="100%" />, your{" "}
        <strong>Attack</strong> and <strong>Special</strong> deal{" "}
        <strong>+50%</strong> damage.
      </>
    ),
  },

  night: {
    name: "Night",
    key: "night",
    order: 4,
    grasp: 2,
    flavor:
      "She sprang from Chaos, and formed much of the natural world, above the surface and below.",
    desc: (
      <>
        Your <strong>Ω Cast</strong> has <strong>+100 Power</strong> whenever it
        detonates.
      </>
    ),
  },

  moon: {
    name: "The Moon",
    key: "moon",
    order: 5,
    grasp: 0,
    flavor:
      "Even as she races her steeds across the fathomless sky, she bears witness to all.",
    desc: (
      <>
        Your <strong>Hex</strong> also charges up automatically as though you
        used <IconMagick value="4" /> every <strong>1 Sec.</strong>
      </>
    ),
    awakening: (
      <>
        Activate <strong>any</strong> surrounding Card. (
        <Link href="/arcana#night">Night</Link>,{" "}
        <Link href="/arcana#unseen">The Unseen</Link>,{" "}
        <Link href="/arcana#death">Death</Link>)
      </>
    ),
  },

  furies: {
    name: "The Furies",
    key: "furies",
    order: 6,
    grasp: 2,
    flavor:
      "In the deepest reaches of the Underworld, three are as feared as the god of the dead himself.",
    desc: (
      <>
        Deal <strong>+30%</strong> damage to foes in your <strong>Casts</strong>
        .
      </>
    ),
  },

  titan: {
    name: "The Titan",
    key: "titan",
    order: 7,
    grasp: 2,
    flavor:
      "He stole from gods the gift of fire, for mortals; thus he suffered, but he grew strong.",
    desc: (
      <>
        Gain <strong>+40</strong> <IconMaxLife /> and <strong>+40</strong>{" "}
        <IconMaxMagick />.
      </>
    ),
  },

  messenger: {
    name: "The Messenger",
    key: "messenger",
    order: 8,
    grasp: 1,
    flavor:
      "With incomparable swiftness can he travel from the highest peaks to the lowest depths.",
    desc: (
      <>
        You have <strong>+5%</strong> chance to <strong>Dodge</strong>.
      </>
    ),
  },

  unseen: {
    name: "The Unseen",
    key: "unseen",
    order: 9,
    grasp: 5,
    flavor:
      "Upon their ancient oath, in shadow, they serve; and to shadow, they return.",
    desc: (
      <>
        Restore <IconMagick value="6" /> every <strong>1 Sec.</strong>
      </>
    ),
  },

  death: {
    name: "Death",
    key: "death",
    order: 10,
    grasp: 3,
    flavor:
      "Some mortals would sense his soft approach, others taken by surprise.",
    desc: (
      <>
        Your <strong>Ω Moves</strong> have <strong>+15%</strong> chance to deal{" "}
        <strong>Critical</strong> damage if your last one was different.
      </>
    ),
  },

  swiftRunner: {
    name: "The Swift Runner",
    key: "swift-runner",
    order: 11,
    grasp: 1,
    flavor:
      "Those who attempted to confront the greatest of the Greeks merely met his spear.",
    desc: (
      <>
        Your <strong>Dash</strong> is immediate and your <strong>Sprint</strong>{" "}
        is <strong>+10%</strong> faster.
      </>
    ),
  },

  eternity: {
    name: "Eternity",
    key: "eternity",
    order: 12,
    grasp: 4,
    flavor:
      "The inevitable cannot be prevented, though perhaps can be forestalled.",
    desc: (
      <>
        Set forth each night with <strong>3</strong> <IconDeathDefiance />.
      </>
    ),
  },

  centaur: {
    name: "The Centaur",
    key: "centaur",
    order: 13,
    grasp: 0,
    flavor:
      "Many of the greatest heroes mortalkind has to offer have in common his patient instruction.",
    desc: (
      <>
        After every <strong>5 Locations</strong>, gain <strong>+5</strong>{" "}
        <IconMaxLife /> and <strong>+5</strong> <IconMaxMagick />.
      </>
    ),
    awakening: (
      <>
        Activate Cards that use <strong>1</strong> <IconGrasp /> through{" "}
        <strong>5</strong> <IconGrasp />.
      </>
    ),
  },

  origination: {
    name: "Origination",
    key: "origination",
    order: 14,
    grasp: 5,
    flavor:
      "From the infinite void emerged all that exists, and back to that void it all may yet return.",
    desc: (
      <>
        Deal <strong>+50%</strong> damage to foes afflicted with at least{" "}
        <strong>2 Curse</strong> effects from different Olympians.
      </>
    ),
  },

  lovers: {
    name: "The Lovers",
    key: "lovers",
    order: 15,
    grasp: 3,
    flavor:
      "Their music brought them together, and not even Death could keep them apart for long.",
    desc: (
      <>
        In <strong>Guardian Encounters</strong>, you take <strong>0</strong>{" "}
        damage the first <strong>3</strong> time(s) you are hit.
      </>
    ),
  },

  fates: {
    name: "The Fates",
    key: "fates",
    order: 16,
    grasp: 3,
    flavor:
      "Even the gods themselves are subject to the whims of the three weavers of destiny.",
    desc: (
      <>
        Set forth each night with <strong>+3</strong> <IconReroll />. You can
        alter <strong>Location Rewards</strong>.
      </>
    ),
  },

  boatman: {
    name: "The Boatman",
    key: "boatman",
    order: 17,
    grasp: 5,
    flavor:
      "Vast riches lie hidden in the realm of the dead; but only a modest fee is needed to get in.",
    desc: (
      <>
        Set forth each night with <strong>+300</strong> <IconGold />.
      </>
    ),
  },
  artificer: {
    name: "The Artificer",
    key: "artificer",
    order: 18,
    grasp: 3,
    flavor:
      "Few can turn raw materials into works of extraordinary genius; none as can he.",
    desc: (
      <>
        Set forth each night with <strong>3</strong> chance(s) to turn any{" "}
        <strong>Minor Find</strong> into a random <strong>Major Find</strong>.
      </>
    ),
  },

  excellence: {
    name: "Excellence",
    key: "excellence",
    order: 19,
    grasp: 5,
    flavor:
      "Not even gods can always live to their fullest purpose; yet mortals all must strive.",
    desc: (
      <>
        Any <strong>Boons</strong> you are offered have <strong>+50%</strong>{" "}
        chance to be improved to{" "}
        <TextHighlight type="rare">
          <strong>Rare</strong>
        </TextHighlight>
        .
      </>
    ),
  },

  queen: {
    name: "The Queen",
    key: "queen",
    order: 20,
    grasp: 0,
    flavor:
      "From Olympus she descends to reign in the Underworld, as the surface-land grows cold.",
    desc: (
      <>
        Any <strong>Boons</strong> you are offered have <strong>+10%</strong>{" "}
        chance to be a{" "}
        <TextHighlight type="duo">
          <strong>Duo</strong>
        </TextHighlight>{" "}
        <em>(whenever possible)</em>.
      </>
    ),
    awakening: (
      <>
        Activate no more than <strong>2</strong> Cards that use the same amount
        of <strong>Grasp</strong>.
      </>
    ),
  },

  seer: {
    name: "The Seer",
    key: "seer",
    order: 21,
    grasp: 0,
    flavor:
      "Having been stricken blind, she saw much more than any mortal could.",
    desc: (
      <>
        Set forth each night with +4 <IconReroll />.
      </>
    ),
    awakening: (
      <>
        Activate <strong>all</strong> surrounding Cards. (
        <Link href="/arcana#the-fates">The Fates</Link>,{" "}
        <Link href="/arcana#the-boatman">The Boatman</Link>,{" "}
        <Link href="/arcana#the-champions">The Champions</Link>)
      </>
    ),
  },

  champions: {
    name: "The Champions",
    key: "champions",
    order: 22,
    grasp: 4,
    flavor:
      "Once-mortal foes, they found each other once again in death, and were exalted in Elysium.",
    desc: (
      <>
        Set forth each night with <strong>+3</strong> <IconReroll />. You can
        alter <strong>Boons</strong> and certain other choices.
      </>
    ),
  },

  strength: {
    name: "Strength",
    key: "strength",
    order: 23,
    grasp: 4,
    flavor:
      "The power to surpass the might of the gods is one that must always be held in check.",
    desc: (
      <>
        While you have no more than <strong>30%</strong> <IconLife />, you take{" "}
        <strong>-50%</strong> damage and deal <strong>+50%</strong>.
      </>
    ),
  },

  divinity: {
    name: "Divinity",
    key: "divinity",
    order: 24,
    grasp: 0,
    flavor:
      "The privilege of godhood is bestowed at birth, save for the rarest cases, when it is earned instead.",
    desc: (
      <>
        Any <strong>Boons</strong> you are offered have <strong>+20%</strong>{" "}
        chance to be improved to{" "}
        <TextHighlight type="epic">
          <strong>Epic</strong>
        </TextHighlight>
        .
      </>
    ),
    awakening: (
      <>
        Activate all <strong>5</strong> Cards in any other row or column.
      </>
    ),
  },

  judgment: {
    name: "Judgment",
    key: "judgment",
    order: 25,
    grasp: 0,
    flavor:
      "The Underworld King is to decide what shall become of each and every mortal life.",
    desc: (
      <>
        After you vanquish a <strong>Guardian</strong>, activate{" "}
        <strong>5</strong> random inactive <strong>Arcana Cards</strong>.
      </>
    ),
    awakening: (
      <>
        Activate no more than <strong>3</strong> Cards.
      </>
    ),
  },
};

export { arcanaData as DbArcana };
