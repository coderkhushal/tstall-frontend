import { Bookmark, FileText, Home } from "lucide-react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { ArticleType, CommentType, RoutesType, StoryDataType } from "./types";

export const DesktopRoutes:RoutesType[] = [
    {
        Icon: Home,
        name:"Home",
  
        href:"/"
    }
    ,
    {
        Icon: FaSearch, 
        name:"Search",
        href:"/search"
    },
    {
        Icon: Bookmark, 
        name:"Bookmarks",
        href:"/bookmarks",
        
    },
    {
        Icon: FileText, 
        name:"Feed",
        href:"/feed"
    },
    {
        Icon: FaUserCircle, 
        name:"Profile",
        href:"/profile"
    }

]
export const MobileRoutes:RoutesType[] = [
  {
      Icon: Home,
      name:"Home",

      href:"/"
  },
  {
      Icon: Bookmark, 
      name:"Bookmarks",
      href:"/bookmarks",
      
  },
  {
      Icon: FileText, 
      name:"Feed",
      href:"/feed"
  },
  {
      Icon: FaUserCircle, 
      name:"Profile",
      href:"/profile"
  }

]
export const PublicRoutes= [
  "/feed",
  "/",
  
]
export const articles: ArticleType[] = [
    {
      id: "1",
      source: ["BBC News"],
      description:"this is description",
      publishTime: "2023-06-04T08:00:00Z",
      category: "business",
      author: "Jane Doe",
      title: "Global Economic Outlook",
      titleAndAuthor: "Global Economic Outlook by Jane Doe",
      url: "https://www.bbc.com/news/business-123456",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "The global economy is expected to grow by 4% this year...",
      usersLiked: ["user1", "user2", "user3"],
      usersDisliked: ["user4"],
      numLikes: 3,
      numDislikes: 1,
      topics: ["economy", "global"]
    },
    {
      id: "2",
      source: ["CNN"],
      description:"this is description",
      publishTime: "2023-06-04T09:00:00Z",
      category: "general",
      author: "John Smith",
      title: "Elections 2023: Key Points",
      titleAndAuthor: "Elections 2023: Key Points by John Smith",
      url: "https://www.cnn.com/politics/elections-2023",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "The 2023 elections are shaping up to be highly contested...",
      usersLiked: ["user5", "user6"],
      usersDisliked: ["user7", "user8"],
      numLikes: 2,
      numDislikes: 2,
      topics: ["elections", "politics"]
    },
    {
      id: "3",
      source: ["Reuters"],
      description:"this is description",
      publishTime: "2023-06-04T10:00:00Z",
      category: "technology",
      author: "Alice Johnson",
      title: "AI and the Future",
      titleAndAuthor: "AI and the Future by Alice Johnson",
      url: "https://www.reuters.com/technology/ai-future",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "Artificial intelligence is transforming industries...",
      usersLiked: ["user1", "user9", "user10"],
      usersDisliked: ["user11"],
      numLikes: 3,
      numDislikes: 1,
      topics: ["AI", "technology"]
    },
    {
      id: "4",
      source: ["The New York Times"],
      description:"this is description",
      publishTime: "2023-06-04T11:00:00Z",
      category: "health",
      author: "Michael Brown",
      title: "Healthcare Innovations in 2023",
      titleAndAuthor: "Healthcare Innovations in 2023 by Michael Brown",
      url: "https://www.nytimes.com/healthcare-innovations-2023",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "This year has seen numerous healthcare innovations...",
      usersLiked: ["user2", "user3", "user12"],
      usersDisliked: ["user4", "user8"],
      numLikes: 3,
      numDislikes: 2,
      topics: ["healthcare", "innovation"]
    },
    {
      id: "5",
      source: ["The Guardian"],
      description:"this is description",
      publishTime: "2023-06-04T12:00:00Z",
      category: "science",
      author: "Emily White",
      title: "Climate Change Effects",
      titleAndAuthor: "Climate Change Effects by Emily White",
      url: "https://www.theguardian.com/environment/climate-change",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "Climate change is having widespread effects...",
      usersLiked: ["user5", "user9"],
      usersDisliked: ["user7"],
      numLikes: 2,
      numDislikes: 1,
      topics: ["climate change", "environment"]
    },
    {
      id: "6",
      source: ["Al Jazeera"],
      description:"this is description",
      publishTime: "2023-06-04T13:00:00Z",
      category: "general",
      author: "Ahmed Khan",
      title: "Middle East Conflicts",
      titleAndAuthor: "Middle East Conflicts by Ahmed Khan",
      url: "https://www.aljazeera.com/news/middle-east-conflicts",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "Ongoing conflicts in the Middle East continue to...",
      usersLiked: ["user6", "user11"],
      usersDisliked: ["user10"],
      numLikes: 2,
      numDislikes: 1,
      topics: ["conflict", "Middle East"]
    },
    {
      id: "7",
      source: ["Bloomberg"],
      description:"this is description",
      publishTime: "2023-06-04T14:00:00Z",
      category: "business",
      author: "Robert Green",
      title: "Stock Market Trends",
      titleAndAuthor: "Stock Market Trends by Robert Green",
      url: "https://www.bloomberg.com/business/stock-market-trends",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "The stock market is seeing significant changes...",
      usersLiked: ["user1", "user3", "user8"],
      usersDisliked: ["user7", "user12"],
      numLikes: 3,
      numDislikes: 2,
      topics: ["stock market", "business"]
    },
    {
      id: "8",
      source: ["Forbes"],
      description:"this is description",
      publishTime: "2023-06-04T15:00:00Z",
      category: "business",
      author: "Laura King",
      title: "Cryptocurrency Boom",
      titleAndAuthor: "Cryptocurrency Boom by Laura King",
      url: "https://www.forbes.com/finance/cryptocurrency-boom",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "Cryptocurrencies are experiencing a new boom...",
      usersLiked: ["user2", "user4", "user9"],
      usersDisliked: ["user5"],
      numLikes: 3,
      numDislikes: 1,
      topics: ["cryptocurrency", "finance"]
    },
    {
      id: "9",
      source: ["TechCrunch"],
      description:"this is description",
      publishTime: "2023-06-04T16:00:00Z",
      category: "technology",
      author: "Samuel Lee",
      title: "New Tech Startups",
      titleAndAuthor: "New Tech Startups by Samuel Lee",
      url: "https://www.techcrunch.com/technology/new-tech-startups",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "A wave of new tech startups is emerging...",
      usersLiked: ["user6", "user7", "user12"],
      usersDisliked: ["user1"],
      numLikes: 3,
      numDislikes: 1,
      topics: ["startups", "technology"]
    },
    {
      id: "10",
      source: ["National Geographic"],
      description:"this is description",
      publishTime: "2023-06-04T17:00:00Z",
      category: "science",
      author: "Grace Davis",
      title: "Exploring the Deep Ocean",
      titleAndAuthor: "Exploring the Deep Ocean by Grace Davis",
      url: "https://www.nationalgeographic.com/science/exploring-deep-ocean",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "Scientists are discovering new species in the deep ocean...",
      usersLiked: ["user5", "user10"],
      usersDisliked: ["user3", "user4"],
      numLikes: 2,
      numDislikes: 2,
      topics: ["ocean", "science"]
    },
    {
      id: "11",
      source: ["The Verge"],
      description:"this is description",
      publishTime: "2023-06-04T18:00:00Z",
      category: "technology",
      author: "David Wilson",
      title: "Gadgets of the Year",
      titleAndAuthor: "Gadgets of the Year by David Wilson",
      url: "https://www.theverge.com/technology/gadgets-of-the-year",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "This year has seen some incredible new gadgets...",
      usersLiked: ["user7", "user8", "user11"],
      usersDisliked: ["user9"],
      numLikes: 3,
      numDislikes: 1,
      topics: ["gadgets", "technology"]
    },
    {
      id: "12",
      source: ["ESPN"],
      description:"this is description",
      publishTime: "2023-06-04T19:00:00Z",
      category: "sports",
      author: "Chris Thompson",
      title: "Championship Finals Recap",
      titleAndAuthor: "Championship Finals Recap by Chris Thompson",
      url: "https://www.espn.com/sports/championship-finals-recap",
      urlToImage:"https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675",
      content: "The championship finals were thrilling with...",
      usersLiked: ["user1", "user6", "user12"],
      usersDisliked: ["user10"],
      numLikes: 3,
      numDislikes: 1,
      topics: ["championship", "sports"]
    }
  ];
  export const StoryData: StoryDataType[] = [
    {
        title: "business",
        urlToImage: "https://images.shiksha.com/mediadata/images/articles/1708495536phpcWJB6r.jpeg",
        stories: [
            {
                id: "66654c282b165631a1e4a136",
                publishTime: "2024-06-09T06:31:03.622",
                author: "Nishant Kumar",
                title: "Sensex, Nifty 50 settle at fresh closing highs; 5 key factors that drove the market today | Stock Market News - Mint",
                description: "Stock market today: Sensex closed with a gain of 1,619 points, or 2.16 per cent, at 76,693.36, while the Nifty 50 closed at 23,290.15, up 469 points, or 2.05 per cent.",
                url: "https://www.livemint.com/market/stock-market-news/stock-market-today-sensex-nifty-50-settle-at-fresh-closing-highs-investors-earn-nearly-7-lakh-crore-in-a-day-11717754433614.html",
                urlToImage: "https://www.livemint.com/lm-img/img/2024/06/07/1600x900/bsestocks-kUtF--621x414LiveMint_1717755759279_1717755759489.jpg"
            },
            {
                id: "66654c282b165631a1e4a135",
                publishTime: "2024-06-09T06:31:02.959",
                author: "Anubhav Maurya",
                title: "BSE Index Reshuffle June 2024: Mukesh Ambani's Jio Financial Services replaces THESE companies in THESE indices - Details - ET Now",
                description: "Sanofi India through this demerger process is streamlining its consumer healthcare business to concentrate and accelerate growth in each business.",
                url: "https://www.etnownews.com/markets/bse-index-reshuffle-june-2024-mukesh-ambanis-jio-financial-services-replaces-these-companies-in-these-indices-details-article-110796071",
                urlToImage: "https://etstatic.tnn.in/thumb/msid-110796071,width-1280,height-720,resizemode-75/110796071.jpg"
            },
            // More stories...
        ]
    },
    {
        title: "entertainment",
        urlToImage: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
        stories: [
            {
                id: "66654c3a2b165631a1e4a13f",
                publishTime: "2024-06-09T06:31:20.605",
                title: "BTS Jin's Brother Makes A Rare Appearance On An Influencer's TikTok - Koreaboo",
                description: "BTS Jin's brother shocked netizens after making a rare appearance on an influencer's TikTok video, and it was filmed from their restaurant.",
                url: "https://www.koreaboo.com/news/bts-jin-brother-rare-appearance-influencer-tiktok/",
                urlToImage: "https://img.koreaboo.com/2024/06/FD2870-4-4.jpg"
            },
            {
                id: "66654c3a2b165631a1e4a13e",
                publishTime: "2024-06-09T06:31:18.67",
                author: "Sonali Lambiwala",
                title: "WATCH: Ekta Kapoor glows in ethnic white as she seeks blessings at Siddhivinayak Temple on her birthday - PINKVILLA",
                description: "Ekta Kapoor Celebrated Her 49th Birthday On June 7 With A Visit To Mumbai's Siddhivinayak Temple, Where She Sought Divine Blessings. Read On!",
                url: "https://www.pinkvilla.com/tv/news/watch-ekta-kapoor-glows-in-ethnic-white-as-she-seeks-blessings-at-siddhivinayak-temple-on-her-birthday-1314385",
                urlToImage: "https://www.pinkvilla.com/images/2024-06/1201968782_fotojet-2024-06-07t181157-533-1.jpg"
            },
            // More stories...
        ]
    },
    // More categories...
];


export const Languages = [
  {code: "en", language: "English"},
  {code : "hi", language: "Hindi"},
  {language: "marathi", code: "mr"},
  {code: "te", language: "Telugu"},
  {code: "ta", language: "Tamil"},
  {language:"kannad", code: "kn"},
] 
export const topicsOfInterest=[
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology"
]