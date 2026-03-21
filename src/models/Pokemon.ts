import type { Cry } from "./Cry";
import type { Sprite } from "./Sprite";
import type { Type } from "./Type";

export type Pokemon = {
  id: number;
  name: string;
  sprites: Sprite;
  types: Type[];
  weight: number;
  height: number;
  cries: Cry;
};
