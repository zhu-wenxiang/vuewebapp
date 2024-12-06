<template>
    <div> 
      {{title}}
    </div>
  </template>
  
  <script>
  export default {
    name: "Component",
    data() {
      return {
        title: process.env.TEST
      };
    }
  };
  </script>