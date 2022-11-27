import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class creatingClientTable1669512896420 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "razaoSocial",
            type: "varchar",
          },
          {
            name: "cpfCnpj",
            type: "varchar",
          },
          {
            name: "endereco",
            type: "varchar",
          },
          {
            name: "municipio",
            type: "varchar",
          },
          {
            name: "uf",
            type: "varchar",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
