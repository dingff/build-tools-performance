# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2026-04-17`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B44%2C28%2C24%2C32%2C35%2C87%2C48%2C74%2C5%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A100.05%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B10736%2C5822%2C5843%2C6677%2C5628%2C5679%2C240609%2C11555%2C36246%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A276700.35%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B2295%2C1782%2C1708%2C1680%2C1749%2C321%2C0%2C109%2C5100%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A5865%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B716%2C1112%2C1131%2C1254%2C1046%2C139%2C952%2C448%2C8497%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9771.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B253%2C538%2C830%2C421%2C378%2C132%2C158%2C166%2C12388%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14246.199999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B7987%2C3787%2C3786%2C3978%2C4072%2C18021%2C6295%2C9693%2C30310%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A34856.5%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B8040.3%2C5556.1%2C6094.2%2C6177.4%2C6177.4%2C6065.4%2C5576.7%2C5576.7%2C5803.5%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9246.345%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.11%27%2C%27Rsbuild+1.7.5%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.4%27%2C%27Vite+8.0.8%27%2C%27Vite+%28Full+Bundle%29+8.0.8%27%2C%27webpack+%28SWC%29+5.106.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B1768.9%2C1433.2%2C993.5%2C1028.8%2C1028.8%2C1582.7%2C1438.8%2C1438.8%2C1559.7%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28264%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28305%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28344%2C+78%25%2C+46%25%2C+0.7%29%27%2C%27hsla%2886%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2885%2C+79%25%2C+54%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2034.235%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Score | Startup          | Page Reload    | Root HMR       | Leaf HMR        | Prod Build     |
| -------------------------- | ----- | ---------------- | -------------- | -------------- | --------------- | -------------- |
| Farm 1.7.11                | 44    | 10736ms (1.9x)   | 2295ms (21.1x) | 716ms (5.2x)   | 253ms (1.9x)    | 7987ms (2.1x)  |
| Rspack CLI 1.7.11          | 28    | 5822ms (1.0x)    | 1782ms (16.3x) | 1112ms (8.0x)  | 538ms (4.1x)    | 3787ms (1.0x)  |
| Rsbuild 1.7.5              | 24    | 5843ms (1.0x)    | 1708ms (15.7x) | 1131ms (8.1x)  | 830ms (6.3x)    | 3786ms (1.0x)  |
| Unpack 4.8.0               | 32    | 6677ms (1.2x)    | 1680ms (15.4x) | 1254ms (9.0x)  | 421ms (3.2x)    | 3978ms (1.1x)  |
| Unpack (Prebundle) 4.8.0   | 35    | 5628ms (1.0x)    | 1749ms (16.0x) | 1046ms (7.5x)  | 378ms (2.9x)    | 4072ms (1.1x)  |
| Next.js (Turbopack) 16.2.4 | 87    | 5679ms (1.0x)    | 321ms (2.9x)   | 139ms (1.0x)   | 132ms (1.0x)    | 18021ms (4.8x) |
| Vite 8.0.8                 | 48    | 240609ms (42.8x) | Failed         | 952ms (6.8x)   | 158ms (1.2x)    | 6295ms (1.7x)  |
| Vite (Full Bundle) 8.0.8   | 74    | 11555ms (2.1x)   | 109ms (1.0x)   | 448ms (3.2x)   | 166ms (1.3x)    | 9693ms (2.6x)  |
| webpack (SWC) 5.106.2      | 5     | 36246ms (6.4x)   | 5100ms (46.8x) | 8497ms (61.1x) | 12388ms (93.8x) | 30310ms (8.0x) |

**Bundle sizes**

| Name                       | Output size     | Gzipped size    |
| -------------------------- | --------------- | --------------- |
| Farm 1.7.11                | 8040.3kB (1.4x) | 1768.9kB (1.8x) |
| Rspack CLI 1.7.11          | 5556.1kB (1.0x) | 1433.2kB (1.4x) |
| Rsbuild 1.7.5              | 6094.2kB (1.1x) | 993.5kB (1.0x)  |
| Unpack 4.8.0               | 6177.4kB (1.1x) | 1028.8kB (1.0x) |
| Unpack (Prebundle) 4.8.0   | 6177.4kB (1.1x) | 1028.8kB (1.0x) |
| Next.js (Turbopack) 16.2.4 | 6065.4kB (1.1x) | 1582.7kB (1.6x) |
| Vite 8.0.8                 | 5576.7kB (1.0x) | 1438.8kB (1.4x) |
| Vite (Full Bundle) 8.0.8   | 5576.7kB (1.0x) | 1438.8kB (1.4x) |
| webpack (SWC) 5.106.2      | 5803.5kB (1.0x) | 1559.7kB (1.6x) |
<!-- BENCHMARK:END -->













































































































































































