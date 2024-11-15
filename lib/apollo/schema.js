import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
    query GetRecipes {
        getRecipes {
            name
            originated
            description
            dateCreated
        }
    }
`;