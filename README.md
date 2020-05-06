# Simple Range Slider
A simple implementation of a small range slider with pure Javascript.

## Example
```javascript
const sr = new SimpleRangeSlider(document.getElementById("simple-range"), {
    min: 0,
    max: 10,
    mode: "horizontal", // vertical
    size: "200px",
    defaultValue: 5,
    pathDiameter: "10px",
    handlerSize: "8px",
    pathColor: "#ddd",
    progressColor: "#1c70ff",
    loadingProgressColor: "#ccc",
    lockOnLoadingValue: false,
});
```

#### Listeners
```javascript
sr.on("start", (value) => {
    // console.log("started", value);
});

sr.on("dragging", (event, value) => {
    // console.log("dragging", event, value);
});

sr.on("change", (value) => {
    // console.log("changed", value);
});

sr.on("stop", (value) => {
    // console.log("stopped", value);
});

sr.on("loadingChange", (value) => {
    // console.log("loadingChange", value);
});

```