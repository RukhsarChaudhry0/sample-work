/* NOTE: This file is auto-generated by /bin/airtable/sync-color-combos.ts, don't override manually */

import { colors } from 'src/domain/colors'
import { BaseColorCombo } from './types'

const data = {
  bv08_blue_violet_9d7eb9_bv000_iridescent_mauve_e5deee: {
    id: 'bv08_blue_violet_9d7eb9_bv000_iridescent_mauve_e5deee',
    text: colors.bv08_blue_violet_9d7eb9,
    background: colors.bv000_iridescent_mauve_e5deee,
  },
  g20_wax_white_ecf5da_special_black_231f20: {
    id: 'g20_wax_white_ecf5da_special_black_231f20',
    text: colors.g20_wax_white_ecf5da,
    background: colors.special_black_231f20,
  },
  b00_frost_blue_ddf1f2_b06_peacock_blue_01b2e6: {
    id: 'b00_frost_blue_ddf1f2_b06_peacock_blue_01b2e6',
    text: colors.b00_frost_blue_ddf1f2,
    background: colors.b06_peacock_blue_01b2e6,
  },
  rv04_shock_pink_f6a3bf_y00_barium_yellow_fffcdf: {
    id: 'rv04_shock_pink_f6a3bf_y00_barium_yellow_fffcdf',
    text: colors.rv04_shock_pink_f6a3bf,
    background: colors.y00_barium_yellow_fffcdf,
  },
  b18_lapis_lazuli_0f89ca_b000_pale_porcelain_blue_e5f3f3: {
    id: 'b18_lapis_lazuli_0f89ca_b000_pale_porcelain_blue_e5f3f3',
    text: colors.b18_lapis_lazuli_0f89ca,
    background: colors.b000_pale_porcelain_blue_e5f3f3,
  },
  b69_stratosphere_blue_1d65af_e000_pale_fruit_pink_fff3eb: {
    id: 'b69_stratosphere_blue_1d65af_e000_pale_fruit_pink_fff3eb',
    text: colors.b69_stratosphere_blue_1d65af,
    background: colors.e000_pale_fruit_pink_fff3eb,
  },
  rv19_red_violet_d26aa9_r0000_pink_beryl_fef1eb: {
    id: 'rv19_red_violet_d26aa9_r0000_pink_beryl_fef1eb',
    text: colors.rv19_red_violet_d26aa9,
    background: colors.r0000_pink_beryl_fef1eb,
  },
} as const

export type ColorComboId = keyof typeof data
export type ColorCombo = Readonly<BaseColorCombo<ColorComboId>>
export const colorCombos: (Record<ColorComboId, ColorCombo> & typeof data) = data
