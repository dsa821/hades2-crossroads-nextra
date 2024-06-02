import { DbAspectsStaff } from "./staff.db";
import { DbAspectsBlades } from "./blades.db";
import { DbAspectsFlames } from "./flames.db";
import { DbAspectsAxe } from "./axe.db";
import { DbAspectsSkull } from "./skull.db";

const DbAspects = {
  Staff: DbAspectsStaff,
  Blades: DbAspectsBlades,
  Flames: DbAspectsFlames,
  Axe: DbAspectsAxe,
  Skull: DbAspectsSkull,
};
export { DbAspects };
