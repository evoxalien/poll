// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Option, Poll } = initSchema(schema);

export {
  Option,
  Poll
};