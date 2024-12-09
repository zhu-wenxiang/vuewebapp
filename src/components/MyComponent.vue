<template>
  <div>
    <h3>this is in dev title</h3>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      title: process.env.VUE_ENV_TEST
    };
  }
};
</script>