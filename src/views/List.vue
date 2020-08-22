<template>
  <div class="container">
    <page-header
      :listIconShow="false"
      :backIconShow="true"
    />
  </div>
</template>

<script>
import PageHeader from '@/components/Header';
export default {
  name: 'List',
  components: {
    PageHeader
  }
  
}
</script>

<style>

</style>