/* eslint-disable indent */
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../models/User';

@InputType()
class UsernamePasswordInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello(): string {
    return 'World';
  }

  @Query(() => [User])
  async users() {
    return User.find({});
  }

  @Mutation(() => User)
  async register(
    @Arg('options') options: UsernamePasswordInput
  ): Promise<User> {
    const newUser = await User.create({
      email: options.email,
      password: options.password,
    }).save();

    return newUser;
  }
}
