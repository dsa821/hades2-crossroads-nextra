import { DbBoonsAphrodite } from "./aphrodite.db";
import { DbBoonsApollo } from "./apollo.db";
import { DbBoonsDemeter } from "./demeter.db";
import { DbBoonsHephaestus } from "./hephaestus.db";
import { DbBoonsHera } from "./hera.db";
import { DbBoonsPoseidon } from "./poseidon.db";
import { DbBoonsZeus } from "./zeus.db";

import { DbBoonsDuos } from "./duos.db";

const DbBoons = {
  Aphrodite: DbBoonsAphrodite,
  Apollo: DbBoonsApollo,
  Demeter: DbBoonsDemeter,
  Hephaestus: DbBoonsHephaestus,
  Hera: DbBoonsHera,
  Poseidon: DbBoonsPoseidon,
  Zeus: DbBoonsZeus,
  Duos: DbBoonsDuos,
};
export { DbBoons };
