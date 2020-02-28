import React, { useEffect } from 'react'
import './Navbar.scss'
import { BottomNavigation, BottomNavigationAction, useS } from '@material-ui/core'
import { Home, Search, Settings, AccountCircle } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [value, setValue] = React.useState('recents')

    const history = useHistory()
    const location = useLocation()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        setValue(location.pathname)
    }, [value])

    const handleRouter = (route) => {
        history.push(route)
    }

    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="Home" onClick={() => handleRouter('home')} value="/home" icon={<Home />} />

            <BottomNavigationAction
                label="Search"
                onClick={() => handleRouter('search')}
                value="/search"
                icon={<Search />}
            />
            <BottomNavigationAction
                label="Settings"
                onClick={() => handleRouter('settings')}
                value="/settings"
                icon={<Settings />}
            />
            <BottomNavigationAction
                label="Account"
                onClick={() => handleRouter('account')}
                value="/account"
                icon={<AccountCircle />}
            />
        </BottomNavigation>
    )
}
export default Navbar
