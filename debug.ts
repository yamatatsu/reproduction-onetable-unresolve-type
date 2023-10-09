import {OneSchema} from "dynamodb-onetable";

const schema = {
  format: "onetable:1.1.0",
  version: "1.0.0",
  indexes: {
    primary: { hash: "pk", sort: "sk" },
  },
  models: {
    User: {
      pk: { type: String, value: "user#${userId}" },
      sk: { type: String, value: "user#${userId}" },
      userId: { type: String, required: true },
    },
  } as const,
  params: {},
} satisfies OneSchema;

// No Error
schema.foo.bar;
