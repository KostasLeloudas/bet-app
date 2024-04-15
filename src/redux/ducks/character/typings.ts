import { Character } from "../../../constants/character.model";

export interface ICharacterSlice {
  characters: Character[],
  searchTerm: string,
};
