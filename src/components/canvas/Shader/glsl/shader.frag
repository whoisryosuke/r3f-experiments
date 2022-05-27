  uniform float time;
  uniform vec3 color;
  uniform float borderWidth;
  varying vec2 vUv;
  #pragma glslify: random = require(glsl-random)


  void main() {

    // We basically go through the X and Y values to see if they're less than the threshold
    // UV goes from 0 to 1, so as X travels from 0 to 1
    // we "limit" the color to when X is less than the borderWidth
    // e.g. 0-0.1 = colored, 0.1-1.0 - not colored
    // But we also get the opposite corners by taking the borderWidth and subtracting from 1.0 (the max)
    if (vUv.x <= borderWidth || vUv.y <= borderWidth || vUv.x >= 1.0 - borderWidth || vUv.y >= 1.0 - borderWidth)
        // gl_FragColor.r += 1.0;
        gl_FragColor.rgba = vec4(color, 1.);

  }
