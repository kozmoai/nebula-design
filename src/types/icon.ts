import * as outlinedHeroIcons from '@heroicons/vue/24/outline'
import * as solidHeroIcons from '@heroicons/vue/24/solid'
import * as nebulaIcons from '@/components/Icon/icons'

export type SolidHeroIcon = keyof typeof solidHeroIcons
export type OutlinedHeroIcon = keyof typeof outlinedHeroIcons
export type HeroIcon = SolidHeroIcon | OutlinedHeroIcon
export type NebulaIcon = keyof typeof nebulaIcons
export type Icon = HeroIcon | NebulaIcon