
export default {
 data:function(){
    return{
      name:"Parent",
      page:"Home",
      info:"The navigation is splitted in right menu items and left menu items. When you are not logged in, the only menu item is “login”. But when you submit the login form (successful logged in) the navigation knows “User is logged in, show other menu items”. Ok, my navigation know it, but router-link says no. I’ve updated my menu items but nothing is changing."
    }
  },
  methods:{
    GotoMain(){
      this.$router.push('/main')
    },
    submit(){
      alert('submitted');
    }
  }
}