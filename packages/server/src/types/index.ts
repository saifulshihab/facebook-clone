import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ICommonErrors {
  @Field()
  message!: string;
}
