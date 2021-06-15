module.exports = {
  router: {
    base: "/market/",
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "stylesheet", href: "/css/main.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "https://unpkg.com/microtip/microtip.css" },
      {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
      },
    ],
    script: [],
  },
  build: {
    publicPath: "/js/",
    babel: {
      presets: ["es2015", "stage-0", "stage-1", "stage-2", "stage-3"],
    },
    vendor: ["axios", "localforage"],
  },
  plugins: [],
};
