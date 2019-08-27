import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

const PokemonDetailsType = new GraphQLObjectType({
    name: 'PokemonDetailsType',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        base_experience: { type: GraphQLInt },
        height: { type: GraphQLInt },
        is_default: { type: GraphQLBoolean },
        order: { type: GraphQLInt },
        weight: { type: GraphQLInt },
    }
});

const PokemonType = new GraphQLObjectType({
    name: 'PokemonType',
    fields: {
        next: { type: GraphQLString },
        previous: { type: GraphQLString },
        count: { type: GraphQLInt },
        results: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'PokemonSummary',
                fields: {
                    name: { type: GraphQLString },
                    url: { type: GraphQLString }
                }
            }))
        }
    }
})

export { PokemonDetailsType, PokemonType };