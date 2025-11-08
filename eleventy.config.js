/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default (eleventyConfig) => {
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
    includes: "_includes"
  },
  templateFormats: ["njk", "md"],
  markdownTemplateEngine: "njk",
};