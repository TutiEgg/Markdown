/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const theme = require("shiki/themes/nord.json")
const { remarkCodeHike } = require("@code-hike/mdx")

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkCodeHike, 
      {         
      showCopyButton: true,
      staticMediaQuery: "not screen, (max-width: 768px)",
      autoImport: true, 
    },],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})



//module.exports = nextConfig

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
}