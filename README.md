# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2026-01-07`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B67%2C48%2C56%2C63%2C83%2C84%2C70%2C14%2C12%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A96.6%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B4893%2C2955%2C2241%2C2089%2C2421%2C2685%2C87087%2C5779%2C17302%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A100150.04999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B1137%2C1056%2C890%2C883%2C837%2C755%2C38121%2C0%2C1780%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A43839.149999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B227%2C507%2C446%2C339%2C227%2C79%2C193%2C0%2C2984%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3431.6%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B241%2C391%2C341%2C304%2C219%2C203%2C79%2C0%2C2821%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3244.1499999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B4498%2C1658%2C1569%2C1596%2C1909%2C11305%2C2205%2C2025%2C13959%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A16052.849999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B8141.7%2C5634.7%2C6289.5%2C6370.1%2C6370.1%2C6073.3%2C5738%2C5738%2C5891%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9362.955%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.1%27%2C%27Rsbuild+1.7.2%27%2C%27Unpack+3.8.1%27%2C%27Unpack+%28Prebundle%29+3.8.1%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.6%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.6%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B1812.4%2C1458.9%2C1022%2C1057.2%2C1057.2%2C1590.5%2C1546.6%2C1546.6%2C1588.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28255%2C+70%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2897%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28230%2C+75%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2842%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2850%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28250%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2084.2599999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                     | 67    | 4893ms (2.3x)   | 1137ms (1.5x)   | 227ms (2.9x)   | 241ms (3.1x)   | 4498ms (2.9x)  |
| Rspack CLI 1.7.1                | 48    | 2955ms (1.4x)   | 1056ms (1.4x)   | 507ms (6.4x)   | 391ms (4.9x)   | 1658ms (1.1x)  |
| Rsbuild 1.7.2                   | 56    | 2241ms (1.1x)   | 890ms (1.2x)    | 446ms (5.6x)   | 341ms (4.3x)   | 1569ms (1.0x)  |
| Unpack 3.8.1                    | 63    | 2089ms (1.0x)   | 883ms (1.2x)    | 339ms (4.3x)   | 304ms (3.8x)   | 1596ms (1.0x)  |
| Unpack (Prebundle) 3.8.1        | 83    | 2421ms (1.2x)   | 837ms (1.1x)    | 227ms (2.9x)   | 219ms (2.8x)   | 1909ms (1.2x)  |
| Next.js (Turbopack) 16.1.1      | 84    | 2685ms (1.3x)   | 755ms (1.0x)    | 79ms (1.0x)    | 203ms (2.6x)   | 11305ms (7.2x) |
| Vite 8.0.0-beta.6               | 70    | 87087ms (41.7x) | 38121ms (50.5x) | 193ms (2.4x)   | 79ms (1.0x)    | 2205ms (1.4x)  |
| Vite (Full Bundle) 8.0.0-beta.6 | 14    | 5779ms (2.8x)   | Failed          | Failed         | Failed         | 2025ms (1.3x)  |
| webpack (SWC) 5.104.1           | 12    | 17302ms (8.3x)  | 1780ms (2.4x)   | 2984ms (37.8x) | 2821ms (35.7x) | 13959ms (8.9x) |

**Bundle sizes**

| Name                            | Output size     | Gzipped size    |
| ------------------------------- | --------------- | --------------- |
| Farm 1.7.11                     | 8141.7kB (1.4x) | 1812.4kB (1.8x) |
| Rspack CLI 1.7.1                | 5634.7kB (1.0x) | 1458.9kB (1.4x) |
| Rsbuild 1.7.2                   | 6289.5kB (1.1x) | 1022.0kB (1.0x) |
| Unpack 3.8.1                    | 6370.1kB (1.1x) | 1057.2kB (1.0x) |
| Unpack (Prebundle) 3.8.1        | 6370.1kB (1.1x) | 1057.2kB (1.0x) |
| Next.js (Turbopack) 16.1.1      | 6073.3kB (1.1x) | 1590.5kB (1.6x) |
| Vite 8.0.0-beta.6               | 5738.0kB (1.0x) | 1546.6kB (1.5x) |
| Vite (Full Bundle) 8.0.0-beta.6 | 5738.0kB (1.0x) | 1546.6kB (1.5x) |
| webpack (SWC) 5.104.1           | 5891.0kB (1.0x) | 1588.8kB (1.6x) |
<!-- BENCHMARK:END -->









































































































































































