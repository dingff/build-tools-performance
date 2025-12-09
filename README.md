# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-09`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B26208%2C5669%2C6846%2C5385%2C7189%2C87126%2C88620%2C20920%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A101912.99999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B806%2C1000%2C818%2C992%2C1360%2C1346%2C1070%2C%27Failed%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3ANaN%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B289%2C733%2C707%2C527%2C365%2C170%2C156%2C%27Failed%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3ANaN%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B25288%2C5785%2C7111%2C6193%2C7777%2C50614%2C9738%2C11380%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A58206.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710730.8%27%2C%277219.0%27%2C%277440.6%27%2C%277523.1%27%2C%277523.1%27%2C%278027.5%27%2C%276977.3%27%2C%276977.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.13%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272510.2%27%2C%271704.5%27%2C%271572.3%27%2C%271609.5%27%2C%271609.5%27%2C%272037.6%27%2C%271825.8%27%2C%271825.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28244%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| ------------------------------- | --------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                     | 26208ms (4.9x)  | 806ms (1.0x) ◆ | 289ms (1.9x)   | 25288ms (4.4x)  |
| Rspack CLI 1.6.6                | 5669ms (1.1x)   | 1000ms (1.2x)  | 733ms (4.7x)   | 5785ms (1.0x) ◆ |
| Rsbuild 1.6.13                  | 6846ms (1.3x)   | 818ms (1.0x)   | 707ms (4.5x)   | 7111ms (1.2x)   |
| Unpack 3.6.1                    | 5385ms (1.0x) ◆ | 992ms (1.2x)   | 527ms (3.4x)   | 6193ms (1.1x)   |
| Unpack (Prebundle) 3.6.1        | 7189ms (1.3x)   | 1360ms (1.7x)  | 365ms (2.3x)   | 7777ms (1.3x)   |
| Next.js (Turbopack) 16.0.6      | 87126ms (16.2x) | 1346ms (1.7x)  | 170ms (1.1x)   | 50614ms (8.7x)  |
| Vite 8.0.0-beta.1               | 88620ms (16.5x) | 1070ms (1.3x)  | 156ms (1.0x) ◆ | 9738ms (1.7x)   |
| Vite (Full Bundle) 8.0.0-beta.1 | 20920ms (3.9x)  | Failed         | Failed         | 11380ms (2.0x)  |

**Bundle sizes**

| Name                            | Total size        | Gzipped size      |
| ------------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                     | 10730.8kB (1.5x)  | 2510.2kB (1.6x)   |
| Rspack CLI 1.6.6                | 7219.0kB (1.0x)   | 1704.5kB (1.1x)   |
| Rsbuild 1.6.13                  | 7440.6kB (1.1x)   | 1572.3kB (1.0x) ◆ |
| Unpack 3.6.1                    | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Unpack (Prebundle) 3.6.1        | 7523.1kB (1.1x)   | 1609.5kB (1.0x)   |
| Next.js (Turbopack) 16.0.6      | 8027.5kB (1.2x)   | 2037.6kB (1.3x)   |
| Vite 8.0.0-beta.1               | 6977.3kB (1.0x) ◆ | 1825.8kB (1.2x)   |
| Vite (Full Bundle) 8.0.0-beta.1 | 6977.3kB (1.0x) ◆ | 1825.8kB (1.2x)   |
<!-- BENCHMARK:END -->





































































































