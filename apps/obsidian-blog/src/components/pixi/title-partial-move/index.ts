
import { Application, Text, extensions, ResizePlugin, RenderTexture, Sprite, Container } from 'pixi.js'
import ParticleText from './particle-text'

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

  const particleText = new ParticleText(title)
  const particleTextContainer = particleText.build()

  particleTextContainer.x = app.screen.width / 2 - particleTextContainer.width / 2
  particleTextContainer.y = app.screen.height / 2 - particleTextContainer.height / 2

  app.stage.addChild(particleTextContainer)


  app.renderer.on('resize', () => {
    particleTextContainer.x = app.screen.width / 2 - particleTextContainer.width / 2
    particleTextContainer.y = app.screen.height / 2 - particleTextContainer.height / 2
  })

}
