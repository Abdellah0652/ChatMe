import React, {useContext} from 'react'
import { Avatar } from 'stream-chat-react';

export const TeamChannelPreview = () => {
    const {channel: activeChannel, client} = useContext();
    const ChannelPreview = () => (
        <p className="channel-preview__item">
            #{
                channel
                    ?.data
                        ?.name || channel
                            ?.data
                                ?.id
            }
        </p>
    )
    const DirectPreview = () => {
        const members = Object
            .values(channel.state.members)
            .filter(({user}) => user.id === client.userID)
        return (<div className="channel-preview__item single">
          <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName}
          size={24}
          />
          <p>
            {members[0]?.user?.fullName}
          </p>
        </div>)
    };
    return (
      <div className={
          channel?.id === activeChannel?.id
              ? 'channel-preview__wrapper__selected'
              : 'channel-preview__wrapper'
      }
      onClick={() => {
         console.log('channel:',channel)
      }}
      >
          {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
      </div>
  );
}

export default TeamChannelPreview
