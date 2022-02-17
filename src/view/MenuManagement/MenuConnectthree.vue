<template>
<!--연결된 메뉴 순서변경 페이지-->
  <div class="connectmenu_container">
    <draggable class="dragArea list-group w-full" :list="list" @change="log">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center connect_drag_text"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuConnectthree.css';
</style>