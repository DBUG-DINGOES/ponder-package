  <div align="center">
<h1>Spinners & Animations React Components Library</h1>
    We built this so you can enhance your UI effortlessly! ✨
    <br />
    <br />
    <a href="https://ponder-gold.vercel.app/" disabled>View Demo Site</a>
    ·
  <br/>
  <br/>

<span style="color:red"><strong> Fully Released 🚀</strong></span>
<br />
<br />
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWp0N3VrbWozYmtpeWN0czUzZG5hazd4YmxzNWNvbjV2eGZ6djM5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iHsP6oTTK5PArxc478/giphy.gif" alt="Spinner Demo GIF1" width="500" />
<br />
<br />
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanltcnd0YjhlZHhpazZ5dGJ3cnJwbjRqbTY4ank0emh3dzlkNXYwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hpAgl82gAgE1flIdHS/giphy.gif" alt="Spinner Demo GIF2" width="500" />
<br />
<br />
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRvOW91aTY0bW82MzczZHJ0Yjl6bGZuYWpybXE5MDNlNTJudjdhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dBAu7URHBi5PRaZ5Ic/giphy.gif" alt="Spinner Demo GIF3" width="500" />
<br />
<br />
Team DBUG DINGOES from Holmesglen Ponder Spinners has crafted a set of animated SVG spinners and loading indicators, so you don’t have to spend time coding and debugging UI components from scratch. Enhance your app's loading experience with visually captivating components!

  <br />
  <br />
  
  </div>

# Spinner Components Animation

This library includes various React components for spinners and animations, helping you enhance your UI effortlessly using **styled-components** for animations and customizations.

---

## Current Components 🛠️

| Name                    | Import Statement                                                       | Description                                                                    |
| ----------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Wave Spinner            | `import Wave from 'components/Wave'`                                   | Animated wave with customizable size, colors, speed, and opacity.              |
| Dot Spinner             | `import DotSpinner from 'components/DotSpinner'`                       | Sequentially jumping dots creating a wave-like loading effect.                 |
| Sequential Box Morphing | `import SequentialBoxMorphing from 'components/SequentialBoxMorphing'` | Morphing boxes that shift between squares and circles in a sequence.           |
| Circular Spinner        | `import CircularSpinner from 'components/CircularSpinner'`             | Rotating circular spinner with customizable speed, direction, and color.       |
| Moving Circles          | `import MovingCircles from 'components/MovingCircles'`                 | Animated set of morphing circles with customizable size, colors, and duration. |

---

## Installation

To install and set up the library, run:

```bash
npm i <package-name>
npm i styled-components
```

Or using Yarn:

```bash
yarn add <package-name>
npm add styled-components
```

---

## Usage

### **Wave Component**

```javascript
import Wave from "components/Wave";

<Wave size="70px" color={["#22333B", "#EAE0D5"]} speed="2s" opacity={1} />;
```

### **Dot Spinner**

```javascript
import DotSpinner from "components/DotSpinner";

<DotSpinner colors={["#FF5733", "#33FF57", "#3357FF"]} />;
```

### **Circular Spinner**

```javascript
import CircularSpinner from "components/CircularSpinner";

<CircularSpinner color="blue" speed="1.5s" opacity={0.7} direction="360deg" />;
```

### **Sequential Box Morphing**

```javascript
import SequentialBoxMorphing from "components/SequentialBoxMorphing";

<SequentialBoxMorphing color={["#ff0000", "#00ff00", "#0000ff", "#ff00ff"]} />;
```

### **MovingCircles Component**

```javascript
import MovingCircles from "components/MovingCircles";

<MovingCircles
  size={90}
  color1="#FF6F61"
  color2="#22333B"
  color3="#ffa9a1"
  duration={3}
/>;
```

---

## Component Properties 📋

### Wave Component

| Property  | Type             | Description                                                                   |
| --------- | ---------------- | ----------------------------------------------------------------------------- |
| `size`    | string           | Size of the SVG (width and height). Defaults to `30px`.                       |
| `color`   | array of strings | Array of colors for the wave animation. Defaults to `["#22333B", "#EAE0D5"]`. |
| `speed`   | string           | Speed of the animation (e.g., `2s`). Defaults to `2s`.                        |
| `opacity` | number           | Opacity of the wave (0 to 1). Defaults to `1`.                                |

### Dot Spinner

| Property | Type             | Description                                                                   |
| -------- | ---------------- | ----------------------------------------------------------------------------- |
| `colors` | array of strings | Colors for each of the dots. Defaults to `["#22333B", "#EAE0D5", "#C6AC8F"]`. |

### Circular Spinner

| Property    | Type   | Description                                                    |
| ----------- | ------ | -------------------------------------------------------------- |
| `color`     | string | Color of the circular spinner. Defaults to `#D97292`.          |
| `speed`     | string | Speed of the rotation (e.g., `2s`). Defaults to `2s`.          |
| `opacity`   | number | Opacity of the spinner (0 to 1). Defaults to `0.5`.            |
| `direction` | string | Direction of rotation (e.g., `360deg`). Defaults to `-360deg`. |

### Sequential Box Morphing

| Property | Type             | Description                                                                                |
| -------- | ---------------- | ------------------------------------------------------------------------------------------ |
| `color`  | array of strings | Colors for the morphing boxes. Defaults to `["#2f3e46", "#e0e0e0", "#6b6252", "#ccb69b"]`. |
| `delay`  | string           | Delay between animations. Pre-configured but can be customized if needed.                  |

### MovingCircles Component

| Property   | Type   | Description                                                   |
| ---------- | ------ | ------------------------------------------------------------- |
| `size`     | number | Size of the circles. Defaults to `90`.                        |
| `color1`   | string | Color of the first circle. Defaults to `"#FF6F61"`.           |
| `color2`   | string | Color of the second circle. Defaults to `"#22333B"`.          |
| `color3`   | string | Color of the third circle. Defaults to `"#ffa9a1"`.           |
| `duration` | number | Duration of the animation cycle in seconds. Defaults to `3s`. |

---

<br />
<br />

## Inspiration 💡

This library is inspired by various popular UI/UX components and spinners to ensure optimal user experience while loading content. Special thanks to the open-source community for their contributions to animated UI libraries.

### Special Thanks 🎉

Our Mentors for guiding us through the development process; Alex, Amberle and Daniel
