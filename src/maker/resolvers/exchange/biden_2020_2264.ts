import { LoggerFactory, AppLogger } from 'src/utils/logger'
import { ChatRoomActionContextApi } from 'src/types'
import { GeneratorConfig } from './mechanics/engine/types'
import { ReactionFnMap, BeforeEnterAsset } from 'src/enginev3/types'
import { registerReactionFnMap } from 'src/enginev3'
import { ActionResolver } from 'src/maker/types'
import { Engine } from './mechanics/engine/engine'
import { NPCId } from 'src/domain/npcs'
import { config } from './mechanics/configs/biden_2020_2264'

export const ID: NPCId = 'biden_2020_2264'

//const logger = LoggerFactory('LoveDoctor', 'NPC')

class JoeBiden {

  public constructor(config: GeneratorConfig) {
    this.engine = new Engine(config)
    this.logger = LoggerFactory(ID, 'NPC')
  }

  private readonly logger: AppLogger
  private engine: Engine

  private onBeforeEnter = async (): Promise<BeforeEnterAsset[]> => {
    this.logger.log('onBeforeEnter')
    return this.engine.onBeforeEnter()
  }

  private onEnter = (api: ChatRoomActionContextApi): Promise<any> => {
    this.logger.info('onEnter')
    return Promise.all([
      this.engine.onEnter(api),
    ])
  }

  private onReset = (api: ChatRoomActionContextApi): Promise<any> => {
    this.logger.info('onReset')
    return Promise.all([
      this.engine.onReset(api),
    ])
  }

  private registerReactionFns = (): Promise<any> => {
    const reactions: ReactionFnMap = {
      // TODO Add any reactions here
    }
    this.engine.registerInteractions(reactions)
    return registerReactionFnMap(ID, reactions)
  }

  public createResolver = (): ActionResolver => {
    return {
      unObjectId: ID,
      onEnter: this.onEnter,
      onLoad: this.registerReactionFns,
      onReset: this.onReset,
      onBeforeEnter: this.onBeforeEnter,
    }
  }

}

const npc = new JoeBiden(config)

export default npc.createResolver()
