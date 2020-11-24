import ShowBlog from './showBlog.vue'
import AddBlog from './blog.vue'
import Nav from './header.vue'
import SingleBlog from './singleBlog.vue'

export default[
    {path:'/', component:ShowBlog},
    {path:'/add', component:AddBlog},
    {path:'/nav', component:Nav},
    {path:'/blog/:id', component:SingleBlog},
]