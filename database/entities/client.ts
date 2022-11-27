import { Entity, PrimaryGeneratedColumn, Column } from "typeorm/browser";

@Entity({ name: "client", schema: "public" })
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar")
  nome!: string;

  @Column("varchar")
  razaoSocial!: string;

  @Column("varchar")
  cpfCnpj!: string;

  @Column("varchar")
  endereco!: string;

  @Column("varchar")
  municipio!: string;

  @Column("varchar")
  uf!: string;
}
