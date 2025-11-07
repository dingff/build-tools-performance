# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-07`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B18122%2C2478%2C2718%2C2593%2C3209%2C2830%2C70629%2C16006%2C18660%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28132%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A77691.90000000001%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1233%2C426%2C226%2C289%2C232%2C147%2C1373%2C1196%2C1263%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28132%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1510.3000000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B213%2C341%2C233%2C199%2C189%2C135%2C132%2C155%2C97%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28132%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A375.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B20683%2C4526%2C5303%2C5194%2C5265%2C4722%2C40880%2C5159%2C33734%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28132%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A44968%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710601.1%27%2C%277366.1%27%2C%277378.5%27%2C%277468.1%27%2C%277468.1%27%2C%277468.1%27%2C%277912.2%27%2C%276862.3%27%2C%276710.6%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28132%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A11661.210000000001%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.2%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272508.4%27%2C%271671.4%27%2C%271669.4%27%2C%271705.3%27%2C%271705.3%27%2C%271705.3%27%2C%272015.4%27%2C%271795.7%27%2C%271732.5%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28132%2C+81%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2759.2400000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 18122ms (7.3x)  | 1233ms (8.4x)  | 213ms (2.2x)  | 20683ms (4.6x)  |
| Rspack CLI 1.6.1              | 2478ms (1.0x) ◆ | 426ms (2.9x)   | 341ms (3.5x)  | 4526ms (1.0x) ◆ |
| Rsbuild 1.6.2                 | 2718ms (1.1x)   | 226ms (1.5x)   | 233ms (2.4x)  | 5303ms (1.2x)   |
| Unpack (Native Watcher) 3.3.7 | 2593ms (1.0x)   | 289ms (2.0x)   | 199ms (2.1x)  | 5194ms (1.1x)   |
| Unpack 3.3.7                  | 3209ms (1.3x)   | 232ms (1.6x)   | 189ms (1.9x)  | 5265ms (1.2x)   |
| Unpack (Prebundle) 3.3.7      | 2830ms (1.1x)   | 147ms (1.0x) ◆ | 135ms (1.4x)  | 4722ms (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 70629ms (28.5x) | 1373ms (9.3x)  | 132ms (1.4x)  | 40880ms (9.0x)  |
| Vite (Rolldown) 7.2.1         | 16006ms (6.5x)  | 1196ms (8.1x)  | 155ms (1.6x)  | 5159ms (1.1x)   |
| Vite (SWC) 7.2.2              | 18660ms (7.5x)  | 1263ms (8.6x)  | 97ms (1.0x) ◆ | 33734ms (7.5x)  |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10601.1kB (1.6x)  | 2508.4kB (1.5x)   |
| Rspack CLI 1.6.1              | 7366.1kB (1.1x)   | 1671.4kB (1.0x)   |
| Rsbuild 1.6.2                 | 7378.5kB (1.1x)   | 1669.4kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.7 | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack 3.3.7                  | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack (Prebundle) 3.3.7      | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 7912.2kB (1.2x)   | 2015.4kB (1.2x)   |
| Vite (Rolldown) 7.2.1         | 6862.3kB (1.0x)   | 1795.7kB (1.1x)   |
| Vite (SWC) 7.2.2              | 6710.6kB (1.0x) ◆ | 1732.5kB (1.0x)   |
<!-- BENCHMARK:END -->


















