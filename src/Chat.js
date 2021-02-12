import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton} from '@material-ui/core';
import { MoreVert, SearchOutlined, AttachFile,  } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios';

const Chat = ({messages}) => {
    const [input, setinput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()
        
        await axios.post('/messages/new',{
            message: input,
            name: 'DEMO APP',
            timestamp: 'Just Now',
            received: false
        })

        setinput('')
    }

    return (
        <div className='Chat'>
            <div className='chat__header'>
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        <MoreVert />
                    </IconButton>

                </div>
            </div>
            <div className='chat__body'>
                {messages.map(message => (
                <p className={`chat__message ${message.received && 'chat__received'}`}>
                    <span className='chat__name'>{message.name}</span>
                    {message.message}
                    <span className='chat__timestamp'>
                        {message.timestamp}
                    </span>
                </p>
                ))}
                
            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value ={input}
                    onChange={e =>setinput(e.target.value)}
                    placeholder='Type a message'
                    type='text'/>
                    <button onClick={sendMessage} type='submit'>
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
