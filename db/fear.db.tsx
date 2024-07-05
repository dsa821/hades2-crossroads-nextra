import { ScaleValue } from "components/ScaleValue";
import { IconGold, IconHealing, IconLife, IconMagick } from "components/icons";
import { FearData } from "models/types";

const fearData: Record<string, FearData> = {
  blood: {
    name: "Vow of Blood",
    fearValues: [1, 2, 2],
    scaleValues: [20, 60, 100],
    flavor: "I writhe",
    desc: ({ scaleValues }) => {
      return (
        <>
          All foes deal{" "}
          <ScaleValue
            scaleValues={scaleValues}
            prefix="+"
            suffix="%"
            negative
          />{" "}
          damage.
        </>
      );
    },
  },

  dominance: {
    name: "Vow of Dominance",
    fearValues: [1, 1, 1],
    scaleValues: [10, 20, 30],
    flavor: "my strength shall meet its match",
    desc: ({ scaleValues }) => {
      return (
        <>
          All foes have{" "}
          <ScaleValue
            scaleValues={scaleValues}
            prefix="+"
            suffix="%"
            negative
          />
          <IconLife />.
        </>
      );
    },
  },

  rebuke: {
    name: "Vow of Rebuke",
    fearValues: [1, 1],
    scaleValues: [1, 2],
    flavor: "I strike to no avail",
    desc: ({ scaleValues }) => {
      return (
        <>
          All foes have{" "}
          <ScaleValue scaleValues={scaleValues} suffix=" Barrier" negative />.
        </>
      );
    },
  },

  fury: {
    name: "Vow of Fury",
    fearValues: [3, 3],
    scaleValues: [20, 40],
    flavor: "I shall be set upon relentlessly",
    desc: ({ scaleValues }) => {
      return (
        <>
          All foes are{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative /> faster.
        </>
      );
    },
  },

  suffering: {
    name: "Vow of Suffering",
    fearValues: [2, 2],
    scaleValues: [100, 300],
    flavor: "shall my foes pierce my heart",
    desc: ({ scaleValues }) => {
      return (
        <>
          In each <strong>Encounter</strong>, you take{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative /> bonus
          damage the first time you are struck.
        </>
      );
    },
  },

  commotion: {
    name: "Vow of Commotion",
    fearValues: [1, 1, 1],
    scaleValues: [20, 40, 60],
    flavor: "I shall be overwhelmed",
    desc: ({ scaleValues }) => {
      return (
        <>
          Most <strong>Encounters</strong> have{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative /> more
          foes.
        </>
      );
    },
  },

  haunting: {
    name: "Vow of Haunting",
    fearValues: [1, 1],
    scaleValues: [25, 50],
    flavor: "my foes shall rise again",
    desc: ({ scaleValues }) => {
      return (
        <>
          Most slain foes have{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative /> chance to
          become a <strong>Revenant</strong>.
        </>
      );
    },
  },

  wandering: {
    name: "Vow of Wandering",
    fearValues: [1, 2],
    scaleValues: [10, 25],
    flavor: "shall distant dangers rise",
    desc: ({ scaleValues }) => {
      return (
        <>
          Most foes have{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative /> chance to
          be from the next <strong>Region</strong> <em>(if there is one)</em>.
        </>
      );
    },
  },

  scars: {
    name: "Vow of Scars",
    fearValues: [1, 1, 2],
    scaleValues: [75, 50, 0],
    flavor: "my wounds shall never heal",
    desc: ({ scaleValues }) => {
      return (
        <>
          Any <IconHealing /> effects are{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative />{" "}
          effective.
        </>
      );
    },
  },

  destitution: {
    name: "Vow of Destitution",
    fearValues: [1, 1],
    scaleValues: [40, 80],
    flavor: "I shall have naught to spare",
    desc: ({ scaleValues }) => {
      return (
        <>
          All items that cost <IconGold /> are{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative /> more
          expensive.
        </>
      );
    },
  },

  panic: {
    name: "Vow of Panic",
    fearValues: [1],
    scaleValues: [50],
    flavor: "shall my unsettled mind give in",
    desc: ({ scaleValues }) => {
      return (
        <>
          You enter each location with{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative />{" "}
          <IconMagick />
        </>
      );
    },
  },

  forsaking: {
    name: "Vow of Forsaking",
    fearValues: [2],
    scaleValues: [2],
    flavor: "my chances shall be few, that",
    desc: ({ scaleValues }) => {
      return (
        <>
          After you choose a <strong>Boon</strong>,{" "}
          <ScaleValue scaleValues={scaleValues} negative /> unpicked blessings
          will not appear again this night.
        </>
      );
    },
  },

  bitterness: {
    name: "Vow of Bitterness",
    fearValues: [3],
    scaleValues: [1],
    flavor: "shall favors turn to tears, that",
    desc: ({ scaleValues }) => {
      return (
        <>
          The first <ScaleValue scaleValues={scaleValues} negative />{" "}
          <strong>Boon</strong> in each <strong>Region</strong> becomes{" "}
          <strong>Onion</strong> instead.
        </>
      );
    },
  },

  arrogance: {
    name: "Vow of Arrogance",
    fearValues: [1, 3],
    scaleValues: [5, 10],
    flavor: "shall pride of gods fall short, that",
    desc: ({ scaleValues }) => {
      return (
        <>
          Whenever you choose a <strong>Boon</strong>, <strong>Prime</strong>{" "}
          <ScaleValue scaleValues={scaleValues} negative /> <IconMagick /> for
          each <strong>Rarity</strong> greater than <strong>Common</strong>.
        </>
      );
    },
  },

  desperation: {
    name: "Vow of Desperation",
    fearValues: [1, 2, 3],
    scaleValues: [9, 7, 5],
    flavor: "shall Death be at my heels, that",
    desc: ({ scaleValues }) => {
      return (
        <>
          You have{" "}
          <ScaleValue scaleValues={scaleValues} suffix=" minutes" negative /> to
          fight through each <strong>Region</strong> <em>(or else...)</em>
        </>
      );
    },
  },

  abandon: {
    name: "Vow of Abandon",
    fearValues: [5],
    scaleValues: [100],
    flavor: "shall my protections fail, that",
    desc: ({ scaleValues }) => {
      return (
        <>
          Nullify the benefits of{" "}
          <ScaleValue scaleValues={scaleValues} suffix="%" negative /> of your{" "}
          <strong>Arcana Cards</strong>.
        </>
      );
    },
  },
};

export { fearData as DbFear };
