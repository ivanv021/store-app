<template>
  <div>


  </div>
</template>

<script>
import { productService } from '../services/ProductService'
export default {
  data () {
    return {
      products: productService.list()
    }
  },

  created () {
    
  }
}
</script>

