import { Outlet } from 'react-router-dom'
import './index.css';
import Sidebar from '../Sidebar'
import AnimatedCursor from "react-animated-cursor"




const Layout = () => {



    return (
 <div className="App">

            <Sidebar />
            <AnimatedCursor
               color="255, 215, 0"
               innerSize={8}
               outerSize={35}
               innerScale={1}
               outerScale={1.7}
               outerAlpha={0}
               outerStyle={{
                 border: '3px solid rgb(255, 215, 0)'
               }} />

            <div className="page">

                <span className="tags top-tags">&lt;html&gt; <br /> <span className="tags-top-tags">&lt;body&gt;</span></span>


                <Outlet />

                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>






    )
}

export default Layout


