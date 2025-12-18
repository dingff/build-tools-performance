# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-18`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B74%2C56%2C81%2C91%2C95%2C84%2C70%2C93%2C13%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A109.24999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B4488%2C1854%2C1512%2C1610%2C1330%2C2161%2C13444%2C7447%2C12455%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A15460.599999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B820%2C741%2C426%2C500%2C383%2C383%2C7057%2C27%2C1080%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A8115.549999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B146%2C242%2C180%2C144%2C95%2C84%2C164%2C68%2C2443%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2809.45%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B160%2C250%2C176%2C134%2C94%2C157%2C116%2C47%2C2535%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2915.25%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B6557%2C1821%2C1721%2C1625%2C1689%2C10471%2C2109%2C2119%2C14008%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A16109.199999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10724.3%2C7214.8%2C7438.9%2C7579.4%2C7579.4%2C7380.4%2C6966.2%2C6966.2%2C7420%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12332.944999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.1.0-canary.32%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2507.9%2C1703.2%2C1571.6%2C1329.6%2C1329.6%2C1871.3%2C1820.3%2C1820.3%2C1876.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2815%2C+79%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.085%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                                 | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------------ | ----- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                          | 74    | 4488ms (3.4x)   | 820ms (30.4x)   | 146ms (2.1x)   | 160ms (3.4x)   | 6557ms (4.0x)  |
| Rspack CLI 1.6.8                     | 56    | 1854ms (1.4x)   | 741ms (27.4x)   | 242ms (3.6x)   | 250ms (5.3x)   | 1821ms (1.1x)  |
| Rsbuild 1.6.15                       | 81    | 1512ms (1.1x)   | 426ms (15.8x)   | 180ms (2.6x)   | 176ms (3.7x)   | 1721ms (1.1x)  |
| Unpack 3.7.5                         | 91    | 1610ms (1.2x)   | 500ms (18.5x)   | 144ms (2.1x)   | 134ms (2.9x)   | 1625ms (1.0x)  |
| Unpack (Prebundle) 3.7.5             | 95    | 1330ms (1.0x)   | 383ms (14.2x)   | 95ms (1.4x)    | 94ms (2.0x)    | 1689ms (1.0x)  |
| Next.js (Turbopack) 16.1.0-canary.32 | 84    | 2161ms (1.6x)   | 383ms (14.2x)   | 84ms (1.2x)    | 157ms (3.3x)   | 10471ms (6.4x) |
| Vite 8.0.0-beta.3                    | 70    | 13444ms (10.1x) | 7057ms (261.4x) | 164ms (2.4x)   | 116ms (2.5x)   | 2109ms (1.3x)  |
| Vite (Full Bundle) 8.0.0-beta.3      | 93    | 7447ms (5.6x)   | 27ms (1.0x)     | 68ms (1.0x)    | 47ms (1.0x)    | 2119ms (1.3x)  |
| webpack (SWC) 5.104.0                | 13    | 12455ms (9.4x)  | 1080ms (40.0x)  | 2443ms (35.9x) | 2535ms (53.9x) | 14008ms (8.6x) |

**Bundle sizes**

| Name                                 | Output size      | Gzipped size    |
| ------------------------------------ | ---------------- | --------------- |
| Farm 1.7.11                          | 10724.3kB (1.5x) | 2507.9kB (1.9x) |
| Rspack CLI 1.6.8                     | 7214.8kB (1.0x)  | 1703.2kB (1.3x) |
| Rsbuild 1.6.15                       | 7438.9kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.7.5                         | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Unpack (Prebundle) 3.7.5             | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Next.js (Turbopack) 16.1.0-canary.32 | 7380.4kB (1.1x)  | 1871.3kB (1.4x) |
| Vite 8.0.0-beta.3                    | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.3      | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| webpack (SWC) 5.104.0                | 7420.0kB (1.1x)  | 1876.1kB (1.4x) |
<!-- BENCHMARK:END -->































































































































































