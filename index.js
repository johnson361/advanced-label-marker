/**
 * @name AdvancedLabelMarker
 * @package @johnson361/advanced-label-marker
 * @version 3.1.0
 * @author Nallori Robert Johnson
 * @description
 * A high-stability Google Maps overlay designed to eliminate label "drift."
 * Synchronizes custom HTML content with the AdvancedMarkerElement render loop
 * for pixel-perfect positioning during zoom and pan events.
 * @license MIT
 */

// Add this check at the very top of your file
if (typeof window !== 'undefined' && !window.google) {
    console.warn("@johnson361/advanced-label-marker: Google Maps API not detected. Ensure the API script is loaded before this module.");
}

class AdvancedLabelMarker extends google.maps.OverlayView {
  constructor(options = {}) {
    super();

    this.options = options;
    this.map = options.map || null;
    this.position = options.position;

    this.labelClass = options.labelClass || "";
    this.labelStyle = options.labelStyle || {};
    this.labelContent = options.labelContent || "";

    this.marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.map,
      position: this.position,
      title: options.title || "",
      content: options.iconHtml || null,   // Only if you want custom HTML icon
      draggable: options.draggable || false, // Use property here
      gmpDraggable: options.draggable || false,
      gmpClickable: true
    });

    if (options.icon) {
      this.setIcon(options.icon, {
        width: options.iconWidth,   // Optional: allow passing width
        height: options.iconHeight, // Optional: allow passing height
        className: options.iconClass
      });
    }

    this.marker.addListener("click", (event) => {
      google.maps.event.trigger(this, "click", event);
    });

    this.marker.addListener("drag", (event) => {
      const newPos = event.latLng;
      this.position = newPos; // Update the internal state
      this.draw();            // Force the label to redraw at the new position
      google.maps.event.trigger(this, "drag", event);
    });

    this.marker.addListener("dragstart", (event) => {
      google.maps.event.trigger(this, "dragstart", event);
    });

    this.marker.addListener("dragend", (event) => {
      this.position = event.latLng;
      google.maps.event.trigger(this, "dragend", event);
    });

    this.div = null;

    this.setMap(this.map);
  }

  onAdd() {
    this.div = document.createElement("div");
    this.div.className = this.labelClass;
    Object.assign(this.div.style, this.labelStyle);

    this.div.innerHTML = this.labelContent;
    this.div.style.position = "absolute";
    this.div.style.transform = "translate(-50%, -100%)";

    this.div.addEventListener("click", () => {
      console.log("Label clicked advanced-label-marker");
      google.maps.event.trigger(this, "click");
    });

    const panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(this.div);
  }

  draw() {
    const projection = this.getProjection();
    if (!projection) return;

    const pos = projection.fromLatLngToDivPixel(this.position);

    if (this.div) {
      this.div.style.left = pos.x + "px";
      this.div.style.top = pos.y + "px";
    }
  }

  onRemove() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div);
    }
    this.div = null;
  }

  setPosition(latLng) {
    this.position = latLng;

    // Move HTML label
    const projection = this.getProjection();
    if (this.div && projection) {
      const point = projection.fromLatLngToDivPixel(latLng);
      this.div.style.left = point.x + "px";
      this.div.style.top = point.y + "px";
    }

    // Move the real map marker (AdvancedMarkerElement)
    if (this.marker) {
      this.marker.position = latLng;
    }
  }

  // getDraggable() {
  //   return this.marker.draggable || false;
  // }

  // Always return a proper LatLng for MarkerClustererPlus
  getPosition() {
    return this.position instanceof google.maps.LatLng
      ? this.position
      : new google.maps.LatLng(this.position.lat, this.position.lng);
  }

  // Return true/false if the marker is draggable
  getDraggable() {
    // Use options.draggable if defined, otherwise fallback to false
    return !!(this.options && this.options.draggable);
  }

  setDraggable(isDraggable) {
    this.options.draggable = isDraggable;
    if (this.marker) {
      this.marker.gmpDraggable = isDraggable;
    }
  }

  // Return true/false if the marker is visible
  getVisible() {
    // AdvancedMarkerElement doesn't have getVisible, so return true if map is set
    return !!this.marker?.map;
  }


  // getPosition() {
  //   return this.position;
  // }

  setLabelContent(html) {
    if (this.div) this.div.innerHTML = html;
    this.labelContent = html;
  }

  setLabelClass(cls) {
    if (this.div) this.div.className = cls;
    this.labelClass = cls;
  }

  setLabelStyle(styleObj) {
    if (this.div) Object.assign(this.div.style, styleObj);
    Object.assign(this.labelStyle, styleObj);
  }

  setLabelVisible(isVisible) {
    if (this.div) this.div.style.display = isVisible ? "block" : "none";
  }

  setMap(map) {
    super.setMap(map);
    this.marker.setMap(map);
  }

  // setIcon(iconUrl) {
  //   if (!this.marker) return;

  //   // Ensure iconUrl is a string
  //   if (typeof iconUrl !== "string") {
  //     console.error("iconUrl must be a string!", iconUrl);
  //     return;
  //   }

  //   const img = document.createElement("img");
  //   img.src = iconUrl;
  //   img.style.width = "40px";
  //   img.style.height = "40px";
  //   this.marker.content = img;
  // }
  setIcon(iconUrl, options = {}) {
    if (!this.marker) return;

    if (typeof iconUrl !== "string") {
      console.error("iconUrl must be a string! Received:", iconUrl);
      return;
    }

    const { width, height, className = "" } = options;

    const img = document.createElement("img");
    img.src = iconUrl;

    if (width) {
      img.style.width = width + "px";
    }

    if (height) {
      img.style.height = height + "px";
    }

    if (className) {
      img.className = className;
    }

    this.marker.content = img;
  }

}

export default AdvancedLabelMarker;