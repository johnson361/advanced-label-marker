# @johnson361/advanced-label-marker

### **The Modern, Drift-Free Successor to `markerwithlabel`**

[![npm version](https://img.shields.io/npm/v/@johnson361/advanced-label-marker.svg)](https://www.npmjs.com/package/@johnson361/advanced-label-marker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AdvancedLabelMarker** is a high-performance Google Maps overlay engineered to eliminate the "floating" or "sliding" effect (drift) often seen in custom HTML labels. It is built specifically to address the **February 2024 deprecation of `google.maps.Marker`**.

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

This library requires the Google Maps JavaScript API.

Load it **before** using this package:

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=weekly"
  defer
></script>

```bash
npm install @johnson361/advanced-label-marker