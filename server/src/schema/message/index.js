const MESSAGES = [];

const addMessage = ({ base64, type, text }) => {
  MESSAGES.push({
    id: `${MESSAGES.length + 1}`,
    image: {
      type,
      base64,
    },
    text,
  });
};

export const MessageResolvers = {
  Query: {
    messages: async (_, args) => {
      return MESSAGES;
    },
  },
  Mutation: {
    message: (_, { base64, type, text }) => {
      addMessage({ base64, type, text });
      return MESSAGES;
    },
  },
};
