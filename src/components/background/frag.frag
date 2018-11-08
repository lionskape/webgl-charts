// Author:
// Title:

precision lowp float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    st *= 3.;      // Scale up the space by 3

    st.x += fract(u_time * 0.5);

    st = fract(st); // Use values < 1

    // pattern-lines color
    vec3 lineColor = vec3(13. / 255., 17. / 255., 26. / 255.);

    vec2 bl = step(vec2(0.003), st);

    vec3 color = bl.x * bl.y * lineColor;

    gl_FragColor = vec4(color,1.0);
}