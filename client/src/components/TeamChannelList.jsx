import React from 'react'
import { AddChannel } from '../assets'

const TeamChannelList = ({ children,error=false,loading,type}) => {
    if (error){
        return  type==='team' ?(
            <div className="team-channel-list">
                <p className="team-channel-list__mesage">
                    connection error ,please wait  a moment and try agian.  
                </p>
            </div>
        ):null
    }
    if (loading){
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__mesage loading">
                {type==='team'? 'Channels' :'Messages' } loading...  
                </p>
            </div>
        )
    }
  return (
    <div className="team-channel-list">
        <div className="team-channel-list__header">
            <p className="team-channel-list__header__title">
            {type==='team'? 'Channels' :'Direct Messages' } loading...  

            </p>
        </div>
    </div>
  )
}

export default TeamChannelList
