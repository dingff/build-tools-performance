# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-18`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B70%2C56%2C79%2C87%2C92%2C76%2C57%2C93%2C14%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A106.94999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B8182%2C1658%2C1402%2C1547%2C2649%2C12151%2C18574%2C7180%2C12184%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A21360.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B777%2C700%2C414%2C495%2C393%2C355%2C7714%2C24%2C995%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A8871.099999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B200%2C266%2C219%2C168%2C115%2C220%2C478%2C41%2C2488%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2861.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B131%2C255%2C174%2C153%2C119%2C24%2C86%2C36%2C2339%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2689.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B8388%2C1687%2C1615%2C1731%2C1643%2C10250%2C2109%2C2056%2C12454%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14322.099999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10724.3%2C7214.8%2C7438.9%2C7579.4%2C7579.4%2C8023.5%2C6966.2%2C6966.2%2C7420%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12332.944999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.5%27%2C%27Unpack+%28Prebundle%29+3.7.5%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2507.9%2C1703.2%2C1571.6%2C1329.6%2C1329.6%2C2036.3%2C1820.3%2C1820.3%2C1876.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28322%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2815%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.085%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                     | 70    | 8182ms (5.8x)   | 777ms (32.4x)   | 200ms (4.9x)   | 131ms (5.5x)   | 8388ms (5.2x)  |
| Rspack CLI 1.6.8                | 56    | 1658ms (1.2x)   | 700ms (29.2x)   | 266ms (6.5x)   | 255ms (10.6x)  | 1687ms (1.0x)  |
| Rsbuild 1.6.15                  | 79    | 1402ms (1.0x)   | 414ms (17.3x)   | 219ms (5.3x)   | 174ms (7.3x)   | 1615ms (1.0x)  |
| Unpack 3.7.5                    | 87    | 1547ms (1.1x)   | 495ms (20.6x)   | 168ms (4.1x)   | 153ms (6.4x)   | 1731ms (1.1x)  |
| Unpack (Prebundle) 3.7.5        | 92    | 2649ms (1.9x)   | 393ms (16.4x)   | 115ms (2.8x)   | 119ms (5.0x)   | 1643ms (1.0x)  |
| Next.js (Turbopack) 16.0.8      | 76    | 12151ms (8.7x)  | 355ms (14.8x)   | 220ms (5.4x)   | 24ms (1.0x)    | 10250ms (6.3x) |
| Vite 8.0.0-beta.3               | 57    | 18574ms (13.2x) | 7714ms (321.4x) | 478ms (11.7x)  | 86ms (3.6x)    | 2109ms (1.3x)  |
| Vite (Full Bundle) 8.0.0-beta.3 | 93    | 7180ms (5.1x)   | 24ms (1.0x)     | 41ms (1.0x)    | 36ms (1.5x)    | 2056ms (1.3x)  |
| webpack (SWC) 5.104.0           | 14    | 12184ms (8.7x)  | 995ms (41.5x)   | 2488ms (60.7x) | 2339ms (97.5x) | 12454ms (7.7x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10724.3kB (1.5x) | 2507.9kB (1.9x) |
| Rspack CLI 1.6.8                | 7214.8kB (1.0x)  | 1703.2kB (1.3x) |
| Rsbuild 1.6.15                  | 7438.9kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.7.5                    | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Unpack (Prebundle) 3.7.5        | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Next.js (Turbopack) 16.0.8      | 8023.5kB (1.2x)  | 2036.3kB (1.5x) |
| Vite 8.0.0-beta.3               | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.3 | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| webpack (SWC) 5.104.0           | 7420.0kB (1.1x)  | 1876.1kB (1.4x) |
<!-- BENCHMARK:END -->






























































































































































