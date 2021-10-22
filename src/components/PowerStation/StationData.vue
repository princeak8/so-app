<template>
    <tr>
        <td>RIVERS IPP GS</td>
        <td>
            <table border="1">
                <thead>
                    <th>GT1</th>
                    <th>GT2</th>
                    <th>GT3</th>
                    <th>GT4</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p><b>POWER:</b>402mw</p>
                            <p><b>MVAR:</b> 20mx</p>
                        </td>
                        <td>
                            <p><b>POWER:</b>402mw</p>
                            <p><b>MVAR:</b> 20mx</p>
                        </td>
                        <td>
                            <p><b>POWER:</b>402mw</p>
                            <p><b>MVAR:</b> 20mx</p>
                        </td>
                        <td>
                            <p><b>POWER:</b>402mw</p>
                            <p><b>MVAR:</b> 20mx</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    "name",
    "id",
    "stationId",
    "transmissionData",
    "connections",
    "mappedLines",
    "line132",
  },
  computed: {
    textColor() {
      if(this.text.includes('loading')) {
        return "nonActiveText"
      }
      return "activeText"
    }
  }
};
</script>
