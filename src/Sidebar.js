import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SideBarChat from './SideBarChat';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
              <Avatar src='https://avatars.githubusercontent.com/u/58847066?s=400&u=461b6429c360e5faed6de9b87455fe1a08e80986&v=4'/>
              <div className='sidebar__headerRight'>
                <IconButton>
                  <DonutLargeIcon />
                </IconButton>
                <IconButton>
                  <ChatIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div> 
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                  <SearchOutlined />
                  <input placeholder="Search or start new chat" type="text"/>
                </div>
              </div>
            <div className='sidebar__chats'>
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
            </div>
        </div>
    )
}

export default Sidebar
