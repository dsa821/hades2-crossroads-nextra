import { DbBoonsApollo } from "./apollo.db";
import { DbBoonsZeus } from "./zeus.db";

import { DbBoonsDuos } from "./duos.db";

const Boons = { Apollo: DbBoonsApollo, Zeus: DbBoonsZeus, Duos: DbBoonsDuos };
export { Boons as DbBoons };
