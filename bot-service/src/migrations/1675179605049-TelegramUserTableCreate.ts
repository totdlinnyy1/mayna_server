import {MigrationInterface, QueryRunner} from 'typeorm'

export class TelegramUserTableCreate1675179605049
  implements MigrationInterface {
  name = 'TelegramUserTableCreate1675179605049'

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "telegram-users" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP WITH TIME ZONE,
                "version" integer NOT NULL DEFAULT '1',
                "user_id" integer NOT NULL,
                CONSTRAINT "UQ_c427984ecf05553f861714650ce" UNIQUE ("user_id"),
                CONSTRAINT "PK_654318ad7ce5c09e022009ca165" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE INDEX "IDX_c427984ecf05553f861714650c" ON "telegram-users" ("user_id")
        `)
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX "public"."IDX_c427984ecf05553f861714650c"
        `)
    await queryRunner.query(`
            DROP TABLE "telegram-users"
        `)
  }
}
