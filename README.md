# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-10`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B7950%2C1733%2C1493%2C1551%2C1878%2C2210%2C11815%2C22191%2C8018%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A25519.649999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B195%2C288%2C227%2C187%2C154%2C109%2C201%2C279%2C83%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A331.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B201%2C265%2C207%2C169%2C151%2C100%2C30%2C49%2C58%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A304.75%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B8495%2C1973%2C1860%2C1584%2C1741%2C1646%2C9665%2C2180%2C2329%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A11114.75%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B10730.8%2C7219%2C7440.6%2C7523.1%2C7523.1%2C7523.1%2C8027.5%2C6977.3%2C6977.3%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2510.2%2C1704.5%2C1572.3%2C1609.5%2C1609.5%2C1609.5%2C2037.7%2C1825.8%2C1825.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Dev cold start  | Root HMR      | Leaf HMR      | Prod build      |
| ------------------------------- | --------------- | ------------- | ------------- | --------------- |
| Farm 1.7.11                     | 7950ms (5.3x)   | 195ms (2.3x)  | 201ms (6.7x)  | 8495ms (5.4x)   |
| Rspack CLI 1.6.7                | 1733ms (1.2x)   | 288ms (3.5x)  | 265ms (8.8x)  | 1973ms (1.2x)   |
| Rsbuild 1.6.14                  | 1493ms (1.0x) ◆ | 227ms (2.7x)  | 207ms (6.9x)  | 1860ms (1.2x)   |
| Unpack 3.7.1                    | 1551ms (1.0x)   | 187ms (2.3x)  | 169ms (5.6x)  | 1584ms (1.0x) ◆ |
| Unpack (Prebundle) 3.7.1        | 1878ms (1.3x)   | 154ms (1.9x)  | 151ms (5.0x)  | 1741ms (1.1x)   |
| Unpack (Prebundle Plus) 3.7.1   | 2210ms (1.5x)   | 109ms (1.3x)  | 100ms (3.3x)  | 1646ms (1.0x)   |
| Next.js (Turbopack) 16.0.8      | 11815ms (7.9x)  | 201ms (2.4x)  | 30ms (1.0x) ◆ | 9665ms (6.1x)   |
| Vite 8.0.0-beta.1               | 22191ms (14.9x) | 279ms (3.4x)  | 49ms (1.6x)   | 2180ms (1.4x)   |
| Vite (Full Bundle) 8.0.0-beta.1 | 8018ms (5.4x)   | 83ms (1.0x) ◆ | 58ms (1.9x)   | 2329ms (1.5x)   |

**Bundle sizes**

| Name                            | Total size        | Gzipped size      |
| ------------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                     | 10730.8kB (1.5x)  | 2510.2kB (1.6x)   |
| Rspack CLI 1.6.7                | 7219.0kB (1.0x)   | 1704.5kB (1.1x)   |
| Rsbuild 1.6.14                  | 7440.6kB (1.1x)   | 1572.3kB (1.0x) ◆ |
| Unpack 3.7.1                    | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Unpack (Prebundle) 3.7.1        | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Unpack (Prebundle Plus) 3.7.1   | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Next.js (Turbopack) 16.0.8      | 8027.5kB (1.2x)   | 2037.7kB (1.3x)   |
| Vite 8.0.0-beta.1               | 6977.3kB (1.0x) ◆ | 1825.8kB (1.2x)   |
| Vite (Full Bundle) 8.0.0-beta.1 | 6977.3kB (1.0x) ◆ | 1825.8kB (1.2x)   |
<!-- BENCHMARK:END -->
















































































































