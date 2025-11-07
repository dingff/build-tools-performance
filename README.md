# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-07`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B14745%2C2145%2C2625%2C4154%2C2098%2C76046%2C11585%2C20316%2C20817%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A83650.6%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1029%2C191%2C325%2C319%2C179%2C1035%2C757%2C1173%2C3122%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3434.2000000000003%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B227%2C136%2C162%2C273%2C164%2C138%2C132%2C142%2C2893%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3182.3%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B13975%2C4425%2C4492%2C6384%2C4748%2C40003%2C5309%2C42947%2C31379%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A47241.700000000004%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710601.1%27%2C%277378.5%27%2C%277468.1%27%2C%277468.1%27%2C%277468.1%27%2C%277912.2%27%2C%276862.3%27%2C%276710.6%27%2C%277536.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A11661.210000000001%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272508.4%27%2C%271669.4%27%2C%271705.3%27%2C%271705.3%27%2C%271705.3%27%2C%272015.4%27%2C%271795.7%27%2C%271732.5%27%2C%271851.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2759.2400000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| ----------------------------- | --------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                   | 14745ms (7.0x)  | 1029ms (5.7x)  | 227ms (1.7x)   | 13975ms (3.2x)  |
| Rsbuild 1.6.2                 | 2145ms (1.0x)   | 191ms (1.1x)   | 136ms (1.0x)   | 4425ms (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.6 | 2625ms (1.3x)   | 325ms (1.8x)   | 162ms (1.2x)   | 4492ms (1.0x)   |
| Unpack 3.3.6                  | 4154ms (2.0x)   | 319ms (1.8x)   | 273ms (2.1x)   | 6384ms (1.4x)   |
| Unpack (Prebundle) 3.3.6      | 2098ms (1.0x) ◆ | 179ms (1.0x) ◆ | 164ms (1.2x)   | 4748ms (1.1x)   |
| Next.js (Turbopack) 16.0.1    | 76046ms (36.2x) | 1035ms (5.8x)  | 138ms (1.0x)   | 40003ms (9.0x)  |
| Vite (Rolldown) 7.2.1         | 11585ms (5.5x)  | 757ms (4.2x)   | 132ms (1.0x) ◆ | 5309ms (1.2x)   |
| Vite (SWC) 7.2.1              | 20316ms (9.7x)  | 1173ms (6.6x)  | 142ms (1.1x)   | 42947ms (9.7x)  |
| webpack (SWC) 5.102.1         | 20817ms (9.9x)  | 3122ms (17.4x) | 2893ms (21.9x) | 31379ms (7.1x)  |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10601.1kB (1.6x)  | 2508.4kB (1.5x)   |
| Rsbuild 1.6.2                 | 7378.5kB (1.1x)   | 1669.4kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.6 | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack 3.3.6                  | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack (Prebundle) 3.3.6      | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 7912.2kB (1.2x)   | 2015.4kB (1.2x)   |
| Vite (Rolldown) 7.2.1         | 6862.3kB (1.0x)   | 1795.7kB (1.1x)   |
| Vite (SWC) 7.2.1              | 6710.6kB (1.0x) ◆ | 1732.5kB (1.0x)   |
| webpack (SWC) 5.102.1         | 7536.3kB (1.1x)   | 1851.6kB (1.1x)   |
<!-- BENCHMARK:END -->















