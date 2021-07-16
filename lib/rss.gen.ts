import { Feed } from 'feed';
import fs from 'fs';

export const generateFeed = (posts: Array<Post>) => {
  const baseUrl = 'https://www.necokecteni.cz';
  const author = {
    name: 'Michal Zimmermann',
    email: 'zimmicz@gmail.com',
    link: 'https://twitter.com/zimmicz',
  };

  const feed = new Feed({
    copyright: 'hello',
    title: 'Něco ke čtení',
    description: 'Něco ke čtení je seznam dobrých knih, které stojí za to si přečíst.',
    id: baseUrl,
    link: baseUrl,
    language: 'cs',
    feedLinks: {
      rss2: `${baseUrl}/feed.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const {
      contentHtml: content,
      id,
      date,
      title
    } = post;
    const url = `${baseUrl}/knihy/${id}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description: title,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  fs.writeFileSync('public/feed.xml', feed.rss2());
};
