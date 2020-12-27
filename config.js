module.exports = {
  "title": "felixoi.com Status Page",
  "name": "felixoi.com_status_page",
  "description": "Status page for all services provided by felixoi.com",
  "defaultLocale": "en",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],
  "content": {
    "frontMatterFormat": "yaml",
    "systems": ["personalsite"],
  },
  theme: {
    links: {
      en: {
        contact: "https://felixoi.com/contact",
        home: "https://felixoi.com",
        privacy: "https://felixoi.com/data-privacy",
        legal: "https://felixoi.com/legal"
      },
    },
  }
}
