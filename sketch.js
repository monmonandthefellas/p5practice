let textbox, addBtn, title, poem;

function setup() {
  noCanvas();

  const controls = createDiv().addClass('controls');
  title = createP("Poetry Maker");
  poem  = createDiv("");
  textbox = createInput("").attribute('type', 'text').parent(controls);
  addBtn  = createButton("Add line").parent(controls);


  addBtn.mousePressed(() => {
    const userLine = textbox.value().trim();
    if (!userLine) return;
    textbox.value("");

    // create a row: text + slider
    const row = createDiv().addClass('poem-row').parent(poem);
    const textSpan = createSpan(userLine).addClass('poem-text').parent(row);
    const slider = createSlider(0, 360, floor(random(360)), 1).addClass('poem-slider').parent(row);

    // apply color whenever the slider moves (and once at start)
    const applyColor = () => textSpan.style('color', `hsl(${slider.value()}, 80%, 50%)`);
    slider.input(applyColor);
    applyColor();
  });
}

function draw() {}

