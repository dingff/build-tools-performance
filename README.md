# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `medium`
- Date: `2025-12-03`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B5862%2C804%2C623%2C658%2C1938%2C14722%2C5576%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A16930.3%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B725%2C109%2C103%2C85%2C73%2C194%2C176%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A833.7499999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B175%2C86%2C63%2C58%2C59%2C55%2C137%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A201.24999999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B5847%2C1366%2C1308%2C1127%2C1142%2C10058%2C1488%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A11566.699999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%273574.5%27%2C%272818.6%27%2C%272846.5%27%2C%272877.8%27%2C%272877.8%27%2C%273687.8%27%2C%272654.1%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A4240.97%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.0%27%2C%27Unpack+%28Prebundle%29+3.6.0%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.9%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%27827.4%27%2C%27677.9%27%2C%27679.0%27%2C%27696.8%27%2C%27696.8%27%2C%27979.0%27%2C%27726.4%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2851%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28340%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28140%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1125.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR      | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | ------------- | ------------- | --------------- |
| Farm 1.7.11                | 5862ms (9.4x)   | 725ms (9.9x)  | 175ms (3.2x)  | 5847ms (5.2x)   |
| Rspack CLI 1.6.6           | 804ms (1.3x)    | 109ms (1.5x)  | 86ms (1.6x)   | 1366ms (1.2x)   |
| Rsbuild 1.6.12             | 623ms (1.0x) ◆  | 103ms (1.4x)  | 63ms (1.1x)   | 1308ms (1.2x)   |
| Unpack 3.6.0               | 658ms (1.1x)    | 85ms (1.2x)   | 58ms (1.1x)   | 1127ms (1.0x) ◆ |
| Unpack (Prebundle) 3.6.0   | 1938ms (3.1x)   | 73ms (1.0x) ◆ | 59ms (1.1x)   | 1142ms (1.0x)   |
| Next.js (Turbopack) 16.0.6 | 14722ms (23.6x) | 194ms (2.7x)  | 55ms (1.0x) ◆ | 10058ms (8.9x)  |
| Vite (Rolldown) 7.2.9      | 5576ms (9.0x)   | 176ms (2.4x)  | 137ms (2.5x)  | 1488ms (1.3x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size     |
| -------------------------- | ----------------- | ---------------- |
| Farm 1.7.11                | 3574.5kB (1.3x)   | 827.4kB (1.2x)   |
| Rspack CLI 1.6.6           | 2818.6kB (1.1x)   | 677.9kB (1.0x) ◆ |
| Rsbuild 1.6.12             | 2846.5kB (1.1x)   | 679.0kB (1.0x)   |
| Unpack 3.6.0               | 2877.8kB (1.1x)   | 696.8kB (1.0x)   |
| Unpack (Prebundle) 3.6.0   | 2877.8kB (1.1x)   | 696.8kB (1.0x)   |
| Next.js (Turbopack) 16.0.6 | 3687.8kB (1.4x)   | 979.0kB (1.4x)   |
| Vite (Rolldown) 7.2.9      | 2654.1kB (1.0x) ◆ | 726.4kB (1.1x)   |
<!-- BENCHMARK:END -->















































































