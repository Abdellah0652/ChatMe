import './App.css'; 
import {StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelListContainer,ChannelContainer} from './components';
import Auth from './components/Auth';


const apikey='9hef9qemm8vn';
const client=StreamChat.getInstance(apikey);
const authToken=false;


function App() {

  if(!authToken) return <Auth/>
  return (
    <div className="app__wrapper">
      <Chat client={client} theme=' team light'>
         <ChannelListContainer/>
         <ChannelContainer/>
          
                
      </Chat>
    
    </div>
  );
}

export default App;
