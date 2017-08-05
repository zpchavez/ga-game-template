require('../lib/ga');
const ga = window.ga;

const play = () => {

}

var g = ga(
  512,
  512,
  () => {
    g.canvas.style.border = "1px black dashed";
    g.canvas.style.display = "block";
    g.canvas.style.margin = "auto";
    g.backgroundColor = "white";
    g.state = play;
  }
);

g.start();
