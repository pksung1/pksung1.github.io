
import { Application, Text, extensions, ResizePlugin, RenderTexture, Sprite, Container } from 'pixi.js'

export async function init(container: HTMLElement, title: string) {
  extensions.add(ResizePlugin)

  // PixiJS 애플리케이션 초기화
  const app = new Application()

  await app.init({
    width: container.clientWidth,
    height: container.clientHeight,
    backgroundColor: '#eeeeee',
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    resizeTo: container,
  })

  if (container) {
    container.appendChild(app.canvas)
  }

  // 텍스트 생성
  const text = new Text({
    text: title,
    style: {
      fontFamily: 'Arial, sans-serif',
      fontSize: 48,
      lineHeight: 48 * 1.5,
      fill: 0x333333,
      align: 'center',
      fontWeight: 'bold'
    },
  })

  const renderTextureText = RenderTexture.create({
    width: text.width,
    height: text.height,
  })

  app.renderer.render({
    container: text,
    target: renderTextureText,
  })

  const textSprite = Sprite.from(renderTextureText)

  textSprite.anchor.set(0.5)
  textSprite.x = app.screen.width / 2;
  textSprite.y = app.screen.height / 2;

  app.renderer.on('resize', () => {
    textSprite.x = app.screen.width / 2;
    textSprite.y = app.screen.height / 2;
  })

  app.stage.addChild(textSprite)


}
