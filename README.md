# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-09`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B22771%2C5505%2C4736%2C5601%2C6067%2C7086%2C82540%2C93883%2C24597%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2828%2C+69%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A107965.45%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B829%2C1577%2C678%2C614%2C1148%2C1044%2C1504%2C1117%2C0%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2828%2C+69%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1813.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B269%2C452%2C379%2C430%2C422%2C208%2C110%2C136%2C0%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2828%2C+69%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A519.8%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B22894%2C5184%2C4986%2C6771%2C7056%2C5706%2C41727%2C9986%2C9769%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2828%2C+69%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A47986.049999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B10730.8%2C7219%2C7440.6%2C7523.1%2C7523.1%2C7523.1%2C8027.6%2C6977.3%2C6977.3%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2828%2C+69%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2510.2%2C1704.5%2C1572.3%2C1609.5%2C1609.5%2C1609.5%2C2037.8%2C1825.8%2C1825.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2828%2C+69%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| ------------------------------- | --------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                     | 22771ms (4.8x)  | 829ms (1.4x)   | 269ms (2.4x)   | 22894ms (4.6x)  |
| Rspack CLI 1.6.6                | 5505ms (1.2x)   | 1577ms (2.6x)  | 452ms (4.1x)   | 5184ms (1.0x)   |
| Rsbuild 1.6.13                  | 4736ms (1.0x) ◆ | 678ms (1.1x)   | 379ms (3.4x)   | 4986ms (1.0x) ◆ |
| Unpack 3.6.1                    | 5601ms (1.2x)   | 614ms (1.0x) ◆ | 430ms (3.9x)   | 6771ms (1.4x)   |
| Unpack (Prebundle) 3.6.1        | 6067ms (1.3x)   | 1148ms (1.9x)  | 422ms (3.8x)   | 7056ms (1.4x)   |
| Unpack (Prebundle Plus) 3.6.1   | 7086ms (1.5x)   | 1044ms (1.7x)  | 208ms (1.9x)   | 5706ms (1.1x)   |
| Next.js (Turbopack) 16.0.8      | 82540ms (17.4x) | 1504ms (2.4x)  | 110ms (1.0x) ◆ | 41727ms (8.4x)  |
| Vite 8.0.0-beta.1               | 93883ms (19.8x) | 1117ms (1.8x)  | 136ms (1.2x)   | 9986ms (2.0x)   |
| Vite (Full Bundle) 8.0.0-beta.1 | 24597ms (5.2x)  | Failed         | Failed         | 9769ms (2.0x)   |

**Bundle sizes**

| Name                            | Total size        | Gzipped size      |
| ------------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                     | 10730.8kB (1.5x)  | 2510.2kB (1.6x)   |
| Rspack CLI 1.6.6                | 7219.0kB (1.0x)   | 1704.5kB (1.1x)   |
| Rsbuild 1.6.13                  | 7440.6kB (1.1x)   | 1572.3kB (1.0x) ◆ |
| Unpack 3.6.1                    | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Unpack (Prebundle) 3.6.1        | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Unpack (Prebundle Plus) 3.6.1   | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Next.js (Turbopack) 16.0.8      | 8027.6kB (1.2x)   | 2037.8kB (1.3x)   |
| Vite 8.0.0-beta.1               | 6977.3kB (1.0x) ◆ | 1825.8kB (1.2x)   |
| Vite (Full Bundle) 8.0.0-beta.1 | 6977.3kB (1.0x) ◆ | 1825.8kB (1.2x)   |
<!-- BENCHMARK:END -->











































































































