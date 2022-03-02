

export const initAbout = () => {
  
  let circleBar = new ProgressBar.Circle("#circle-container", {
    color: "white",
    strokeWidth: 2,
    trailWidth: 2,
    trailColor: "black",
    easing: "easeInOut",
    from: { color: "#FF9900", width: 2 },
    to: { color: "#FF0099", width: 2 },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        top: '45%',
        left: '42%',
        padding: 0,
        margin: 0,
        transform: null
      }
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
      shape.path.setAttribute("stroke-width", state.width);
      shape.setText(Math.round(shape.value() * 185) );
    }
  });
  
  circleBar.animate(1, {
    duration: 1500
  });
}