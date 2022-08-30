import {MigrationInterface, QueryRunner } from 'typeorm'

export class ActionXIsDeleted1575327178282 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_189ac9ec3efdd25d3069116c3b"')
    await queryRunner.query('ALTER TABLE "action_x" ADD "isDeleted" boolean NOT NULL DEFAULT false')
    await queryRunner.query('ALTER TYPE "public"."action_x_entitytype_enum" RENAME TO "action_x_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "action_x_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\')')
    await queryRunner.query('ALTER TABLE "action_x" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "action_x" ALTER COLUMN "entityType" TYPE "action_x_entitytype_enum" USING "entityType"::"text"::"action_x_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "action_x" ALTER COLUMN "entityType" SET DEFAULT \'ActionX\'')
    await queryRunner.query('DROP TYPE "action_x_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."un_object_entitytype_enum" RENAME TO "un_object_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "un_object_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\')')
    await queryRunner.query('ALTER TABLE "un_object" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "un_object" ALTER COLUMN "entityType" TYPE "un_object_entitytype_enum" USING "entityType"::"text"::"un_object_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "un_object" ALTER COLUMN "entityType" SET DEFAULT \'UnObject\'')
    await queryRunner.query('DROP TYPE "un_object_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."completed_action_entitytype_enum" RENAME TO "completed_action_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "completed_action_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\')')
    await queryRunner.query('ALTER TABLE "completed_action" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "completed_action" ALTER COLUMN "entityType" TYPE "completed_action_entitytype_enum" USING "entityType"::"text"::"completed_action_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "completed_action" ALTER COLUMN "entityType" SET DEFAULT \'CompletedAction\'')
    await queryRunner.query('DROP TYPE "completed_action_entitytype_enum_old"')
    await queryRunner.query('CREATE INDEX "IDX_3b78993c8aa24267062cbb234b" ON "action_x" ("isDeleted", "unObjectId") ')
    await queryRunner.query('CREATE INDEX "IDX_9f26083b747af3e0084817655e" ON "action_x" ("isDeleted", "package") ')
    await queryRunner.query('CREATE INDEX "IDX_30e34c9d2999f633d249b411c9" ON "action_x" ("isDeleted", "name") ')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_30e34c9d2999f633d249b411c9"')
    await queryRunner.query('DROP INDEX "IDX_9f26083b747af3e0084817655e"')
    await queryRunner.query('DROP INDEX "IDX_3b78993c8aa24267062cbb234b"')
    await queryRunner.query('CREATE TYPE "completed_action_entitytype_enum_old" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\')')
    await queryRunner.query('ALTER TABLE "completed_action" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "completed_action" ALTER COLUMN "entityType" TYPE "completed_action_entitytype_enum_old" USING "entityType"::"text"::"completed_action_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "completed_action" ALTER COLUMN "entityType" SET DEFAULT \'CompletedAction\'')
    await queryRunner.query('DROP TYPE "completed_action_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "completed_action_entitytype_enum_old" RENAME TO  "completed_action_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "un_object_entitytype_enum_old" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\')')
    await queryRunner.query('ALTER TABLE "un_object" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "un_object" ALTER COLUMN "entityType" TYPE "un_object_entitytype_enum_old" USING "entityType"::"text"::"un_object_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "un_object" ALTER COLUMN "entityType" SET DEFAULT \'UnObject\'')
    await queryRunner.query('DROP TYPE "un_object_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "un_object_entitytype_enum_old" RENAME TO  "un_object_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "action_x_entitytype_enum_old" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\')')
    await queryRunner.query('ALTER TABLE "action_x" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "action_x" ALTER COLUMN "entityType" TYPE "action_x_entitytype_enum_old" USING "entityType"::"text"::"action_x_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "action_x" ALTER COLUMN "entityType" SET DEFAULT \'ActionX\'')
    await queryRunner.query('DROP TYPE "action_x_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "action_x_entitytype_enum_old" RENAME TO  "action_x_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "action_x" DROP COLUMN "isDeleted"')
    await queryRunner.query('CREATE INDEX "IDX_189ac9ec3efdd25d3069116c3b" ON "action_x" ("package") ')
  }

}
