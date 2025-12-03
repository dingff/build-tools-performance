# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-03`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B11257%2C2989%2C1651%2C1950%2C2619%2C56468%2C13756%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A64938.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B895%2C513%2C274%2C342%2C150%2C817%2C1195%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1374.25%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B137%2C327%2C131%2C132%2C95%2C73%2C113%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A376.04999999999995%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B14394%2C3728%2C4519%2C5064%2C4682%2C43360%2C4999%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A49863.99999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277325.8%27%2C%277312.1%27%2C%277383.1%27%2C%277383.1%27%2C%277915.2%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271671.1%27%2C%271669.2%27%2C%271704.1%27%2C%271704.1%27%2C%272014.0%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 11257ms (6.8x)  | 895ms (6.0x)   | 137ms (1.9x)  | 14394ms (3.9x)  |
| Rspack CLI 1.6.6           | 2989ms (1.8x)   | 513ms (3.4x)   | 327ms (4.5x)  | 3728ms (1.0x) ◆ |
| Rsbuild 1.6.12             | 1651ms (1.0x) ◆ | 274ms (1.8x)   | 131ms (1.8x)  | 4519ms (1.2x)   |
| Unpack 3.6.0               | 1950ms (1.2x)   | 342ms (2.3x)   | 132ms (1.8x)  | 5064ms (1.4x)   |
| Unpack (Prebundle) 3.6.0   | 2619ms (1.6x)   | 150ms (1.0x) ◆ | 95ms (1.3x)   | 4682ms (1.3x)   |
| Next.js (Turbopack) 16.0.6 | 56468ms (34.2x) | 817ms (5.4x)   | 73ms (1.0x) ◆ | 43360ms (11.6x) |
| Vite (Rolldown) 7.2.9      | 13756ms (8.3x)  | 1195ms (8.0x)  | 113ms (1.5x)  | 4999ms (1.3x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.1kB (1.5x)   |
| Rspack CLI 1.6.6           | 7325.8kB (1.1x)   | 1671.1kB (1.0x)   |
| Rsbuild 1.6.12             | 7312.1kB (1.1x)   | 1669.2kB (1.0x) ◆ |
| Unpack 3.6.0               | 7383.1kB (1.1x)   | 1704.1kB (1.0x)   |
| Unpack (Prebundle) 3.6.0   | 7383.1kB (1.1x)   | 1704.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.6 | 7915.2kB (1.2x)   | 2014.0kB (1.2x)   |
| Vite (Rolldown) 7.2.9      | 6878.3kB (1.0x) ◆ | 1797.7kB (1.1x)   |
<!-- BENCHMARK:END -->














































































