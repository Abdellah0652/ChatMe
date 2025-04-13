import React, {Component} from 'react';
import {ChannelList, useChatContext} from 'stream-chat-react';
import ChannelSearch from './ChannelSearch'; 
import TeamChannelList from './TeamChannelList'; 
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital " width='30'/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout " width='30'/>
            </div>
        </div>

    </div>
)

const CompanyHeader = () => ( 

    <div className="channel-list__header">
        <p className="channel-list__header__text">
            Medical Prager
        </p>
    </div>
)

export class ChannelListContainer extends Component {
    render() {
        return (
            <> < SideBar /> <div className="channel-list__list__wrapper">
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List={(listProps)=>(
                    <TeamChannelList
                    {...listProps}
                    type='team'
                    />
                )}
                Preview={(previewProps)=>(
                    <TeamChannelList
                    {...previewProps}
                    type='team'
                    />
                )}
                />
                <ChannelList
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List={(listProps)=>(
                    <TeamChannelList
                    {...listProps}
                    type='messaging'
                    />
                )}
                Preview={(previewProps)=>(
                    <TeamChannelList
                    {...previewProps}
                    type='messaging'
                    />
                )}
                />
            </div>

        </>
        )
    }
}

export default ChannelListContainer
