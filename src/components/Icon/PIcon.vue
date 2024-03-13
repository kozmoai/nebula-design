<template>
  <component :is="component" class="p-icon" :class="iconSizeClass" />
</template>


<script lang="ts" setup>
  import * as outlinedHeroIcons from '@heroicons/vue/24/outline/esm/index'
  import * as solidHeroIcons from '@heroicons/vue/24/solid/esm/index'
  import { computed } from 'vue'
  import * as nebulaIcons from '@/components/Icon/icons'
  import { Icon, NebulaIcon } from '@/types/icon'

  const props = defineProps<{
    icon: Icon,
    solid?: boolean,
    size?: 'small' | 'large',
  }>()

  const component = computed(() => {
    if (isNebulaIcon(props.icon)) {
      // eslint-disable-next-line import/namespace
      return nebulaIcons[props.icon]
    }

    if (props.solid) {
      // eslint-disable-next-line import/namespace
      return solidHeroIcons[props.icon]
    }

    // eslint-disable-next-line import/namespace
    return outlinedHeroIcons[props.icon]
  })

  function isNebulaIcon(value: Icon): value is NebulaIcon {
    const icons = Object.keys(nebulaIcons)

    return icons.includes(value)
  }

  const iconSizeClass = computed(() => props.size && `p-icon--${props.size}`)
</script>

<style>
.p-icon { @apply
  w-5
  h-5
}

.p-icon--small { @apply
  w-4
  h-4
}

.p-icon--large { @apply
  w-6
  h-6
}
</style>