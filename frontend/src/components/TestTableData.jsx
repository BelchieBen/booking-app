import Article from '../utils/images/content-images/Article.svg'
import EBook from '../utils/images/content-images/EBook.svg'
import ELearning from '../utils/images/content-images/ELearning.svg'
import FaceToFace from '../utils/images/content-images/FaceToFace.svg'
import Online from '../utils/images/content-images/Online.svg'
import Podcast from '../utils/images/content-images/Podcast.svg'
import TopTips from '../utils/images/content-images/TopTips.svg'
import Video from '../utils/images/content-images/Video.svg'
import IInfo from '../utils/images/content-images/IInfo.svg'

export const columns = [
    { 
        name: 'Content'
    },
    { 
        name: 'Title'
    },
    {
        name: 'Source'
    },
    {
        name: 'Duration'
    },
    {
        name: 'Edit'
    },
    {
        name: 'Delete'
    },
];

export const rows = [
    {
      id: 1,
      fields: [
          {
            content: {
                contentType:"Article",
                icon: Article
            },
          },
          {
            title: {
                titleText:"The GROW Model of Coaching and Mentoring",
                href: "https://www.mindtools.com/pages/article/newLDR_89.htm",
            },
          },
          {
            source: "Mind Tools",
          },
          {
            duration: "9 mins",
          }
      ]
    },
    {
        id: 2,
        fields: [
            {
                content: { 
                    contentType:"Article",
                    icon: Article
                },
            },
            {
                title: {
                    titleText:"The 5 Essentials to Effective Coaching E",
                    href: "https://www.entrepreneur.com/article/292877",
                },
            },
            {
                source: "Entrepreneur.com",
            },
            {
                duration: "5 mins",
            }
        ]
    },
    {
        id: 3,
        fields: [
           {
            content: { 
                contentType:"Article",
                icon: Article
            },
           },
           {
            title: {
                titleText:"The Key to Effective Coaching",
                href: "https://www.forbes.com/2010/04/28/coaching-talent-development-leadership-managing-ccl.html?sh=1b14b6ca38e0",
            },
           },
           {
            source: "Forbes"
           },
           {
               duration: "7 mins",
           }
        ]
    },
    {
        id: 4,
        fields: [
            {
                content: { 
                    contentType:"Podcast",
                    icon: Podcast
                },
            },
            {
                title: {
                    titleText:"Coaching for Leaders Podcast",
                    href: "https://coachingforleaders.com/",
                },
            },
            {
                source: "Dave Stachowiak",
            },
            {  
                duration: "Various",
            }
        ]
      
    },
    {
        id: 5,
        fields: [
            {
                content: { 
                    contentType:"Podcast",
                    icon: Podcast
                } 
            }, 
            {
                title: {
                    titleText:"Accelerating Growth through Coaching",
                    href: "https://awesomeatyourjob.com/631-accelerating-growth-through-coaching-with-andrea-wanerstrand/",
                },
            }, 
            {
                source: "How to be Awesome at Your Job"
            }, 
            {
                duration: "42 mins"
            }
        ]
      
    },
  ];

  

