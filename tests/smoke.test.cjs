const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath))
}

test('required marketing routes exist', () => {
  ;['app/page.js', 'app/how-it-works/page.js', 'app/about/page.js', 'app/contact/page.js'].forEach((file) => {
    assert.equal(exists(file), true, `${file} should exist`)
  })
})

test('brand assets and SEO files exist', () => {
  ;[
    'public/favicon.svg',
    'public/apple-touch-icon.png',
    'public/og-image.svg',
    'app/robots.js',
    'app/sitemap.js',
    'tailwind.config.js',
  ].forEach((file) => {
    assert.equal(exists(file), true, `${file} should exist`)
  })
})

test('local react-hook-form compatibility shim is present', () => {
  assert.equal(exists('node_modules/react-hook-form/index.js'), true)
})
