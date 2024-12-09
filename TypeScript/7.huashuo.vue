<template>
  <!-- 最外层容器，使用规定的 menu-wrapper 类名 -->
  <div class="menu-wrapper">
    <!-- 遍历菜单配置，渲染每个一级菜单项 -->
    <div
      v-for="item in menuConfig"
      :key="item.title"
      :data-testid="`first-level-${item.title.toLowerCase()}`"
    >
      <!-- 菜单项标题 -->
      <div>{{ item.title }}</div>
      
      <!-- 展开/收起按钮，只在有子菜单项时显示 -->
      <button
        v-if="item.subItems && item.subItems.length"
        :data-testid="`button-${item.title.toLowerCase()}`"
        @click="toggleSubmenu(item.title)"
      >
        {{ isExpanded(item.title) ? 'Hide' : 'Expand' }}
      </button>
      
      <!-- 子菜单列表 -->
      <ul
        v-if="item.subItems && item.subItems.length"
        :data-testid="`ul-${item.title.toLowerCase()}`"
      >
        <!-- 遍历渲染子菜单项 -->
        <li
          v-for="subItem in item.subItems"
          :key="subItem"
          :data-testid="`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`"
          v-show="isExpanded(item.title)"
        >
          {{ subItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  
  // 组件属性定义
  props: {
    // menuConfig: 接收菜单配置数组
    menuConfig: {
      type: Array,
      required: true,
      // 属性验证：确保数据格式正确
      validator: function(value) {
        return value.every(item => 
          // 每个菜单项必须有 title，且为字符串
          item.title && 
          typeof item.title === 'string' &&
          // subItems 如果存在必须是数组
          (!item.subItems || Array.isArray(item.subItems))
        )
      }
    }
  },
  
  // 组件内部状态
  data() {
    return {
      // 当前展开的菜单标题，只允许同时展开一个
      expandedMenu: null
    }
  },
  
  // 组件方法
  methods: {
    // 切换子菜单的展开状态
    toggleSubmenu(title) {
      // 如果点击的是当前展开的菜单，则收起
      if (this.expandedMenu === title) {
        this.expandedMenu = null
      } else {
        // 否则收起其他菜单，展开当前点击的菜单
        this.expandedMenu = title
      }
    },
    
    // 检查指定菜单是否展开
    isExpanded(title) {
      return this.expandedMenu === title
    }
  }
}
</script>