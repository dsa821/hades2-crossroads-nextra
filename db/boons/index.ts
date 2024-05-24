import { DbBoonsApollo } from "./apollo.db";
import { DbBoonsDemeter } from "./demeter.db";
import { DbBoonsZeus } from "./zeus.db";

import { DbBoonsDuos } from "./duos.db";

const DbBoons = {
  Apollo: DbBoonsApollo,
  Demeter: DbBoonsDemeter,
  Zeus: DbBoonsZeus,
  Duos: DbBoonsDuos,
};
export { DbBoons };
