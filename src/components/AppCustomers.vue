<template>
  <div>

   

  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
  data () {
    return {
      customers: customerService.list()
    }
  },

  created () {
    
  }
}
</script>

