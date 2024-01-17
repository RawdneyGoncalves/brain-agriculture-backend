import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Producer")
class Producer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, unique: true })
  cpfCnpj!: string;

  @Column({ type: "varchar", length: 255 })
  nomeProdutor!: string;

  @Column({ type: "varchar", length: 255 })
  nomeFazenda!: string;

  @Column({ type: "varchar", length: 255 })
  cidade!: string;

  @Column({ type: "varchar", length: 255 })
  estado!: string;

  @Column({ type: "float" })
  areaTotal!: number;

  @Column({ type: "float" })
  areaAgricultavel!: number;

  @Column({ type: "float" })
  areaVegetacao!: number;

  @Column("simple-array", { nullable: false })
  culturasPlantadas!: string[];
}

export default Producer;
