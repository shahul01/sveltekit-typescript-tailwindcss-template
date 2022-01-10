<script lang="ts">
  let name:string = "world";
  // name = 123
</script>

<div class="my-container custom-global-class">
  <p class="m-4 p-2 font-bold">
    Hello {name}

  </p>

</div>

<style lang="postcss">
  .my-container {
    @apply w-full;
    @apply h-[100vh];
  }
</style>