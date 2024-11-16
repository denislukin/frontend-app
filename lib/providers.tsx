"use client";

/* Core */
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/* Instruments */
import { reduxStore } from "@/lib/redux";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export const ApolloProviders = (props: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
