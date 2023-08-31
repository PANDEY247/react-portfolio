import './Index.scss'
import Sidebar from '../Sidebar/Index'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='App'>
      <Sidebar/>
      <div>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet/>

        <span className='tags bottom-tags'>&lt;/body&gt;<br/></span>
      </div>
    </div>  
  )
}

export default Layout
 