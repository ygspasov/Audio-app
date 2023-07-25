<template>
  <div>
    <div class="flex items-center justify-center ml-4 sm:ml-0">
      <table class="text-sm border-separate border-spacing-y-2">
        <thead class="w-full">
          <tr class="w-full">
            <th class="td-class">Song</th>
            <th class="td-class">Artist</th>
            <th class="td-class">Status</th>
          </tr>
        </thead>
        <tbody class="">
          <tr class="tr-class">
            <td class="td-class">Frodo Baggins</td>
            <td class="td-class">Fellowship of the Ring</td>
            <td class="td-class flex">
              <span
                class="mx-auto rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased"
                >Active</span
              >
            </td>
          </tr>

          <tr class="tr-class">
            <td class="td-class">Peregrin Took</td>
            <td class="td-class">Fellowship of the Ring</td>
            <td class="td-class flex">
              <span
                class="mx-auto rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased"
                >Active</span
              >
            </td>
          </tr>

          <tr class="tr-class">
            <td class="td-class">Bilbo Baggins</td>
            <td class="td-class">Thorin’s Company</td>
            <td class="td-class flex">
              <span
                class="mx-auto rounded-md bg-yellow-600/50 px-4 py-px text-xs font-semibold uppercase text-yellow-900 antialiased"
                >Pending</span
              >
            </td>
          </tr>
          <tr class="tr-class">
            <td class="td-class suspended-text">Boromir of Gondor</td>
            <td class="td-class suspended-text">Fellowship of the Ring</td>
            <td class="td-class flex">
              <span
                class="mx-auto rounded-md bg-red-600/50 px-4 py-px text-xs font-semibold uppercase text-red-100 antialiased"
                >Suspended</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@media only screen and (max-width: 640px) {
  thead {
    display: none !important;
  }
}
.suspended-text {
  @apply text-gray-500;
}
.tr-class {
  @apply flex flex-col mb-4 sm:table-row;
}

.td-class {
  @apply px-4 py-3 bg-gray-100 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg;
}
</style>
