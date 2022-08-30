import {MigrationInterface, QueryRunner } from 'typeorm'

export class NotificationEventEid1574121712465 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "notification" ADD "eventEid" character varying')
    await queryRunner.query('ALTER TYPE "public"."notification_type_enum" RENAME TO "notification_type_enum_old"')
    await queryRunner.query('CREATE TYPE "notification_type_enum" AS ENUM(\'ChatRoomInviteNotification\', \'ChatRoomCommentNotification\', \'ChatRoomActionNotification\', \'NewsfeedItemCommentNotification\', \'NewsfeedItemReactionNotification\', \'CommentReactionNotification\')')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "type" TYPE "notification_type_enum" USING "type"::"text"::"notification_type_enum"')
    await queryRunner.query('DROP TYPE "notification_type_enum_old"')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE TYPE "notification_type_enum_old" AS ENUM(\'ChatRoomCommentNotification\', \'ChatRoomInviteNotification\', \'CommentReactionNotification\', \'NewsfeedItemCommentNotification\', \'NewsfeedItemReactionNotification\')')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "type" TYPE "notification_type_enum_old" USING "type"::"text"::"notification_type_enum_old"')
    await queryRunner.query('DROP TYPE "notification_type_enum"')
    await queryRunner.query('ALTER TYPE "notification_type_enum_old" RENAME TO  "notification_type_enum"')
    await queryRunner.query('ALTER TABLE "notification" DROP COLUMN "eventEid"')
  }

}
