import { IconFire, IconLife, IconMagick } from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsApollo: Record<string, BoonData> = {
  novaStrike: {
    name: "Nova Strike",
    key: "nova-strike",
    god: "apollo",
    element: "air",
    desc: (
      <>
        Your <strong>Attacks</strong> deal more damage in a larger area.
      </>
    ),
    scaleLabel: "Attack Damage",
    scaleValue: "+40%",
  },

  novaFlourish: {
    name: "Nova Flourish",
    key: "nova-flourish",
    god: "apollo",
    element: "air",
    desc: (
      <>
        Your <strong>Specials</strong> deal more damage in a larger area.
      </>
    ),
    scaleLabel: "Special Damage",
    scaleValue: "+60%",
  },

  solarRing: {
    name: "Solar Ring",
    key: "solar-ring",
    god: "apollo",
    element: "fire",
    desc: (
      <>
        Your <strong>Casts</strong> inflict <strong>Daze</strong>, and deal a
        burst of damage before they expire.
      </>
    ),
    scaleLabel: "Cast Damage",
    scaleValue: 60,
  },

  blindingSprint: {
    name: "Blinding Sprint",
    key: "blinding-sprint",
    god: "apollo",
    element: "fire",
    desc: (
      <>
        Your <strong>Sprint</strong> is faster and inflicts{" "}
        <strong>Daze</strong> on nearby foes.
      </>
    ),
    scaleLabel: "Sprint Speed",
    scaleValue: "+15%",
  },

  lucidGain: {
    name: "Lucid Gain",
    key: "lucid-gain",
    god: "apollo",
    element: "air",
    desc: (
      <>
        If you stand in your <strong>Casts</strong> when they expire,
        immediately restore <IconMagick />.
      </>
    ),
    scaleLabel: "Magick Restoration",
    scaleValue: 50,
  },

  selfHealing: {
    name: "Self Healing",
    key: "self-healing",
    god: "apollo",
    type: "infusion",
    desc: (
      <>
        While you have at least <strong>3</strong> <IconFire />, whenever you
        take damage, restore some <IconLife />.
      </>
    ),
    scaleLabel: "Damage Recovered",
    scaleValue: "30%",
    scaleRate: <>(over 5 Sec.)</>,
  },

  superNova: {
    name: "Super Nova",
    key: "super-nova",
    god: "apollo",
    element: "air",
    desc: (
      <>
        Your <strong>Casts</strong> expand in size until they expire.
      </>
    ),
    scaleLabel: "Max Cast Size",
    scaleValue: "+40%",
  },

  lightSmite: {
    name: "Light Smite",
    key: "light-smite",
    god: "apollo",
    element: "fire",
    desc: (
      <>
        After you take damage, your foe takes damage and you inflict{" "}
        <strong>Daze</strong> on <em>all</em> foes.
      </>
    ),
    scaleLabel: "Revenge Damage",
    scaleValue: 50,
  },

  perfectImage: {
    name: "Perfect Image",
    key: "perfect-image",
    god: "apollo",
    element: "air",
    desc: (
      <>
        In each <strong>Encounter</strong>, you deal more damage until you take
        damage. If you take no more for <strong>15 Sec.</strong>, regain this.
      </>
    ),
    scaleLabel: "No-Hit Bonus Damage",
    scaleValue: "+10%",
  },

  backBurner: {
    name: "Back Burner",
    key: "back-burner",
    god: "apollo",
    element: "fire",
    desc: (
      <>
        Foes with <strong>Daze</strong> take more damage if struck from behind.
      </>
    ),
    scaleLabel: "Backstab Damage",
    scaleValue: "+50%",
  },

  prominenceFlare: {
    name: "Prominence Flare",
    key: "prominence-flare",
    god: "apollo",
    element: "air",
    desc: (
      <>
        After your <strong>Ω Cast</strong> expires, rapidly deal damage in the
        area for <strong>2 Sec.</strong>
      </>
    ),
    scaleLabel: "Omega Cast Damage",
    scaleValue: 10,
    scaleRate: 0.13,
  },

  dazzlingDisplay: {
    name: "Dazzling Display",
    key: "dazzling-display",
    god: "apollo",
    element: "fire",
    desc: (
      <>
        Your <strong>Attacks</strong> may inflict <strong>Daze</strong>.
      </>
    ),
    scaleLabel: "Daze Chance",
    scaleValue: "+10%",
  },

  extraDose: {
    name: "Extra Dose",
    key: "extra-dose",
    god: "apollo",
    element: "fire",
    desc: (
      <>
        Your <strong>Attack</strong> has a chance to hit <strong>2</strong>{" "}
        times.
      </>
    ),
    scaleLabel: "Double Strike Chance",
    scaleValue: "+5%",
  },

  exceptionalTalent: {
    name: "Exceptional Talent",
    key: "exceptional-talent",
    god: "apollo",
    element: "air",
    type: "legendary",
    desc: (
      <>
        Your <strong>Ω Attack</strong> and <strong>Ω Special</strong> fire{" "}
        <strong>2</strong> more times, but use more <IconMagick />.
      </>
    ),
    scaleLabel: "Omega Move Cost",
    scaleValue: "+20 Magick",
  },
};
