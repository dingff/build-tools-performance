# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2026-01-05`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B35%2C54%2C77%2C78%2C92%2C86%2C58%2C91%2C11%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A105.8%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B4132%2C1821%2C1421%2C1915%2C1529%2C2215%2C16648%2C5688%2C12249%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A19145.199999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B1150%2C737%2C413%2C527%2C432%2C396%2C7868%2C28%2C1265%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9048.199999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B383%2C271%2C206%2C196%2C165%2C47%2C315%2C120%2C2314%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2661.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B290%2C246%2C187%2C168%2C140%2C119%2C105%2C89%2C2474%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2845.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B6362%2C1868%2C1523%2C1508%2C1505%2C9472%2C2210%2C2166%2C12893%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14826.949999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10725.1%2C7211.8%2C7438.6%2C7579.1%2C7579.1%2C7380.2%2C7006.5%2C7006.5%2C7419.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12333.865%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.0%27%2C%27Rsbuild+1.7.1%27%2C%27Unpack+3.8.0%27%2C%27Unpack+%28Prebundle%29+3.8.0%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.5%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.5%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2505.9%2C1702.3%2C1571.6%2C1329.4%2C1329.4%2C1871.2%2C1821.7%2C1821.7%2C1875.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28330%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2822%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28156%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28327%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28274%2C+75%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28175%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2881.785%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                     | 35    | 4132ms (2.9x)   | 1150ms (41.1x)  | 383ms (8.1x)   | 290ms (3.3x)   | 6362ms (4.2x)  |
| Rspack CLI 1.7.0                | 54    | 1821ms (1.3x)   | 737ms (26.3x)   | 271ms (5.8x)   | 246ms (2.8x)   | 1868ms (1.2x)  |
| Rsbuild 1.7.1                   | 77    | 1421ms (1.0x)   | 413ms (14.8x)   | 206ms (4.4x)   | 187ms (2.1x)   | 1523ms (1.0x)  |
| Unpack 3.8.0                    | 78    | 1915ms (1.3x)   | 527ms (18.8x)   | 196ms (4.2x)   | 168ms (1.9x)   | 1508ms (1.0x)  |
| Unpack (Prebundle) 3.8.0        | 92    | 1529ms (1.1x)   | 432ms (15.4x)   | 165ms (3.5x)   | 140ms (1.6x)   | 1505ms (1.0x)  |
| Next.js (Turbopack) 16.1.1      | 86    | 2215ms (1.6x)   | 396ms (14.1x)   | 47ms (1.0x)    | 119ms (1.3x)   | 9472ms (6.3x)  |
| Vite 8.0.0-beta.5               | 58    | 16648ms (11.7x) | 7868ms (281.0x) | 315ms (6.7x)   | 105ms (1.2x)   | 2210ms (1.5x)  |
| Vite (Full Bundle) 8.0.0-beta.5 | 91    | 5688ms (4.0x)   | 28ms (1.0x)     | 120ms (2.6x)   | 89ms (1.0x)    | 2166ms (1.4x)  |
| webpack (SWC) 5.104.1           | 11    | 12249ms (8.6x)  | 1265ms (45.2x)  | 2314ms (49.2x) | 2474ms (27.8x) | 12893ms (8.6x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10725.1kB (1.5x) | 2505.9kB (1.9x) |
| Rspack CLI 1.7.0                | 7211.8kB (1.0x)  | 1702.3kB (1.3x) |
| Rsbuild 1.7.1                   | 7438.6kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.8.0                    | 7579.1kB (1.1x)  | 1329.4kB (1.0x) |
| Unpack (Prebundle) 3.8.0        | 7579.1kB (1.1x)  | 1329.4kB (1.0x) |
| Next.js (Turbopack) 16.1.1      | 7380.2kB (1.1x)  | 1871.2kB (1.4x) |
| Vite 8.0.0-beta.5               | 7006.5kB (1.0x)  | 1821.7kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.5 | 7006.5kB (1.0x)  | 1821.7kB (1.4x) |
| webpack (SWC) 5.104.1           | 7419.1kB (1.1x)  | 1875.8kB (1.4x) |
<!-- BENCHMARK:END -->



































































































































































