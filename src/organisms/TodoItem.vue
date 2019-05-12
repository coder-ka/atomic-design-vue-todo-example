<template>
  <div class="bg-white rounded mb-4 shadow">
    <div class="pl-4 pr-3 pt-6 pb-4">
      <slot name="header"></slot>
    </div>
    <div class="pl-4 pr-3 py-1">
      <slot name="content"></slot>
    </div>
    <div class="pl-4 pr-3 pt-4 pb-3 flex flex-row-reverse">
      <slot name="footer"></slot>
    </div>
  </div>
</template>