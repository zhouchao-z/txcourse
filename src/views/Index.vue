<template>
  <div class="container">
    <page-header 
      :listIconShow="true"
      :backIconShow="false"
    />
  </div>
</template>

<script>
import PageHeader from '@/components/Header';
export default {
  name: 'Index',
  components: {
    PageHeader
  }
  
}
</script>

<style>
  div {
    color: red;
    font-size: .16rem;
  }
</style>