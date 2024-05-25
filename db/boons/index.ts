import { DbBoonsApollo } from "./apollo.db";
import { DbBoonsDemeter } from "./demeter.db";
import { DbBoonsHera } from "./hera.db";
import { DbBoonsPoseidon } from "./poseidon.db";
import { DbBoonsZeus } from "./zeus.db";

import { DbBoonsDuos } from "./duos.db";

const DbBoons = {
  Apollo: DbBoonsApollo,
  Demeter: DbBoonsDemeter,
  Hera: DbBoonsHera,
  Poseidon: DbBoonsPoseidon,
  Zeus: DbBoonsZeus,
  Duos: DbBoonsDuos,
};
export { DbBoons };
