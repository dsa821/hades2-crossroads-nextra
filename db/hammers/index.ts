import { DbHammersStaff } from "./staff.db";
import { DbHammersBlades } from "./blades.db";
import { DbHammersFlames } from "./flames.db";
import { DbHammersAxe } from "./axe.db";
import { DbHammersSkull } from "./skull.db";

const DbHammers = {
  Staff: DbHammersStaff,
  Blades: DbHammersBlades,
  Flames: DbHammersFlames,
	Axe: DbHammersAxe,
	Skull: DbHammersSkull
};
export { DbHammers };
