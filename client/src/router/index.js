import Router from 'vue-router'

import RoommateList from '@/components/RoommateList'
import About from '@/components/About'
import FeeDetail from '@/components/FeeDetail'

export default new Router({
    routes: [
        {
            path: '/',
            component: RoommateList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: 'detail/:roommate',
            name: 'detail',
            component: FeeDetail
        }
    ]
})