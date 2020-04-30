import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      ctx: null,
      x: null,
      y: null,
    }
    this.canvasRef = React.createRef();
    this.canvas = undefined;
    this.ctx = undefined;
  }

  componentDidMount () {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.setState({
        canvas: canvas,
        ctx: ctx,
        x: canvas.width / 2,
        y: canvas.height - 30,
      }, () => this.begin());
    }
  }

  begin() {
    setInterval(() => this.draw(), 10);
  }

  draw() {
    const ctx = this.state.ctx;
    const canvas = this.state.canvas;
    const x = this.state.x;
    const y = this.state.y; 
    const dx = 1;
    const dy = -1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();

    this.setState({
      x: (x + dx),
      y: (y + dy),
    })
  }

  render() {
    return (
      <>
        <canvas 
          id="board"
          ref={this.canvasRef} />
      </>
    )
  }
}

export default Canvas;