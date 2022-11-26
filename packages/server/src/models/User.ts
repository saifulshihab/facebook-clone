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
@Entity()
class IEducation {
  @Field()
  @Column()
  institute!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  concentration!: string;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  from!: Date;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  to!: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  present!: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description!: string;
}

@ObjectType()
@Entity()
class IWork {
  @Field()
  @Column()
  company!: string;

  @Field()
  @Column()
  position!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  from!: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  to!: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  present!: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description!: string;
}

@ObjectType()
@Entity()
class ISocial {
  @Field()
  @Column()
  platform!: TSocialPlatform;

  @Field()
  @Column()
  link!: string;
}

@ObjectType()
@Entity()
class IWebsite {
  @Field()
  @Column()
  link!: string;
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  fullname!: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  username!: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  email!: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  phone!: string;

  @Field()
  @Column()
  password!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  bio!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  dp!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  cover!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  hometown!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  currentCity!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  relationship!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  gender!: TGender;

  @Field({ nullable: true })
  @Column({ nullable: true })
  interest!: TInterest;

  @Field({ nullable: true })
  @Column({ nullable: true })
  religion!: TReligion;

  @Field(() => [IWork], { nullable: true })
  @Column('json', { array: true, nullable: true })
  work!: {
    company: string;
    position: string;
    from: Date;
    to?: Date;
    present?: boolean;
    description?: string;
  };

  @Field(() => [IEducation], { nullable: true })
  @Column('json', { array: true, nullable: true })
  education!: {
    institute: string;
    concentration?: string;
    from: Date;
    to?: Date;
    present?: boolean;
    description?: string;
  };

  @Field(() => [IWebsite], { nullable: true })
  @Column('json', { array: true, nullable: true })
  website!: {
    platform: TSocialPlatform;
    link: string;
  };

  @Field(() => [ISocial], { nullable: true })
  @Column('json', { array: true, nullable: true })
  social!: {
    link: string;
  };

  @Field({ nullable: true })
  @CreateDateColumn({ nullable: true })
  createdAt!: Date;
}
