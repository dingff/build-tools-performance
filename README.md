# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2026-04-29`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B87%2C68%2C54%2C75%2C92%2C94%2C71%2C96%2C14%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A110.39999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B3114%2C1874%2C2078%2C2013%2C2201%2C2052%2C58359%2C3891%2C12934%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A67112.84999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B827%2C951%2C872%2C827%2C806%2C86%2C26928%2C43%2C1650%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A30967.199999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B174%2C288%2C372%2C252%2C157%2C64%2C199%2C66%2C2634%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3029.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B203%2C279%2C408%2C254%2C157%2C91%2C57%2C55%2C2579%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2965.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B2439%2C1238%2C1249%2C1497%2C1519%2C8200%2C1593%2C1464%2C10885%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12517.749999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B8040.5%2C5555.7%2C6093.8%2C6177%2C6177%2C6065.1%2C5576.4%2C5576.4%2C5803.2%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9246.574999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+2.0.1%27%2C%27Rsbuild+2.0.3%27%2C%27Unpack+4.9.0%27%2C%27Unpack+%28Prebundle%29+4.9.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.10%27%2C%27Vite+%28Full+Bundle%29+8.0.10%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B1769%2C1433.1%2C993.4%2C1028.8%2C1028.8%2C1582.7%2C1438.8%2C1438.8%2C1559.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28187%2C+79%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28177%2C+71%25%2C+52%25%2C+0.7%29%27%2C%27hsla%28193%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%286%2C+82%25%2C+51%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2854%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28213%2C+82%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2034.35%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Score | Startup         | Page Reload      | Root HMR       | Leaf HMR       | Prod Build     |
| -------------------------- | ----- | --------------- | ---------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                | 87    | 3114ms (1.7x)   | 827ms (19.2x)    | 174ms (2.7x)   | 203ms (3.7x)   | 2439ms (2.0x)  |
| Rspack CLI 2.0.1           | 68    | 1874ms (1.0x)   | 951ms (22.1x)    | 288ms (4.5x)   | 279ms (5.1x)   | 1238ms (1.0x)  |
| Rsbuild 2.0.3              | 54    | 2078ms (1.1x)   | 872ms (20.3x)    | 372ms (5.8x)   | 408ms (7.4x)   | 1249ms (1.0x)  |
| Unpack 4.9.0               | 75    | 2013ms (1.1x)   | 827ms (19.2x)    | 252ms (3.9x)   | 254ms (4.6x)   | 1497ms (1.2x)  |
| Unpack (Prebundle) 4.9.0   | 92    | 2201ms (1.2x)   | 806ms (18.7x)    | 157ms (2.5x)   | 157ms (2.9x)   | 1519ms (1.2x)  |
| Next.js (Turbopack) 16.2.4 | 94    | 2052ms (1.1x)   | 86ms (2.0x)      | 64ms (1.0x)    | 91ms (1.7x)    | 8200ms (6.6x)  |
| Vite 8.0.10                | 71    | 58359ms (31.1x) | 26928ms (626.2x) | 199ms (3.1x)   | 57ms (1.0x)    | 1593ms (1.3x)  |
| Vite (Full Bundle) 8.0.10  | 96    | 3891ms (2.1x)   | 43ms (1.0x)      | 66ms (1.0x)    | 55ms (1.0x)    | 1464ms (1.2x)  |
| webpack (SWC) 5.106.2      | 14    | 12934ms (6.9x)  | 1650ms (38.4x)   | 2634ms (41.2x) | 2579ms (46.9x) | 10885ms (8.8x) |

**Bundle sizes**

| Name                       | Output size     | Gzipped size    |
| -------------------------- | --------------- | --------------- |
| Farm 1.7.11                | 8040.5kB (1.4x) | 1769.0kB (1.8x) |
| Rspack CLI 2.0.1           | 5555.7kB (1.0x) | 1433.1kB (1.4x) |
| Rsbuild 2.0.3              | 6093.8kB (1.1x) | 993.4kB (1.0x)  |
| Unpack 4.9.0               | 6177.0kB (1.1x) | 1028.8kB (1.0x) |
| Unpack (Prebundle) 4.9.0   | 6177.0kB (1.1x) | 1028.8kB (1.0x) |
| Next.js (Turbopack) 16.2.4 | 6065.1kB (1.1x) | 1582.7kB (1.6x) |
| Vite 8.0.10                | 5576.4kB (1.0x) | 1438.8kB (1.4x) |
| Vite (Full Bundle) 8.0.10  | 5576.4kB (1.0x) | 1438.8kB (1.4x) |
| webpack (SWC) 5.106.2      | 5803.2kB (1.0x) | 1559.8kB (1.6x) |
<!-- BENCHMARK:END -->














































































































































































