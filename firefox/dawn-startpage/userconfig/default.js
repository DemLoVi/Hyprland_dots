const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true,
  temperature: {
    location: 'Obukhiv, UA',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      r: ['https://www.reddit.com/search/?q=', 'Reddit']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar',
    "c": 'fast-link'
  },
  disabled: [],
  fastLink: {
    url: "https://chat.openai.com/",
    icon: "src/img/openai.png"
  },
  openLastVisitedTab: false,
  tabs: [
    {
      "name": "daily",
      "background_url": "src/img/banners/cbg-9.gif",
      "categories": [
        {
          "name": "Google",
          "links": [
            {
              "url": "https://calendar.google.com",
              "name": "Calendar",
              "icon": "calendar",
              "icon_color": "#4285f4"
            },
            {
              "url": "https://gmail.com",
              "name": "Gmail",
              "icon": "brand-gmail",
              "icon_color": "#ea4335"
            },
            {
              "url": "https://music.youtube.com",
              "name": "YTMusic",
              "icon": "music",
              "icon_color": "#ff0033"
            },
            {
              "url": "https://docs.google.com/spreadsheets",
              "name": "Tables",
              "icon": "table",
              "icon_color": "#34a853"
            }
          ]
        },
        {
          "name": "entertainment",
          "links": [
            {
              "url": "https://rezka.ag",
              "name": "Rezka",
              "icon": "movie",
              "icon_color": "#333"
            },
            {
              "url": "https://osu.ppy.sh/users/36511927",
              "name": "Osu!",
              "icon": "focus",
              "icon_color": "#e55c99"
            },
            {
              "url": "https://rutracker.net/forum/index.php",
              "name": "RuTraker",
              "icon": "skull",
              "icon_color": "#6eb535"
            }
          ]
        }
      ]
    },
    {
      "name": "work",
      "background_url": "src/img/banners/cbg-6.gif",
      "categories": [
        {
          "name": "social",
          "links": [
            {
              "url": "https://twitter.com",
              "name": "Twitter",
              "icon": "brand-twitter",
              "icon_color": "#1da1f2"
            },
            {
              "url": "https://reddit.com",
              "name": "Reddit",
              "icon": "brand-reddit",
              "icon_color": "#ff4500"
            },
            {
              "url": "https://linkedin.com",
              "name": "LinkedIn",
              "icon": "brand-linkedin",
              "icon_color": "#0077b5"
            }
          ]
        },
        {
          "name": "entertainment",
          "links": [
            {
              "url": "https://youtube.com",
              "name": "YouTube",
              "icon": "brand-youtube",
              "icon_color": "#ff0000"
            },
            {
              "url": "https://netflix.com",
              "name": "Netflix",
              "icon": "brand-netflix",
              "icon_color": "#e50914"
            },
            {
              "url": "https://spotify.com",
              "name": "Spotify",
              "icon": "brand-spotify",
              "icon_color": "#1db954"
            }
          ]
        }
      ]
    },
    {
      "name": "news",
      "background_url": "src/img/banners/cbg-3.gif",
      "categories": [
        {
          "name": "tech",
          "links": [
            {
              "url": "https://news.ycombinator.com",
              "name": "Hacker News",
              "icon": "letter-y",
              "icon_color": "#ff6600"
            },
            {
              "url": "https://techcrunch.com",
              "name": "TechCrunch",
              "icon": "news",
              "icon_color": "#00a562"
            },
            {
              "url": "https://theverge.com",
              "name": "The Verge",
              "icon": "brand-vercel",
              "icon_color": "#e2127d"
            }
          ]
        },
        {
          "name": "crypto",
          "links": [
            {
              "url": "https://coinmarketcap.com",
              "name": "CoinMarketCap",
              "icon": "currency-bitcoin",
              "icon_color": "#17181b"
            },
            {
              "url": "https://coingecko.com",
              "name": "CoinGecko",
              "icon": "currency-ethereum",
              "icon_color": "#8dc63f"
            }
          ]
        }
      ]
    }
  ]
});
