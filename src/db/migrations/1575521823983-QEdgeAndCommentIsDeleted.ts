import {MigrationInterface, QueryRunner } from 'typeorm'

export class QEdgeAndCommentIsDeleted1575521823983 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_22701dd7f0ff24ef2b606e265d"')
    await queryRunner.query('CREATE TYPE "q_edge_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('CREATE TYPE "q_edge_type_enum" AS ENUM(\'StagingQEdge\', \'QEdge\')')
    await queryRunner.query('CREATE TYPE "q_edge_thisentitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('CREATE TYPE "q_edge_thatentitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('CREATE TABLE "q_edge" ("id" character varying NOT NULL, "entityType" "q_edge_entitytype_enum" NOT NULL DEFAULT \'QEdge\', "type" "q_edge_type_enum" NOT NULL, "thisEntityId" character varying NOT NULL, "thisEntityType" "q_edge_thisentitytype_enum" NOT NULL, "thatEntityId" character varying NOT NULL, "thatEntityType" "q_edge_thatentitytype_enum" NOT NULL, "q" integer NOT NULL DEFAULT 0, "isDeleted" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "recordVersion" integer NOT NULL, CONSTRAINT "PK_da64bf461e662fa511d737f20d4" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE INDEX "IDX_af4de28d7eabe259e2b7b7b628" ON "q_edge" ("thisEntityId", "isDeleted") ')
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_e080377e8153738d8340f22084" ON "q_edge" ("thisEntityId", "thatEntityId") ')
    await queryRunner.query('ALTER TABLE "comment" ADD "isDeleted" boolean NOT NULL DEFAULT false')
    await queryRunner.query('ALTER TYPE "public"."edge_entitytype_enum" RENAME TO "edge_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "edge_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "entityType" TYPE "edge_entitytype_enum" USING "entityType"::"text"::"edge_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "entityType" SET DEFAULT \'Edge\'')
    await queryRunner.query('DROP TYPE "edge_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."edge_thisentitytype_enum" RENAME TO "edge_thisentitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "edge_thisentitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "thisEntityType" TYPE "edge_thisentitytype_enum" USING "thisEntityType"::"text"::"edge_thisentitytype_enum"')
    await queryRunner.query('DROP TYPE "edge_thisentitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."edge_thatentitytype_enum" RENAME TO "edge_thatentitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "edge_thatentitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "thatEntityType" TYPE "edge_thatentitytype_enum" USING "thatEntityType"::"text"::"edge_thatentitytype_enum"')
    await queryRunner.query('DROP TYPE "edge_thatentitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."effect_entitytype_enum" RENAME TO "effect_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "effect_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "effect" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "effect" ALTER COLUMN "entityType" TYPE "effect_entitytype_enum" USING "entityType"::"text"::"effect_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "effect" ALTER COLUMN "entityType" SET DEFAULT \'Effect\'')
    await queryRunner.query('DROP TYPE "effect_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."newsfeed_item_entitytype_enum" RENAME TO "newsfeed_item_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "newsfeed_item_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "newsfeed_item" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "newsfeed_item" ALTER COLUMN "entityType" TYPE "newsfeed_item_entitytype_enum" USING "entityType"::"text"::"newsfeed_item_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "newsfeed_item" ALTER COLUMN "entityType" SET DEFAULT \'NewsfeedItem\'')
    await queryRunner.query('DROP TYPE "newsfeed_item_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."comment_entitytype_enum" RENAME TO "comment_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "comment_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "comment" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "comment" ALTER COLUMN "entityType" TYPE "comment_entitytype_enum" USING "entityType"::"text"::"comment_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "comment" ALTER COLUMN "entityType" SET DEFAULT \'Comment\'')
    await queryRunner.query('DROP TYPE "comment_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."comment_receipt_entitytype_enum" RENAME TO "comment_receipt_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "comment_receipt_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "comment_receipt" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "comment_receipt" ALTER COLUMN "entityType" TYPE "comment_receipt_entitytype_enum" USING "entityType"::"text"::"comment_receipt_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "comment_receipt" ALTER COLUMN "entityType" SET DEFAULT \'CommentReceipt\'')
    await queryRunner.query('DROP TYPE "comment_receipt_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."receipt_entitytype_enum" RENAME TO "receipt_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "receipt_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "receipt" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "receipt" ALTER COLUMN "entityType" TYPE "receipt_entitytype_enum" USING "entityType"::"text"::"receipt_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "receipt" ALTER COLUMN "entityType" SET DEFAULT \'Receipt\'')
    await queryRunner.query('DROP TYPE "receipt_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."field_entitytype_enum" RENAME TO "field_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "field_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "entityType" TYPE "field_entitytype_enum" USING "entityType"::"text"::"field_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "entityType" SET DEFAULT \'Field\'')
    await queryRunner.query('DROP TYPE "field_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."field_thisentitytype_enum" RENAME TO "field_thisentitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "field_thisentitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "thisEntityType" TYPE "field_thisentitytype_enum" USING "thisEntityType"::"text"::"field_thisentitytype_enum"')
    await queryRunner.query('DROP TYPE "field_thisentitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."tile_entitytype_enum" RENAME TO "tile_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "tile_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "tile" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "tile" ALTER COLUMN "entityType" TYPE "tile_entitytype_enum" USING "entityType"::"text"::"tile_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "tile" ALTER COLUMN "entityType" SET DEFAULT \'Tile\'')
    await queryRunner.query('DROP TYPE "tile_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."chat_room_entitytype_enum" RENAME TO "chat_room_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "chat_room_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "chat_room" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "chat_room" ALTER COLUMN "entityType" TYPE "chat_room_entitytype_enum" USING "entityType"::"text"::"chat_room_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "chat_room" ALTER COLUMN "entityType" SET DEFAULT \'ChatRoom\'')
    await queryRunner.query('DROP TYPE "chat_room_entitytype_enum_old"')
    await queryRunner.query('ALTER TYPE "public"."notification_entitytype_enum" RENAME TO "notification_entitytype_enum_old"')
    await queryRunner.query('CREATE TYPE "notification_entitytype_enum" AS ENUM(\'Activity\', \'UnObject\', \'User\', \'NewsfeedItem\', \'Edge\', \'QEdge\', \'Field\', \'Comment\', \'DeviceInfo\', \'ChatRoom\', \'Notification\', \'CommentReceipt\', \'Receipt\', \'Effect\', \'CompletedAction\', \'ActionX\', \'Tile\')')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "entityType" TYPE "notification_entitytype_enum" USING "entityType"::"text"::"notification_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "entityType" SET DEFAULT \'Notification\'')
    await queryRunner.query('DROP TYPE "notification_entitytype_enum_old"')
    await queryRunner.query('CREATE INDEX "IDX_3278baee739561f172a6c7e646" ON "comment" ("collectionId", "isDeleted", "createdAt") ')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_3278baee739561f172a6c7e646"')
    await queryRunner.query('CREATE TYPE "notification_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "entityType" TYPE "notification_entitytype_enum_old" USING "entityType"::"text"::"notification_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "notification" ALTER COLUMN "entityType" SET DEFAULT \'Notification\'')
    await queryRunner.query('DROP TYPE "notification_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "notification_entitytype_enum_old" RENAME TO  "notification_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "chat_room_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "chat_room" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "chat_room" ALTER COLUMN "entityType" TYPE "chat_room_entitytype_enum_old" USING "entityType"::"text"::"chat_room_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "chat_room" ALTER COLUMN "entityType" SET DEFAULT \'ChatRoom\'')
    await queryRunner.query('DROP TYPE "chat_room_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "chat_room_entitytype_enum_old" RENAME TO  "chat_room_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "tile_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "tile" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "tile" ALTER COLUMN "entityType" TYPE "tile_entitytype_enum_old" USING "entityType"::"text"::"tile_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "tile" ALTER COLUMN "entityType" SET DEFAULT \'Tile\'')
    await queryRunner.query('DROP TYPE "tile_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "tile_entitytype_enum_old" RENAME TO  "tile_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "field_thisentitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "thisEntityType" TYPE "field_thisentitytype_enum_old" USING "thisEntityType"::"text"::"field_thisentitytype_enum_old"')
    await queryRunner.query('DROP TYPE "field_thisentitytype_enum"')
    await queryRunner.query('ALTER TYPE "field_thisentitytype_enum_old" RENAME TO  "field_thisentitytype_enum"')
    await queryRunner.query('CREATE TYPE "field_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "entityType" TYPE "field_entitytype_enum_old" USING "entityType"::"text"::"field_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "field" ALTER COLUMN "entityType" SET DEFAULT \'Field\'')
    await queryRunner.query('DROP TYPE "field_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "field_entitytype_enum_old" RENAME TO  "field_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "receipt_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "receipt" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "receipt" ALTER COLUMN "entityType" TYPE "receipt_entitytype_enum_old" USING "entityType"::"text"::"receipt_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "receipt" ALTER COLUMN "entityType" SET DEFAULT \'Receipt\'')
    await queryRunner.query('DROP TYPE "receipt_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "receipt_entitytype_enum_old" RENAME TO  "receipt_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "comment_receipt_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "comment_receipt" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "comment_receipt" ALTER COLUMN "entityType" TYPE "comment_receipt_entitytype_enum_old" USING "entityType"::"text"::"comment_receipt_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "comment_receipt" ALTER COLUMN "entityType" SET DEFAULT \'CommentReceipt\'')
    await queryRunner.query('DROP TYPE "comment_receipt_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "comment_receipt_entitytype_enum_old" RENAME TO  "comment_receipt_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "comment_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "comment" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "comment" ALTER COLUMN "entityType" TYPE "comment_entitytype_enum_old" USING "entityType"::"text"::"comment_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "comment" ALTER COLUMN "entityType" SET DEFAULT \'Comment\'')
    await queryRunner.query('DROP TYPE "comment_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "comment_entitytype_enum_old" RENAME TO  "comment_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "newsfeed_item_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "newsfeed_item" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "newsfeed_item" ALTER COLUMN "entityType" TYPE "newsfeed_item_entitytype_enum_old" USING "entityType"::"text"::"newsfeed_item_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "newsfeed_item" ALTER COLUMN "entityType" SET DEFAULT \'NewsfeedItem\'')
    await queryRunner.query('DROP TYPE "newsfeed_item_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "newsfeed_item_entitytype_enum_old" RENAME TO  "newsfeed_item_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "effect_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "effect" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "effect" ALTER COLUMN "entityType" TYPE "effect_entitytype_enum_old" USING "entityType"::"text"::"effect_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "effect" ALTER COLUMN "entityType" SET DEFAULT \'Effect\'')
    await queryRunner.query('DROP TYPE "effect_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "effect_entitytype_enum_old" RENAME TO  "effect_entitytype_enum"')
    await queryRunner.query('CREATE TYPE "edge_thatentitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "thatEntityType" TYPE "edge_thatentitytype_enum_old" USING "thatEntityType"::"text"::"edge_thatentitytype_enum_old"')
    await queryRunner.query('DROP TYPE "edge_thatentitytype_enum"')
    await queryRunner.query('ALTER TYPE "edge_thatentitytype_enum_old" RENAME TO  "edge_thatentitytype_enum"')
    await queryRunner.query('CREATE TYPE "edge_thisentitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "thisEntityType" TYPE "edge_thisentitytype_enum_old" USING "thisEntityType"::"text"::"edge_thisentitytype_enum_old"')
    await queryRunner.query('DROP TYPE "edge_thisentitytype_enum"')
    await queryRunner.query('ALTER TYPE "edge_thisentitytype_enum_old" RENAME TO  "edge_thisentitytype_enum"')
    await queryRunner.query('CREATE TYPE "edge_entitytype_enum_old" AS ENUM(\'ActionX\', \'Activity\', \'ChatRoom\', \'Comment\', \'CommentReceipt\', \'CompletedAction\', \'DeviceInfo\', \'Edge\', \'Effect\', \'Field\', \'NewsfeedItem\', \'Notification\', \'Receipt\', \'Tile\', \'UnObject\', \'User\')')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "entityType" DROP DEFAULT')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "entityType" TYPE "edge_entitytype_enum_old" USING "entityType"::"text"::"edge_entitytype_enum_old"')
    await queryRunner.query('ALTER TABLE "edge" ALTER COLUMN "entityType" SET DEFAULT \'Edge\'')
    await queryRunner.query('DROP TYPE "edge_entitytype_enum"')
    await queryRunner.query('ALTER TYPE "edge_entitytype_enum_old" RENAME TO  "edge_entitytype_enum"')
    await queryRunner.query('ALTER TABLE "comment" DROP COLUMN "isDeleted"')
    await queryRunner.query('DROP INDEX "IDX_e080377e8153738d8340f22084"')
    await queryRunner.query('DROP INDEX "IDX_af4de28d7eabe259e2b7b7b628"')
    await queryRunner.query('DROP TABLE "q_edge"')
    await queryRunner.query('DROP TYPE "q_edge_thatentitytype_enum"')
    await queryRunner.query('DROP TYPE "q_edge_thisentitytype_enum"')
    await queryRunner.query('DROP TYPE "q_edge_type_enum"')
    await queryRunner.query('DROP TYPE "q_edge_entitytype_enum"')
    await queryRunner.query('CREATE INDEX "IDX_22701dd7f0ff24ef2b606e265d" ON "comment" ("collectionId", "createdAt") ')
  }

}
