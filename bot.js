const { BskyAgent } = require('@atproto/api');

const agent = new BskyAgent({
  service: 'https://bsky.social',
});

const handle = process.env.BLUESKY_HANDLE;
const password = process.env.BLUESKY_PASSWORD;

const runBot = async () => {
  await agent.login({ identifier: handle, password });

  await agent.post({
    text: "🎾 Megan's here — let's get to work. #MatchPointTennis",
  });

  console.log('✅ Post sent!');
};

runBot();
