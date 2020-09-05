import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CatInput {
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
