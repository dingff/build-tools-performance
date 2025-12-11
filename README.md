# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-11`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27DX+Score+%28Higher+is+better%29%27%2Cdata%3A%5B42%2C39%2C38%2C62%2C62%2C80%2C63%2C60%2C86%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27DX+Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A100%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B7474%2C1913%2C1675%2C1568%2C2113%2C2230%2C12535%2C23782%2C8612%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A27349.3%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B214%2C305%2C349%2C199%2C217%2C125%2C233%2C144%2C129%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A401.34999999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B208%2C250%2C227%2C192%2C177%2C133%2C22%2C116%2C55%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A287.5%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B7692%2C2012%2C2061%2C1817%2C1682%2C1652%2C10637%2C2301%2C2209%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12232.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B10730.8%2C7219%2C7440.6%2C7523.1%2C7523.1%2C7523.1%2C8027.4%2C6977.3%2C6977.3%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2510.2%2C1704.5%2C1572.3%2C1609.5%2C1609.5%2C1609.5%2C2037.6%2C1825.8%2C1825.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | DX Score | Dev cold start  | Root HMR     | Leaf HMR      | Prod build     |
| ------------------------------- | -------- | --------------- | ------------ | ------------- | -------------- |
| Farm 1.7.11                     | 42       | 7474ms (4.8x)   | 214ms (1.7x) | 208ms (9.5x)  | 7692ms (4.7x)  |
| Rspack CLI 1.6.7                | 39       | 1913ms (1.2x)   | 305ms (2.4x) | 250ms (11.4x) | 2012ms (1.2x)  |
| Rsbuild 1.6.14                  | 38       | 1675ms (1.1x)   | 349ms (2.8x) | 227ms (10.3x) | 2061ms (1.2x)  |
| Unpack 3.7.1                    | 62       | 1568ms (1.0x)   | 199ms (1.6x) | 192ms (8.7x)  | 1817ms (1.1x)  |
| Unpack (Prebundle) 3.7.1        | 62       | 2113ms (1.3x)   | 217ms (1.7x) | 177ms (8.0x)  | 1682ms (1.0x)  |
| Unpack (Prebundle Plus) 3.7.1   | 80       | 2230ms (1.4x)   | 125ms (1.0x) | 133ms (6.0x)  | 1652ms (1.0x)  |
| Next.js (Turbopack) 16.0.8      | 63       | 12535ms (8.0x)  | 233ms (1.9x) | 22ms (1.0x)   | 10637ms (6.4x) |
| Vite 8.0.0-beta.1               | 60       | 23782ms (15.2x) | 144ms (1.2x) | 116ms (5.3x)  | 2301ms (1.4x)  |
| Vite (Full Bundle) 8.0.0-beta.1 | 86       | 8612ms (5.5x)   | 129ms (1.0x) | 55ms (2.5x)   | 2209ms (1.3x)  |

**Bundle sizes**

| Name                            | Total size       | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10730.8kB (1.5x) | 2510.2kB (1.6x) |
| Rspack CLI 1.6.7                | 7219.0kB (1.0x)  | 1704.5kB (1.1x) |
| Rsbuild 1.6.14                  | 7440.6kB (1.1x)  | 1572.3kB (1.0x) |
| Unpack 3.7.1                    | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Unpack (Prebundle) 3.7.1        | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Unpack (Prebundle Plus) 3.7.1   | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Next.js (Turbopack) 16.0.8      | 8027.4kB (1.2x)  | 2037.6kB (1.3x) |
| Vite 8.0.0-beta.1               | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
| Vite (Full Bundle) 8.0.0-beta.1 | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
<!-- BENCHMARK:END -->
























































































































