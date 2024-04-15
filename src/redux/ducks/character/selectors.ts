import { TAppState } from '../../typings';

export const selectCharacters = ( state: TAppState ) => state.characters.characters;

export const selectCharactersByName = ( state: TAppState, characterNamePartial: string ) => {
    if ( !characterNamePartial || characterNamePartial.length === 0 ) {
        return state.characters.characters;
    }
    const res = state.characters.characters.filter( ( character ) => character.name.toLowerCase().includes(
        characterNamePartial.toLowerCase()
    ) )

    return res ?? [];
};
