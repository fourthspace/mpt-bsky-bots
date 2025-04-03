import { BskyAgent } from '@atproto/api';

const agent = new BskyAgent({
  service: 'https://bsky.social',
});

const handle = process.env.BLUESKY_HANDLE;
const password = process.env.BLUESKY_PASSWORD;

const runBot = async () => {
  await agent.login({ identifier: handle, password });

  await agent.post({
    text: "🎾 Just dropped into the feed. Let's make some noise. #MatchPointTennis",
  });

  console.log('✅ Megan posted!');
};

runBot();

