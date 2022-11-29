import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addingCreateAndUpdateColumnsToClient1669679394998
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "client",
      new TableColumn({
        name: "createdAt",
        type: "datetime",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
