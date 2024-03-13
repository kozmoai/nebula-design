<template>
  <ComponentPage
    title="Links"
    :demos="[
      { title: 'Local' },
      { title: 'External' },
    ]"
  >
    <template #local>
      <p-link to="/icons">
        Link to Icons page
      </p-link>
    </template>

    <template #external>
      <p-link to="https://nebula.io">
        Link to nebula.io
      </p-link>
    </template>
  </ComponentPage>
</template>

<script lang="ts" setup>
  import ComponentPage from '@/demo/components/ComponentPage.vue'
</script>