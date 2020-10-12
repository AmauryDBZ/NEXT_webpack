if (process.env.NODE_ENV === "development") {
  module.exports = {
    console.log("NODE_ENV", env.NODE_ENV);
    return{
      plugins: [
        require("autoprefixer"),
        require("cssnano"),
        // Tous les modules CSS que tu souhaite
      ],
    };
  };
}
