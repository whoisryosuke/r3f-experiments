  uniform vec3 color;
  uniform vec3 borderColor;
  uniform float borderWidth;
  uniform float gridSize;
  uniform float gridWidth;
  varying vec2 vUv;

  float grid(vec2 st, float res)
  {
    vec2 grid = fract(st*res);
    return (step(res,grid.x) * step(res,grid.y));
  }

  void main() {

    vec3 red = vec3(1,0,0);
    vec4 finalColor;
    // We basically go through the X and Y values to see if they're less than the threshold
    // UV goes from 0 to 1, so as X travels from 0 to 1
    // we "limit" the color to when X is less than the borderWidth
    // e.g. 0-0.1 = colored, 0.1-1.0 - not colored
    // But we also get the opposite corners by taking the borderWidth and subtracting from 1.0 (the max)
    if (vUv.x <= borderWidth || vUv.y <= borderWidth || vUv.x >= 1.0 - borderWidth || vUv.y >= 1.0 - borderWidth)
    {
        finalColor = vec4(borderColor, 1.);
    } else {
      // And we "fill in" the "background" with another color
      finalColor = vec4(color, 1.);
    } 

    // UV goes from 0-1, so we need to break it up into a grid
    // We do that by "dividing" 1 by the number of grid segments we need (e.g. 2 for 2x2 grid)
    if(fract(vUv.x / gridSize) < gridWidth || fract(vUv.y / gridSize) < gridWidth)
        finalColor = finalColor / vec4(0.9,0.9,0.9, 1);

    // This makes a small square 1/4 the size (but fills color inversely? if that makes sense)
    // if (vUv.x* 2.0 <= borderWidth || vUv.y* 2.0 <= borderWidth || vUv.x* 2.0 >= 1.0 - borderWidth || vUv.y* 2.0 >= 1.0 - borderWidth)
    // {
    //     // finalColor = vec4(borderColor * vec3(0.3,0.3,0.3), 1.);
    //     finalColor = vec4(red, 1.);
    // }

    gl_FragColor.rgba = finalColor;

  }
