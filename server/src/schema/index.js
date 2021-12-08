import { merge } from 'lodash-es';
import { gql } from 'apollo-server';
import { MessageResolvers } from './message';
import MessageType from './message/type.gql';

const Types = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [
  Types,
  gql`
    ${MessageType}
  `,
];
export const resolvers = merge(MessageResolvers);
