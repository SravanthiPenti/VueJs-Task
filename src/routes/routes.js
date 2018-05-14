// import Main from '../components/Main/Main.vue'
import Main from '../components/Main/Main.vue'
import MainSub1 from '../components/Main/MainSub1/MainSub1.vue'
import MainSub2 from '../components/Main/MainSub2/MainSub2.vue'
import ChildInside from '../components/Main/MainSub1/ChildInside1-1/ChildInside1-1.vue'
import ChildInside1 from '../components/Main/MainSub1/ChildInside1-2/ChildInside1-2.vue'
import ChildInsideTo2 from '../components/Main/MainSub2/ChildInside2-1/ChildInside2-1.vue'
import ChildInside2 from '../components/Main/MainSub2/ChildInside2-2/ChildInside2-2.vue'
export const routes=[
  {path:'/main',component:Main,children:[
   {path:'1',component:MainSub1,name:'sub1',children:[
   {path:'1.1',component:ChildInside,name:'sub1-1'},
   {path:'1.2',component:ChildInside1,name:'sub1-2'}
   ]},
   {path:'2',component:MainSub2,name:'sub2',children:[
     {path:'2.1',component:ChildInsideTo2,name:'sub2-1'},
       {path:'2.2',component:ChildInside2,name:'sub2-2'}
   ]}
  ]},
  {path:'*',redirect:'/main'}

]
 
 