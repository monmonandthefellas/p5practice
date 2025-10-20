let textbox, addBtn, title, poem;

function setup() {
  noCanvas();

  title = createP("Poetry Maker");
  poem  = createDiv("");

  textbox = createInput("");
  addBtn  = createButton("Add line");

  // (Optional) quick positions — remove if using your own CSS
  textbox.position(20, 20);
  addBtn.position(30 + textbox.width, 20);
  title.position(20, 60);
  poem.position(20, 100);

  addBtn.mousePressed(() => {
    const userLine = textbox.value().trim();
    if (!userLine) return;
    textbox.value("");

    // create a row: text + slider
    const row = createDiv().parent(poem);
    const textSpan = createSpan(userLine).parent(row);
    const slider = createSlider(0, 360, floor(random(360)), 1).parent(row);

    // apply color whenever the slider moves (and once at start)
    const apply = () => textSpan.style('color', `hsl(${slider.value()}, 80%, 50%)`);
    slider.input(apply);
    apply();
  });
}

function draw() {}
