<template>
  <div class="back-icon">
    <i 
      class="iconfont icon-arrow-left"
      @click="goBack"
      v-show="backIconShow"
      >
    </i>
  </div>
</template>

<script>
export default {
  name: 'HeaderBackIcon',
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  },
  props: {
    backIconShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .back-icon {
    display: flex;
    width: .44rem;
    height: .44rem;
    align-items: center;
    justify-content: center;
    color: #000;
  }

</style>