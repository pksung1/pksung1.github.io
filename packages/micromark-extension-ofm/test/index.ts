import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {extension, html} from '../dev/lib/embed.js'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdast } from '../dev/lib/mdast.js'

test('embed - 기본 파일', () => {
  assert.equal(micromark('![[test.md]]', {
    extensions: [extension],
  }), '<p>test.md</p>');
});

test('embed - 이미지 파일', () => {
  assert.equal(micromark('![[image.png]]', {
    extensions: [extension],
  }), '<p>image.png</p>');
});

test('embedHtml - 기본 파일 (링크)', () => {
  assert.equal(micromark('![[test.md]]', {
    extensions: [extension],
    htmlExtensions: [html({ root: './test/fixtures' })],
  }), '<p><a href="./test/fixtures/test.md">test.md</a></p>');
});

test('embedHtml - 이미지 파일', () => {
  assert.equal(micromark('![[image.png]]', {
    extensions: [extension],
    htmlExtensions: [html({ root: './test/fixtures' })],
  }), '<p><img src="./test/fixtures/image.png" alt="image.png" /></p>');
});

test('embedHtml - 이미지 크기 옵션 (width x height)', () => {
  assert.equal(micromark('![[image.png|100x145]]', {
    extensions: [extension],
    htmlExtensions: [html({ root: './test/fixtures' })],
  }), '<p><img src="./test/fixtures/image.png" alt="image.png" width="100" height="145" /></p>');
});

test('embedHtml - 이미지 크기 옵션 (width only)', () => {
  assert.equal(micromark('![[image.png|100]]', {
    extensions: [extension],
    htmlExtensions: [html({ root: './test/fixtures' })],
  }), '<p><img src="./test/fixtures/image.png" alt="image.png" width="100" /></p>');
});


test('이미지 파일공백', () => {
  assert.equal(micromark('![[Pasted image 20251028182448.png]]', {
    extensions: [extension],
    htmlExtensions: [html({ root: './test/fixtures' })],
  }), '<p><img src="./test/fixtures/Pasted image 20251028182448.png" alt="Pasted image 20251028182448.png" /></p>');
})

test('mdast tree', () => {
  console.log(JSON.stringify(fromMarkdown('![[test.md]]', {
    extensions: [extension],
    mdastExtensions: [mdast({ root: './test/fixtures' })],
  }), null, 2))

  console.log(JSON.stringify(fromMarkdown('![[test.png]]', {
    extensions: [extension],
    mdastExtensions: [mdast({ root: './test/fixtures' })],
  }), null, 2))

  console.log(JSON.stringify(fromMarkdown('![[Pasted image 20251028182448.png]]', {
    extensions: [extension],
    mdastExtensions: [mdast({ root: './test/fixtures' })],
  }), null, 2))
})