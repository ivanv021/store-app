<template>
  <div>

     <ul>
      <li v-for="(customer, index) in customers" :key="index">{{ customer.fullName }} <button @click='remove(customer)'>Remove</button></li>
    </ul>
   

  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
  data () {
    return {
      customers: customerService.list(),
      
      
    }

  },

  methods: {

      remove(customer){

        customerService.remove(customer);

      } 


  }

    

}
</script>

