import { PokemonType, PokemonDetailsType } from "../../types/pokemon";
import { GraphQLInt, GraphQLString } from 'graphql';
import { getPokemonDetails, getPokemonList } from "../../models/pokemon";

const GetPokemonDetails = {
    type: PokemonDetailsType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    },
    resolve: getPokemonDetails,
};

const GetPokemon = {
    type: PokemonType,
    args: {
        offset: { type: GraphQLInt },
        limit: {type :GraphQLInt},
    },
    resolve: getPokemonList,
}

export { GetPokemon, GetPokemonDetails }