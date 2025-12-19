# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-19`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B59%2C56%2C81%2C92%2C95%2C88%2C64%2C93%2C13%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A109.24999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B3999%2C1734%2C1378%2C1489%2C1289%2C2755%2C15893%2C6398%2C11725%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A18276.949999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B791%2C715%2C411%2C495%2C382%2C356%2C7084%2C29%2C1142%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A8146.599999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B220%2C264%2C197%2C151%2C122%2C52%2C230%2C66%2C2188%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2516.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B191%2C249%2C173%2C142%2C120%2C84%2C56%2C46%2C2198%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2527.7%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B5694%2C1532%2C1524%2C1513%2C1647%2C8699%2C2021%2C1926%2C12344%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14195.599999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10725%2C7214.8%2C7438.9%2C7579.4%2C7579.4%2C7380%2C6966.2%2C6966.2%2C7420%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12333.749999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2507.9%2C1703.2%2C1571.6%2C1329.6%2C1329.6%2C1871.2%2C1820.3%2C1820.3%2C1876.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.085%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                     | 59    | 3999ms (3.1x)   | 791ms (27.3x)   | 220ms (4.2x)   | 191ms (4.2x)   | 5694ms (3.8x)  |
| Rspack CLI 1.6.8                | 56    | 1734ms (1.3x)   | 715ms (24.7x)   | 264ms (5.1x)   | 249ms (5.4x)   | 1532ms (1.0x)  |
| Rsbuild 1.6.15                  | 81    | 1378ms (1.1x)   | 411ms (14.2x)   | 197ms (3.8x)   | 173ms (3.8x)   | 1524ms (1.0x)  |
| Unpack 3.7.7                    | 92    | 1489ms (1.2x)   | 495ms (17.1x)   | 151ms (2.9x)   | 142ms (3.1x)   | 1513ms (1.0x)  |
| Unpack (Prebundle) 3.7.7        | 95    | 1289ms (1.0x)   | 382ms (13.2x)   | 122ms (2.3x)   | 120ms (2.6x)   | 1647ms (1.1x)  |
| Next.js (Turbopack) 16.1.0      | 88    | 2755ms (2.1x)   | 356ms (12.3x)   | 52ms (1.0x)    | 84ms (1.8x)    | 8699ms (5.7x)  |
| Vite 8.0.0-beta.3               | 64    | 15893ms (12.3x) | 7084ms (244.3x) | 230ms (4.4x)   | 56ms (1.2x)    | 2021ms (1.3x)  |
| Vite (Full Bundle) 8.0.0-beta.3 | 93    | 6398ms (5.0x)   | 29ms (1.0x)     | 66ms (1.3x)    | 46ms (1.0x)    | 1926ms (1.3x)  |
| webpack (SWC) 5.104.1           | 13    | 11725ms (9.1x)  | 1142ms (39.4x)  | 2188ms (42.1x) | 2198ms (47.8x) | 12344ms (8.2x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10725.0kB (1.5x) | 2507.9kB (1.9x) |
| Rspack CLI 1.6.8                | 7214.8kB (1.0x)  | 1703.2kB (1.3x) |
| Rsbuild 1.6.15                  | 7438.9kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.7.7                    | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Unpack (Prebundle) 3.7.7        | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Next.js (Turbopack) 16.1.0      | 7380.0kB (1.1x)  | 1871.2kB (1.4x) |
| Vite 8.0.0-beta.3               | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.3 | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| webpack (SWC) 5.104.1           | 7420.0kB (1.1x)  | 1876.1kB (1.4x) |
<!-- BENCHMARK:END -->
































































































































































