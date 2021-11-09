
const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();

const botId = process.env.BOT_ID;

const testChannelId = process.env.CHANNEL_ID;
const testMemberRoleId = process.env.ROLE_ID;

const host = '0.0.0.0';
const port = process.env.PORT || 3005;

app.listen(port, host, function() {
  console.log(`I'll be right by your side till ${port}`);
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);

  client.on('guildMemberAdd', member => {
    // Do nothing if the channel wasn't found on this server
    if (!testChannelId) return;
    // Send the message, mentioning the member
    testChannelId.send(`Hallowsong welcomes you, ${member}! Please mention me with your name in the following format "@Hallowsong Bot, Cherry Cheesecake" so we can set your nickname and role.`);
  });

  client.on('message', msg => {
    const currentChannel = msg.channel;
    let currentUser;
    
    if (msg.content.indexOf(botId) !== -1) {
      if (msg.content.split(',').length > 1) {
        const testMessageContent = msg.content.split(',')[1].trim();
        currentUser = msg.member;
        member.roles.add(testMemberRoleId);
        await currentUser.setNickname(testMessageContent).catch(err => console.log(err));
      } else {
        logError(currentChannel, 'cannot read message');
      }
    }
  });

  logError = (channel, message) => {
    channel.send(`Error: ${message}`);
  }