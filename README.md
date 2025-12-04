# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-04`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B16123%2C2256%2C2327%2C2156%2C2124%2C55798%2C14338%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A64167.7%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1070%2C411%2C140%2C164%2C121%2C818%2C944%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1230.5%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B211%2C251%2C119%2C145%2C86%2C106%2C141%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A288.65%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B15903%2C3590%2C3132%2C3822%2C4641%2C28170%2C5143%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A32395.499999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277325.8%27%2C%277312.1%27%2C%277383.1%27%2C%277383.1%27%2C%277915.2%27%2C%276878.4%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271671.1%27%2C%271669.2%27%2C%271704.1%27%2C%271704.1%27%2C%272014.0%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 16123ms (7.6x)  | 1070ms (8.8x)  | 211ms (2.5x)  | 15903ms (5.1x)  |
| Rspack CLI 1.6.6           | 2256ms (1.1x)   | 411ms (3.4x)   | 251ms (2.9x)  | 3590ms (1.1x)   |
| Rsbuild 1.6.12             | 2327ms (1.1x)   | 140ms (1.2x)   | 119ms (1.4x)  | 3132ms (1.0x) ◆ |
| Unpack 3.6.0               | 2156ms (1.0x)   | 164ms (1.4x)   | 145ms (1.7x)  | 3822ms (1.2x)   |
| Unpack (Prebundle) 3.6.0   | 2124ms (1.0x) ◆ | 121ms (1.0x) ◆ | 86ms (1.0x) ◆ | 4641ms (1.5x)   |
| Next.js (Turbopack) 16.0.6 | 55798ms (26.3x) | 818ms (6.8x)   | 106ms (1.2x)  | 28170ms (9.0x)  |
| Vite (Rolldown) 7.2.10     | 14338ms (6.8x)  | 944ms (7.8x)   | 141ms (1.6x)  | 5143ms (1.6x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.1kB (1.5x)   |
| Rspack CLI 1.6.6           | 7325.8kB (1.1x)   | 1671.1kB (1.0x)   |
| Rsbuild 1.6.12             | 7312.1kB (1.1x)   | 1669.2kB (1.0x) ◆ |
| Unpack 3.6.0               | 7383.1kB (1.1x)   | 1704.1kB (1.0x)   |
| Unpack (Prebundle) 3.6.0   | 7383.1kB (1.1x)   | 1704.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.6 | 7915.2kB (1.2x)   | 2014.0kB (1.2x)   |
| Vite (Rolldown) 7.2.10     | 6878.4kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->


















































































