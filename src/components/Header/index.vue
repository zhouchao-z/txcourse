<template>
  <div class="header">
    <header-back-icon 
      :backIconShow="backIconShow"
    />
    <header-logo />
    <header-list-icon 
      :listIconShow="listIconShow"
    />
  </div>
</template>

<script>
import HeaderListIcon from './ListIcon';
import HeaderLogo from './Logo';
import HeaderBackIcon from './BackIcon';

export default {
  name: 'Index',
  components: {
    HeaderListIcon,
    HeaderLogo,
    HeaderBackIcon
  },
  props: {
    listIconShow: {
      type: Boolean,
      default: true
    },
    backIconShow: {
      type: Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }

</style>