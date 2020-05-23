import React from "react";

const TwitchComponent = () => {
  return (
    <>
      <iframe
        title='video'
        src='https://player.twitch.tv/?channel=teamevotv&muted=true'
        height='600'
        width='950'
        frameborder='0'
        scrolling='no'
        allowfullscreen='true'
      />
      <iframe
        title='chat'
        id='chat_embed'
        frameborder='0'
        src='https://www.twitch.tv/embed/teamevotv/chat?darkpopout'
        height='600'
        width='350'
        style={{ marginLeft: 50 }}
      />
    </>
  );
};

export default TwitchComponent;
