import './Layout.css';
import MainNavigation from './MainNavigation';


function Layout(props) {
    return <div>
        <MainNavigation />
        <main>
            <main className='main'>{props.children}</main>
        </main>
    </div>
}

export default Layout;