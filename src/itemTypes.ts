import weaponOrShieldUrl from "./assets/types/weapon_or_shield.png";
import armorUrl from "./assets/types/armor.png";
import cloakUrl from "./assets/types/cloak.png";
import armsUrl from "./assets/types/arms.png";
import feetUrl from "./assets/types/feet.png";
import neckUrl from "./assets/types/neck.png";
import faceUrl from "./assets/types/face.png";
import ringUrl from "./assets/types/ring.png";
import oneUseUrl from "./assets/types/one_use.png";
import { ItemType } from "./types";

export const itemTypes: readonly ItemType[] = [
  { name: "Weapon or shield", url: weaponOrShieldUrl },
  { name: "Armor", url: armorUrl },
  { name: "Cloak", url: cloakUrl },
  { name: "Arms", url: armsUrl },
  { name: "Feet", url: feetUrl },
  { name: "Neck", url: neckUrl },
  { name: "Face", url: faceUrl },
  { name: "Ring", url: ringUrl },
  { name: "One-use", url: oneUseUrl },
] as const;
