const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath))
}

test('required marketing routes exist', () => {
  ;[
    'app/page.js',
    'app/how-it-works/page.js',
    'app/about/page.js',
    'app/contact/page.js',
    'app/not-found.js',
  ].forEach((file) => {
    assert.equal(exists(file), true, `${file} should exist`)
  })
})

test('shared components and seo assets exist', () => {
  ;[
    'components/Button.js',
    'components/Card.js',
    'components/Footer.js',
    'public/favicon.svg',
    'public/og-image.svg',
    'public/robots.txt',
    'public/sitemap.xml',
    'tailwind.config.js',
  ].forEach((file) => {
    assert.equal(exists(file), true, `${file} should exist`)
  })
})

test('homepage includes the approved hero and solution copy', () => {
  const homepage = read('app/page.js')
  assert.match(homepage, /Finally, Jewelry Gifts She'll Love/)
  assert.match(homepage, /She swipes\. You buy\. Everyone wins\./)
})

test('layout includes brand fonts and structured data', () => {
  const layout = read('app/layout.js')
  assert.match(layout, /application\/ld\+json/)
  const head = read('app/head.js')
  assert.match(head, /DM\+Serif\+Display/)
  assert.match(head, /family=Inter/)
})

test('contact page supports Formspree configuration and success handling', () => {
  const contact = read('components/ContactForm.js')
  assert.match(contact, /NEXT_PUBLIC_FORMSPREE_ENDPOINT/)
  assert.match(contact, /Thanks for reaching out/)
})
