/* eslint-disable indent */
import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

type TSocialPlatform = 'instagram' | 'twitter' | 'linkedin' | 'github';
type TGender = 'male' | 'female';
type TInterest = 'men' | 'women';
type TReligion = 'islam' | 'hindu' | 'christian';

@ObjectType()
class IEducation {
  @Field()
  institute!: string;

  @Field({ nullable: true })
  concentration!: string;

  @Field(() => Date)
  from!: Date;

  @Field(() => Date, { nullable: true })
  to!: Date;

  @Field({ nullable: true })
  present!: boolean;

  @Field({ nullable: true })
  description!: string;
}

@ObjectType()
class IWork {
  @Field()
  company!: string;

  @Field()
  position!: string;

  @Field({ nullable: true })
  from!: Date;

  @Field({ nullable: true })
  to!: Date;

  @Field({ nullable: true })
  present!: boolean;

  @Field({ nullable: true })
  description!: string;
}

@ObjectType()
class ISocial {
  @Field()
  platform!: TSocialPlatform;

  @Field()
  link!: string;
}

@ObjectType()
class IWebsite {
  @Field()
  link!: string;
}

// interface IUser {
//   fullname: string;
//   username: string;
//   email: string;
//   password: string;
//   bio: string;
//   dp: string;
//   cover: string;
//   hometown: string;
//   currentCity: string;
//   relationship: string;
//   work: [IWork];
//   education: [IEducation];
//   website: [IWebsite];
//   social: [ISocial];
//   phone: string;
//   gender: IGender;
//   interest: IInterest;
//   religion: IReligion;
// }

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field()
  @Column({ nullable: true })
  fullname!: string;

  @Field()
  @Column({ unique: true, nullable: true })
  username!: string;

  @Field()
  @Column({ unique: true, nullable: true })
  email!: string;

  @Field()
  @Column()
  password!: string;

  @Field()
  @Column({ nullable: true })
  bio!: string;

  @Field()
  @Column({ nullable: true })
  dp!: string;

  @Field()
  @Column({ nullable: true })
  cover!: string;

  @Field()
  @Column({ nullable: true })
  hometown!: string;

  @Field()
  @Column({ nullable: true })
  currentCity!: string;

  @Field()
  @Column({ nullable: true })
  relationship!: string;

  @Field()
  @Column({ nullable: true })
  phone!: string;

  @Field()
  @Column({ nullable: true })
  gender!: TGender;

  @Field()
  @Column({ nullable: true })
  interest!: TInterest;

  @Field()
  @Column({ nullable: true })
  religion!: TReligion;

  @Field(() => [IWork])
  @Column('json', { array: true, nullable: true })
  work!: {
    company: string;
    position: string;
    from: Date;
    to?: Date;
    present?: boolean;
    description?: string;
  };

  @Field(() => [IEducation])
  @Column('json', { array: true, nullable: true })
  education!: {
    institute: string;
    concentration?: string;
    from: Date;
    to?: Date;
    present?: boolean;
    description?: string;
  };

  @Field(() => [IWebsite])
  @Column('json', { array: true, nullable: true })
  website!: {
    platform: TSocialPlatform;
    link: string;
  };

  @Field(() => [ISocial])
  @Column('json', { array: true, nullable: true })
  social!: {
    link: string;
  };

  @Field()
  @CreateDateColumn({ nullable: true })
  createdAt!: Date;
}
