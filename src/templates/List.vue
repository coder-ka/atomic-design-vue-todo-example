<template>
  <div class="w-screen h-screen flex justify-center bg-grey-lighter">
    <div class="container mt-20 max-w-sm">
      <div class="flex justify-end">
        <slot name="filter"></slot>
      </div>
      <div class="mt-4">
        <slot name="items"></slot>
      </div>
      <div class="mt-6">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>