# @johnson361/advanced-label-marker

### **The Modern, Drift-Free Successor to `markerwithlabel`**

[![npm version](https://img.shields.io/npm/v/@johnson361/advanced-label-marker.svg)](https://www.npmjs.com/package/@johnson361/advanced-label-marker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AdvancedLabelMarker** is a high-performance Google Maps overlay engineered to eliminate the "floating" or "sliding" effect (drift) often seen in custom HTML labels. It is built specifically to address the **February 2024 deprecation of `google.maps.Marker`**.


# 📍 Advanced Label Marker

A powerful and customizable label marker for the Google Maps JavaScript API.

<div align="center">

  <img src="https://img.shields.io/badge/AdvancedLabelMarker-27ae60?style=for-the-badge&logo=google-maps&logoColor=white" alt="Library Logo" />

  <h1>📍 AdvancedLabelMarker</h1>

  <p><b>The modern solution for building high-performance, fully customizable Google Maps markers.</b></p>

  <a href="https://johnson361.github.io/advanced-label-marker/">
    <img src="https://img.shields.io/badge/🚀_Explore_Live_Demos-Click_Here-success?style=for-the-badge&logo=rocket" alt="Live Demo" />
  </a>

  <br><br>

  <a href="https://www.npmjs.com/package/@johnson361/advanced-label-marker">
    <img src="https://img.shields.io/npm/v/@johnson361/advanced-label-marker?style=flat-square&color=cb3837" alt="NPM" />
  </a>
  <a href="https://github.com/johnson361/advanced-label-marker">
    <img src="https://img.shields.io/github/stars/johnson361/advanced-label-marker?style=flat-square&color=333" alt="Stars" />
  </a>
  <img src="https://img.shields.io/badge/Performance-Optimized-blue?style=flat-square" alt="Performance" />

</div>

<hr />

## 🌟 Interactive Documentation Hub

Why read when you can experiment? Our **Live Demo Suite** allows you to see the library in action with real-world scenarios.

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://johnson361.github.io/advanced-label-marker/example1-custom-html-marker.html" target="_blank">
        <b>🏗️ Basic HTML Setup</b><br>
        <i>Custom Labels & Styles</i>
      </a>
    </td>
    <td width="50%" align="center">
      <a href="https://johnson361.github.io/advanced-label-marker/example2-info-window-on-html-marker.html" target="_blank">
        <b>💬 InfoWindow Logic</b><br>
        <i>Interactive Popups</i>
      </a>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://johnson361.github.io/advanced-label-marker/example3-custom-icon.html" target="_blank">
        <b>🏠 Cuasrom Icon Example</b><br>
        <i>Customized icon on Map</i>
      </a>
    </td>
    <td width="50%" align="center">
      <a href="https://johnson361.github.io/advanced-label-marker/example4-cluster.html" target="_blank">
        <b>🧬 Marker Clustering</b><br>
        <i>Performance for 1000+ Pins</i>
      </a>
    </td>
  </tr>
</table>

<br />

---

## ✨ Features

- **Zero Zoom Drift**
  Pixel-perfect synchronization during zoom and pan.

- **Custom HTML Labels**
  Full control over label DOM and CSS.

- **Custom HTML Icons**
  Use `<div>` or `<img>` elements as marker icons.

- **Drag & Drop Support**
  Built-in synchronization for draggable markers and labels.

- **Event Forwarding**
  Native-like `click`, `drag`, `dragstart`, and `dragend` events.

- **Clustering Ready**
  Compatible with MarkerClustererPlus and other clusterers.

- **Dynamic Updates**
  Change content, styles, or visibility on the fly.

- **Legacy-Friendly API**
  Modern internals with a familiar API for easy migration.

---

---

## 🚀 Why This Module?

### 1. Fixes the Deprecation Warning
If you see the console error:
`As of February 21st, 2024, google.maps.Marker is deprecated. Please use AdvancedMarkerElement instead.`
This library is your solution. It bridges the gap between the new **AdvancedMarkerElement** and custom HTML overlays.

### 2. Zero Zoom Drift (Pixel-Perfect)
Legacy libraries like `markerwithlabel` rely on events that fire *after* a zoom, causing labels to "drift" away from their pins. This module hooks into the map's internal render loop via `OverlayView`, ensuring the label and marker stay mathematically locked together during transitions.

### 3. Modern Tech Stack
- Supports **Google Maps JS API v3.56+**.
- Uses **WebGL-optimized** markers.
- Fully compatible with modern bundlers (Vite, Webpack, ES Modules).

---

## 📦 Installation

## Requirements

***This library requires the Google Maps JavaScript API.***

🚀 Quick Start
1. Install the package via npm:

```bash
npm install @johnson361/advanced-label-marker
```

2. Include the Google Maps Script
Add this to your index.html. Replace ```YOUR_API_KEY``` with your actual key.


```HTML
<script
  src="[https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=weekly](https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=weekly)"
  defer
></script>```

3. Initialize the Marker


```JavaScript
import { AdvancedLabelMarker } from '@johnson361/advanced-label-marker';

const marker = new AdvancedLabelMarker({
  map,
  position: { lat: 37.422, lng: -122.084 },
  label: 'Hello World!',
});```