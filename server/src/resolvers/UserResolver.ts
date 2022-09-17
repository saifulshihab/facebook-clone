import bcrypt from 'bcryptjs';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { User } from '../models/User';
import { ICommonErrors } from '../types';

@InputType()
class UsernamePasswordInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@ObjectType()
class UserRegistrationResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => ICommonErrors, { nullable: true })
  errors?: ICommonErrors;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return User.find({});
  }

  @Mutation(() => UserRegistrationResponse)
  async register(
    @Arg('inputs') inputs: UsernamePasswordInput
  ): Promise<UserRegistrationResponse> {
    const { email, password } = inputs;

    const userWithEmail = await User.findOne({ email });

    if (userWithEmail) {
      return {
        errors: {
          message: 'Email is registered',
        },
      };
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      password: passwordHashed,
    }).save();

    return { user: newUser };
  }
}
