const { gql } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer, schema } = require('../server');

const server = new ApolloServer({ ...schema });
const GET_MESSAGES = gql`
  query {
    messages {
      id
      image {
        type
        base64
      }
      text
    }
  }
`;

const POST_MESSAGE = gql`
  mutation message($text: String, $base64: String!, $type: String!) {
    message(text: $text, base64: $base64, type: $type) {
      id
      image {
        type
        base64
      }
      text
    }
  }
`;

describe('GET_MESSAGES', () => {
  it('Get messages', async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: GET_MESSAGES });
    expect(res).toMatchSnapshot();
    expect(res.errors).toBeUndefined();
  });
});

describe('POST_MESSAGE', () => {
  it('Post message without text', async () => {
    const { mutate } = createTestClient(server);
    const { data } = await mutate({
      query: POST_MESSAGE,
      variables: { base64: 'foo', type: 'bar' },
    });
    expect(data.message.length).toBe(1);
    expect(data.message[0].image).toEqual({ base64: 'foo', type: 'bar' });
  });
});
