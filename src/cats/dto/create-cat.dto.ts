import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly color: string;
  @Field()
  readonly weight: string;
  @Field()
  readonly food: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}
