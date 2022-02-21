import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    state = {
        current: 'home'
    }
    handleClick = (e: { key: any }) => {
        this.setState({ current: e.key });
    }

    render () {
        const { current } = this.state
        return (
            <Menu 
                onClick={this.handleClick} 
                mode="horizontal" 
                selectable={false} 
                selectedKeys={[current]}
            >
                <Menu.Item  key="home">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item  key="shop">
                    <Link to="/shop">商城</Link>
                </Menu.Item>
            </Menu>
        )
    }
}




export default Navigation