import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicles extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  address!: string;

  @Column()
  phonenumber!: string;

  @Column()
  licenseplate!: string;

  @Column()
  vclass!: string;

  @Column()
  capacity!: string;

  @Column()
  fueltype!: string;

  @Column()
  country!: string;

  @Column()
  myear!: string;

  @Column()
  colour!: string;
}
