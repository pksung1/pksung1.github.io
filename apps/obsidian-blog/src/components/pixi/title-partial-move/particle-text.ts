import { Container, Text, Graphics,  } from "pixi.js";

class ParticleText {

  text: string;
  constructor(text: string) {
    this.text = text;
  }

  build() {
    const container = new Container()

    const text = new Text({
      text: this.text,
      style: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 48,
        lineHeight: 48 * 1.5,
        fill: 0x333333,
        align: 'center',
        fontWeight: 'bold'
      }
    })

    // Text를 먼저 추가해서 크기를 확정
    container.addChild(text)

    // Text의 실제 크기를 사용해서 background 그리기
    const background = new Graphics()
    background
      .rect(0, 0, text.width, text.height)
      // .fill({ color: 'red' })
    
    // Graphics를 맨 앞(인덱스 0)에 추가해서 뒤에 렌더링되도록 함
    container.addChildAt(background, 0)

    return container
  }
}

export default ParticleText