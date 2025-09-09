
import markdownit from 'markdown-it'

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
})

// Custom slug generation function
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, '') // Remove trailing hyphens
}

// Override heading renderer to add IDs and wrap with anchor links
const defaultHeadingRender = md.renderer.rules.heading_open || function (tokens, idx, options, env, renderer) {
  return renderer.renderToken(tokens, idx, options)
}

const defaultHeadingCloseRender = md.renderer.rules.heading_close || function (tokens, idx, options, env, renderer) {
  return renderer.renderToken(tokens, idx, options)
}

md.renderer.rules.heading_open = function (tokens, idx, options, env, renderer) {
  const token = tokens[idx]
  const nextToken = tokens[idx + 1]
  let slug = ''

  if (nextToken && nextToken.type === 'inline') {
    const headingText = nextToken.content
    slug = slugify(headingText)
    token.attrSet('id', slug)
  }

  const headingHtml = defaultHeadingRender(tokens, idx, options, env, renderer)
  return `<a href="#${slug}" style="display: contents; text-decoration: none; color: inherit;">` + headingHtml
}

md.renderer.rules.heading_close = function (tokens, idx, options, env, renderer) {
  return defaultHeadingCloseRender(tokens, idx, options, env, renderer) + '</a>'
}

export default {
  mdRender: md,
  functions: {
    sortDate: (list) => {
      const res = [...list].sort((a, b) => {
        const dateA = new Date(a.data.date);
        const dateB = new Date(b.data.date);
        return dateB - dateA; // descending order
      });
      return res;
    }
  }
}
