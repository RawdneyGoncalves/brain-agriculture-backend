import { MigrationInterface, QueryRunner } from "typeorm";

export class Producer1705500046726 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "producers" (
                "id" SERIAL PRIMARY KEY,
                "cpfCnpj" VARCHAR(255) UNIQUE NOT NULL,
                "nomeProdutor" VARCHAR(255) NOT NULL,
                "nomeFazenda" VARCHAR(255) NOT NULL,
                "cidade" VARCHAR(255) NOT NULL,
                "estado" VARCHAR(255) NOT NULL,
                "areaTotal" FLOAT NOT NULL,
                "areaAgricultavel" FLOAT NOT NULL,
                "areaVegetacao" FLOAT NOT NULL,
                "culturasPlantadas" TEXT ARRAY NOT NULL
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "producers"');
  }
}
