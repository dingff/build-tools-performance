# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-14`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B10121%2C2016%2C1849%2C2314%2C3225%2C1357%2C46913%2C13057%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A53949.95%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1247%2C338%2C275%2C161%2C230%2C122%2C993%2C1073%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1434.05%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B184%2C247%2C137%2C136%2C132%2C148%2C95%2C142%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A284.04999999999995%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B14103%2C4237%2C4529%2C3649%2C6247%2C6428%2C26187%2C4530%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A30115.05%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.3%27%2C%277403.2%27%2C%277395.8%27%2C%277485.5%27%2C%277485.5%27%2C%277485.5%27%2C%277915.7%27%2C%276877.9%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.294999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.6%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.3%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272513.5%27%2C%271674.5%27%2C%271672.2%27%2C%271708.1%27%2C%271708.1%27%2C%271708.1%27%2C%272014.2%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28155%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28192%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2890.5249999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 10121ms (7.5x)  | 1247ms (10.2x) | 184ms (1.9x)  | 14103ms (3.9x)  |
| Rspack CLI 1.6.3              | 2016ms (1.5x)   | 338ms (2.8x)   | 247ms (2.6x)  | 4237ms (1.2x)   |
| Rsbuild 1.6.6                 | 1849ms (1.4x)   | 275ms (2.3x)   | 137ms (1.4x)  | 4529ms (1.2x)   |
| Unpack (Native Watcher) 3.5.0 | 2314ms (1.7x)   | 161ms (1.3x)   | 136ms (1.4x)  | 3649ms (1.0x) ◆ |
| Unpack 3.5.0                  | 3225ms (2.4x)   | 230ms (1.9x)   | 132ms (1.4x)  | 6247ms (1.7x)   |
| Unpack (Prebundle) 3.5.0      | 1357ms (1.0x) ◆ | 122ms (1.0x) ◆ | 148ms (1.6x)  | 6428ms (1.8x)   |
| Next.js (Turbopack) 16.0.3    | 46913ms (34.6x) | 993ms (8.1x)   | 95ms (1.0x) ◆ | 26187ms (7.2x)  |
| Vite (Rolldown) 7.2.5         | 13057ms (9.6x)  | 1073ms (8.8x)  | 142ms (1.5x)  | 4530ms (1.2x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10633.3kB (1.5x)  | 2513.5kB (1.5x)   |
| Rspack CLI 1.6.3              | 7403.2kB (1.1x)   | 1674.5kB (1.0x)   |
| Rsbuild 1.6.6                 | 7395.8kB (1.1x)   | 1672.2kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.5.0 | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack 3.5.0                  | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.0      | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.3    | 7915.7kB (1.2x)   | 2014.2kB (1.2x)   |
| Vite (Rolldown) 7.2.5         | 6877.9kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->












































