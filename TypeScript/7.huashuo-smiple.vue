<template>
  <div class="menu-wrapper">
    <div v-for="item in menuConfig" :key="item.title" :data-testid="`first-level-${item.title.toLowerCase()}`">
      <div>{{ item.title }}</div>

      <button v-if="item.subItems?.length" :data-testid="`button-${item.title.toLowerCase()}`"
        @click="expandedMenu = expandedMenu === item.title ? null : item.title">
        {{ expandedMenu === item.title ? 'Hide' : 'Expand' }}
      </button>

      <ul v-if="item.subItems?.length" :data-testid="`ul-${item.title.toLowerCase()}`">
        <li v-for="subItem in item.subItems" :key="subItem"
          :data-testid="`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`" v-show="expandedMenu === item.title">
          {{ subItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuConfig: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expandedMenu: null
    }
  }
}
</script>