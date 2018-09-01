import address from 'js/addressService.js'
export default {
  data(){
    return {
        name:'',
        tel:'',
        provinceValue:-1,
        cityValue:-1,
        districtValue:-1,
        addressValue:'',
        id:'',
        type:this.$route.query.type,
        instance:this.$route.query.instance,
        addressData:require('./address.json'),
        cityList:null,
        districtList:null
    }
  },
  created(){
  },
  methods: {
  },
  watch:{
      provinceValue(val){
          if (val===-1) return 
          let index=this.addressData.list.findIndex(province=>{
              return province.value===this.provinceValue
          })
          this.cityList=this.addressData.list[index].children
      }
  }
}