"use client";

import { selectCount } from "@/lib/redux";
import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

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

export default function Home() {
  const counter = useSelector(selectCount);
  const { loading, error, data } = useQuery(GET_RECIPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <h1 className="text-3xl font-bold font-sunderline">{counter}</h1>;
}
