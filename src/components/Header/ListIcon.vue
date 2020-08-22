<template>
  <div class="list-icon">
    <i 
      class="iconfont icon-cc-list"
      @click="goListPage"
      v-show="listIconShow"
      >
    </i>
  </div>
</template>

<script>
export default {
  name: 'HeaderListIcon',
  methods: {
    goListPage () {
      this.$router.push('/list');
    }
  },
  props: {
    listIconShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-icon {
    display: flex;
    width: .44rem;
    height: .44rem;
    justify-content: center;
    align-items: center;
    color: #000;
  }
  .iconfont {
    font-size: .25rem;
  }

</style>