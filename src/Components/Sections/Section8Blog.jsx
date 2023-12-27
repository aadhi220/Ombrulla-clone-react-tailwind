import React from 'react';

const blogEntries = [
    {
        title: 'AI Revolutionizes Logistics and Supply Chain Management',
        imgSrc: 'https://blog.ombrulla.com/wp-content/uploads/2023/12/AI-in-Logisics-and-Supply-chain.webp',
        alt: 'AI Revolutionizes Logistics and Supply Chain Management',
        url: 'https://blog.ombrulla.com/ai-revolutionizes-logistics-and-supply-chain-management/',
        author: {
          name: 'Zara Elizabeth',
          avatar: 'https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g',
          url: 'https://blog.ombrulla.com/author/ombrullaadmin/',
        },
        date: 'December 21, 2023',
        readTime: '4 min read',
        description: 'AI takes huge leaps in areas like Logistics and Supply chain management with AI Visual Inspection, AI Data Analytics, Predictive Maintenance etc.',
      },
      {
        title: 'Google I/O 2023: A Deeper Look at the Future of AI',
        imgSrc: 'https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp',
        alt: 'Google I/O 2023: A Deeper Look at the Future of AI',
        url: 'https://blog.ombrulla.com/google-i-o-2023/',
        author: {
          name: 'Zara Elizabeth',
          avatar: 'https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g',
          url: 'https://blog.ombrulla.com/author/ombrullaadmin/',
        },
        date: 'December 8, 2023',
        readTime: '5 min read',
        description: 'Google I/O 2023 envisions a future where helpful AI integrates seamlessly into our lives, breaking down barriers, empowering individuals, and tackling global challenges. By developing AI responsibly, we can shape a future where everyone benefits.',
      },

      {
        title: 'AI Revolutionizes Logistics and Supply Chain Management',
        imgSrc: 'https://blog.ombrulla.com/wp-content/uploads/2023/12/AI-in-Logisics-and-Supply-chain.webp',
        alt: 'AI Revolutionizes Logistics and Supply Chain Management',
        url: 'https://blog.ombrulla.com/ai-revolutionizes-logistics-and-supply-chain-management/',
        author: {
          name: 'Zara Elizabeth',
          avatar: 'https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g',
          url: 'https://blog.ombrulla.com/author/ombrullaadmin/',
        },
        date: 'December 21, 2023',
        readTime: '4 min read',
        description: 'AI takes huge leaps in areas like Logistics and Supply chain management with AI Visual Inspection, AI Data Analytics, Predictive Maintenance etc.',
      },
      {
        title: 'Google I/O 2023: A Deeper Look at the Future of AI',
        imgSrc: 'https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp',
        alt: 'Google I/O 2023: A Deeper Look at the Future of AI',
        url: 'https://blog.ombrulla.com/google-i-o-2023/',
        author: {
          name: 'Zara Elizabeth',
          avatar: 'https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g',
          url: 'https://blog.ombrulla.com/author/ombrullaadmin/',
        },
        date: 'December 8, 2023',
        readTime: '5 min read',
        description: 'Google I/O 2023 envisions a future where helpful AI integrates seamlessly into our lives, breaking down barriers, empowering individuals, and tackling global challenges. By developing AI responsibly, we can shape a future where everyone benefits.',
      },
];

function Section8Blog() {
  return (
    <div className="my-32 md:my-8">
    <div className="mb-16 pb-20 lg:px-8 lg:pb-0">
      <div className="relative mx-auto max-w-5xl divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center items-baseline mb-8 md:mb-1">
            <i className="fa-solid fa-square fa-xs text-primary"></i>
            <h4 className="text-center text-5xl md:text-sm font-medium mb-8 md:mb-[1.125rem] mx-4">
              BLOG UPDATES
            </h4>
            <i className="fa-solid fa-square fa-xs text-primary"></i>
          </div>
          <h2 className="text-8xl md:text-5xl font-medium text-center tracking-tight mb-[1.125rem]">
            To Read
          </h2>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {blogEntries.map((entry, index) => (
            <div key={index} className="bg-white p-5 rounded-lg grid grid-rows-1 md:grid-rows-2">
              <div className="inline-block row-span-1">
                <span className="inline-flex items-center px-3 py-0.5 rounded-lg text-sm font-medium">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={entry.imgSrc}
                      alt={entry.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </span>
              </div>
              <a href={entry.url} className="py-8 md:py-4 block row-span-1">
                <p className="text-4xl md:text-xl font-semibold text-gray-900">{entry.title}</p>
                <p className="mt-3 text-2xl md:text-base text-gray-500">{entry.description}</p>
              </a>
              <div className="flex row-span-1 place-items-center">
                <div className="flex-shrink-0">
                  <a href={entry.author.url}>
                    <span className="sr-only">{entry.author.name}</span>
                    <img
                      src={entry.author.avatar}
                      className="md:h-10 md:w-10 h-15 w-20 rounded-full"
                      alt={entry.author.name}
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-lg md:text-sm font-medium text-gray-900">
                    <a href={entry.author.url}>{entry.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-lg md:text-sm text-gray-500">
                    <time date-time={entry.date}>{entry.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{entry.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Section8Blog;
