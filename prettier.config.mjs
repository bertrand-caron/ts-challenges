const config = {
  plugins: ["prettier-plugin-sort-json"],
  semi: false, // Do not add redundant characters
  trailingComma: "all", // Smaller git diffs
  jsonRecursiveSort: true, // More canonical JSON objects (requires `prettier-plugin-sort-json` plugin)
}

export default config
