<template>
<div h-full flex justify-center items-center p-50>
  <div bg-white bg-op-90 w-full h-full b-rd-20 border border-gray-300 p-30 rounded-10>
    <div p-35>
      <n-gradient-text flex items-center text-26 type="info">
        我的角色是：<n-gradient-text type="error">{{ userStore.name }}</n-gradient-text>
      </n-gradient-text>

      <n-gradient-text text-16 mt-10 type="info">我有这些页面的权限：</n-gradient-text>

      <ul mt-10>
        <li
          v-for="item in permissionStore.menus"
          :key="item.name"
          cursor-pointer
          hover-color-red
          @click="$router.push(item.path)"
        >
          {{ item.meta?.title }}
        </li>
      </ul>

      <n-button type="info" mt-20 size="small" @click="logout">换个角色看看</n-button>
    </div>
  </div>
</div>

</template>

<script setup>
import { usePermissionStore } from '../../store/modules/permission'
import { useUserStore } from '../../store/modules/user'

const permissionStore = usePermissionStore()
const userStore = useUserStore()

function logout() {
  userStore.logout()
  $message.success('已退出登录')
}
</script>