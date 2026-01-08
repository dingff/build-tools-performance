# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2026-01-08`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B73%2C54%2C59%2C73%2C87%2C89%2C58%2C15%2C13%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A102.35%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B4514%2C2512%2C2050%2C2040%2C2119%2C2325%2C58727%2C5196%2C14501%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A67536.04999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B1065%2C1013%2C840%2C798%2C796%2C613%2C29853%2C0%2C1694%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A34330.95%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B194%2C373%2C345%2C279%2C203%2C62%2C497%2C0%2C2828%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3252.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B231%2C363%2C354%2C260%2C219%2C197%2C87%2C0%2C2633%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3027.95%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B4198%2C1607%2C1458%2C1448%2C1444%2C10022%2C1787%2C1754%2C12093%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A13906.949999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B8141.7%2C5634.7%2C6289.4%2C6370.1%2C6370.1%2C6073.3%2C5738%2C5738%2C5891.4%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9362.955%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.2%27%2C%27Unpack+%28Prebundle%29+3.8.2%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.7%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.7%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B1812.4%2C1458.9%2C1022%2C1057.2%2C1057.2%2C1590.5%2C1546.6%2C1546.6%2C1588.9%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%286%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28178%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28125%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28325%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2084.2599999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                     | 73    | 4514ms (2.2x)   | 1065ms (1.7x)   | 194ms (3.1x)   | 231ms (2.7x)   | 4198ms (2.9x)  |
| Rspack CLI 1.7.1                | 54    | 2512ms (1.2x)   | 1013ms (1.7x)   | 373ms (6.0x)   | 363ms (4.2x)   | 1607ms (1.1x)  |
| Rsbuild 1.7.2                   | 59    | 2050ms (1.0x)   | 840ms (1.4x)    | 345ms (5.6x)   | 354ms (4.1x)   | 1458ms (1.0x)  |
| Unpack 3.8.2                    | 73    | 2040ms (1.0x)   | 798ms (1.3x)    | 279ms (4.5x)   | 260ms (3.0x)   | 1448ms (1.0x)  |
| Unpack (Prebundle) 3.8.2        | 87    | 2119ms (1.0x)   | 796ms (1.3x)    | 203ms (3.3x)   | 219ms (2.5x)   | 1444ms (1.0x)  |
| Next.js (Turbopack) 16.1.1      | 89    | 2325ms (1.1x)   | 613ms (1.0x)    | 62ms (1.0x)    | 197ms (2.3x)   | 10022ms (6.9x) |
| Vite 8.0.0-beta.7               | 58    | 58727ms (28.8x) | 29853ms (48.7x) | 497ms (8.0x)   | 87ms (1.0x)    | 1787ms (1.2x)  |
| Vite (Full Bundle) 8.0.0-beta.7 | 15    | 5196ms (2.5x)   | Failed          | Failed         | Failed         | 1754ms (1.2x)  |
| webpack (SWC) 5.104.1           | 13    | 14501ms (7.1x)  | 1694ms (2.8x)   | 2828ms (45.6x) | 2633ms (30.3x) | 12093ms (8.4x) |

**Bundle sizes**

| Name                            | Output size     | Gzipped size    |
| ------------------------------- | --------------- | --------------- |
| Farm 1.7.11                     | 8141.7kB (1.4x) | 1812.4kB (1.8x) |
| Rspack CLI 1.7.1                | 5634.7kB (1.0x) | 1458.9kB (1.4x) |
| Rsbuild 1.7.2                   | 6289.4kB (1.1x) | 1022.0kB (1.0x) |
| Unpack 3.8.2                    | 6370.1kB (1.1x) | 1057.2kB (1.0x) |
| Unpack (Prebundle) 3.8.2        | 6370.1kB (1.1x) | 1057.2kB (1.0x) |
| Next.js (Turbopack) 16.1.1      | 6073.3kB (1.1x) | 1590.5kB (1.6x) |
| Vite 8.0.0-beta.7               | 5738.0kB (1.0x) | 1546.6kB (1.5x) |
| Vite (Full Bundle) 8.0.0-beta.7 | 5738.0kB (1.0x) | 1546.6kB (1.5x) |
| webpack (SWC) 5.104.1           | 5891.4kB (1.0x) | 1588.9kB (1.6x) |
<!-- BENCHMARK:END -->











































































































































































