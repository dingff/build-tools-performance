# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-07`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B19515%2C2803%2C3783%2C3722%2C4668%2C2890%2C123852%2C22416%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A142429.8%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B935%2C549%2C522%2C368%2C415%2C231%2C1729%2C772%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1988.35%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B245%2C347%2C384%2C218%2C238%2C279%2C164%2C148%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A441.59999999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B25962%2C6042%2C8758%2C6690%2C8411%2C8340%2C61216%2C7311%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A70398.4%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710601.1%27%2C%277366.1%27%2C%277378.5%27%2C%277468.1%27%2C%277468.1%27%2C%277468.1%27%2C%277912.3%27%2C%276862.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12191.265%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.7%27%2C%27Unpack+3.3.7%27%2C%27Unpack+%28Prebundle%29+3.3.7%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272508.4%27%2C%271671.4%27%2C%271669.4%27%2C%271705.3%27%2C%271705.3%27%2C%271705.3%27%2C%272015.4%27%2C%271795.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2864%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28147%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28259%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.66%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start   | Root HMR       | Leaf HMR       | Prod build      |
| ----------------------------- | ---------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                   | 19515ms (7.0x)   | 935ms (4.0x)   | 245ms (1.7x)   | 25962ms (4.3x)  |
| Rspack CLI 1.6.1              | 2803ms (1.0x) ◆  | 549ms (2.4x)   | 347ms (2.3x)   | 6042ms (1.0x) ◆ |
| Rsbuild 1.6.2                 | 3783ms (1.3x)    | 522ms (2.3x)   | 384ms (2.6x)   | 8758ms (1.4x)   |
| Unpack (Native Watcher) 3.3.7 | 3722ms (1.3x)    | 368ms (1.6x)   | 218ms (1.5x)   | 6690ms (1.1x)   |
| Unpack 3.3.7                  | 4668ms (1.7x)    | 415ms (1.8x)   | 238ms (1.6x)   | 8411ms (1.4x)   |
| Unpack (Prebundle) 3.3.7      | 2890ms (1.0x)    | 231ms (1.0x) ◆ | 279ms (1.9x)   | 8340ms (1.4x)   |
| Next.js (Turbopack) 16.0.1    | 123852ms (44.2x) | 1729ms (7.5x)  | 164ms (1.1x)   | 61216ms (10.1x) |
| Vite (Rolldown) 7.2.1         | 22416ms (8.0x)   | 772ms (3.3x)   | 148ms (1.0x) ◆ | 7311ms (1.2x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size      |
| ----------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                   | 10601.1kB (1.5x)  | 2508.4kB (1.5x)   |
| Rspack CLI 1.6.1              | 7366.1kB (1.1x)   | 1671.4kB (1.0x)   |
| Rsbuild 1.6.2                 | 7378.5kB (1.1x)   | 1669.4kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.7 | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack 3.3.7                  | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Unpack (Prebundle) 3.3.7      | 7468.1kB (1.1x)   | 1705.3kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 7912.3kB (1.2x)   | 2015.4kB (1.2x)   |
| Vite (Rolldown) 7.2.1         | 6862.3kB (1.0x) ◆ | 1795.7kB (1.1x)   |
<!-- BENCHMARK:END -->




















