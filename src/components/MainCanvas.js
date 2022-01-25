import React, {useEffect, useRef} from "react"
import _ from 'lodash'

class Text {
  constructor(canvas, options) {
    this.canvas = canvas
    this.options = options

    this.render = this.render.bind(this)
    this.resize = this.resize.bind(this)
  }

  resize (options) {
    this.options = options;
  }

  render () {
    const ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = `rgb(
      ${parseInt(Math.random() * 255)},
      ${parseInt(Math.random() * 255)},
      ${parseInt(Math.random() * 255)})`;
    const {width, height} = this.options
    ctx.font = "6rem 'The Nautigal'";
    const devseonMeasure = ctx.measureText('DEVSEON')
    ctx.strokeText('DEVSEON', (width - devseonMeasure.width) / 2, (height - devseonMeasure.fontBoundingBoxAscent) / 2)
  }
}

class Canvas {
  constructor(canvas) {
    this.canvas = canvas
    this.width = canvas.offsetWidth
    this.height = canvas.offsetHeight

    
    this.tick = 100;

    this.options = {
      width: this.width,
      height: this.height
    }

    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext('2d')

    this.resize = this.resize.bind(this)
    
    window.addEventListener('resize', _.debounce(this.resize, 300))
    this.render = _.throttle(this.render.bind(this), 300);
    this.start();
  }

  start () {
    this.textCtx = new Text(this.canvas, this.options);
    this.render();
    // this.loop()
  }

  resize (e) {
    const {offsetWidth, offsetHeight} = this.canvas

    this.width = offsetWidth;
    this.height = offsetHeight
    
    this.options = {
      width: offsetWidth,
      height: offsetHeight
    }

    this.textCtx.resize(this.options)
  } 

  render () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.textCtx.render();
    requestAnimationFrame(this.render)
  }

}

const MainCanvas = () => {
  const canvasRef = useRef()
  useEffect(() => {
    new Canvas(canvasRef.current)
  }, [canvasRef])

  return (
    <div id="main-canvas" className="flex fixed h-screen w-screen pt-12 top-0 left-0 z-0 items-center justify-center bg-gray-100">
      <canvas ref={canvasRef} className="w-full h-full"/>
    </div>
  )
}

export default MainCanvas