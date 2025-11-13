# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-13`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B15239%2C2980%2C2995%2C2904%2C4882%2C2808%2C105157%2C19195%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A120930.54999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1075%2C552%2C440%2C399%2C372%2C201%2C1383%2C1078%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1590.4499999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B235%2C396%2C301%2C233%2C294%2C207%2C161%2C189%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A455.4%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B16962%2C5461%2C6791%2C6799%2C6514%2C6565%2C57901%2C6966%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A66586.15%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.3%27%2C%277403.2%27%2C%277395.8%27%2C%277485.5%27%2C%277485.5%27%2C%277485.5%27%2C%277929.6%27%2C%276877.9%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.294999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272513.5%27%2C%271674.5%27%2C%271672.1%27%2C%271708.1%27%2C%271708.1%27%2C%271708.1%27%2C%272017.8%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2890.5249999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start   | Root HMR       | Leaf HMR       | Prod build      |
| ----------------------------- | ---------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                   | 15239ms (5.4x)   | 1075ms (5.3x)  | 235ms (1.5x)   | 16962ms (3.1x)  |
| Rspack CLI 1.6.3              | 2980ms (1.1x)    | 552ms (2.7x)   | 396ms (2.5x)   | 5461ms (1.0x) ◆ |
| Rsbuild 1.6.5                 | 2995ms (1.1x)    | 440ms (2.2x)   | 301ms (1.9x)   | 6791ms (1.2x)   |
| Unpack (Native Watcher) 3.5.0 | 2904ms (1.0x)    | 399ms (2.0x)   | 233ms (1.4x)   | 6799ms (1.2x)   |
| Unpack 3.5.0                  | 4882ms (1.7x)    | 372ms (1.9x)   | 294ms (1.8x)   | 6514ms (1.2x)   |
| Unpack (Prebundle) 3.5.0      | 2808ms (1.0x) ◆  | 201ms (1.0x) ◆ | 207ms (1.3x)   | 6565ms (1.2x)   |
| Next.js (Turbopack) 16.0.2    | 105157ms (37.4x) | 1383ms (6.9x)  | 161ms (1.0x) ◆ | 57901ms (10.6x) |
| Vite (Rolldown) 7.2.5         | 19195ms (6.8x)   | 1078ms (5.4x)  | 189ms (1.2x)   | 6966ms (1.3x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10633.3kB (1.5x)  | 2513.5kB (1.5x)   |
| Rspack CLI 1.6.3              | 7403.2kB (1.1x)   | 1674.5kB (1.0x)   |
| Rsbuild 1.6.5                 | 7395.8kB (1.1x)   | 1672.1kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.5.0 | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack 3.5.0                  | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.0      | 7485.5kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.2    | 7929.6kB (1.2x)   | 2017.8kB (1.2x)   |
| Vite (Rolldown) 7.2.5         | 6877.9kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->



































