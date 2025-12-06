# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-06`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B10063%2C2016%2C1904%2C2149%2C2756%2C40492%2C11070%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A46565.799999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B669%2C238%2C240%2C164%2C109%2C475%2C685%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A787.7499999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B197%2C200%2C128%2C111%2C90%2C64%2C142%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A229.99999999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B11939%2C3313%2C4447%2C3395%2C3652%2C24790%2C3706%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A28508.499999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277325.8%27%2C%277312.1%27%2C%277383.1%27%2C%277383.1%27%2C%277915.2%27%2C%276878.4%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.6%27%2C%27Rsbuild+1.6.12%27%2C%27Unpack+3.6.1%27%2C%27Unpack+%28Prebundle%29+3.6.1%27%2C%27Next.js+%28Turbopack%29+16.0.6%27%2C%27Vite+%28Rolldown%29+7.2.10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271671.1%27%2C%271669.2%27%2C%271704.1%27%2C%271704.1%27%2C%272013.9%27%2C%271797.8%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%289%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28169%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28126%2C+68%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2855%2C+82%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2856%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28185%2C+75%25%2C+48%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| -------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                | 10063ms (5.3x)  | 669ms (6.1x)   | 197ms (3.1x)  | 11939ms (3.6x)  |
| Rspack CLI 1.6.6           | 2016ms (1.1x)   | 238ms (2.2x)   | 200ms (3.1x)  | 3313ms (1.0x) ◆ |
| Rsbuild 1.6.12             | 1904ms (1.0x) ◆ | 240ms (2.2x)   | 128ms (2.0x)  | 4447ms (1.3x)   |
| Unpack 3.6.1               | 2149ms (1.1x)   | 164ms (1.5x)   | 111ms (1.7x)  | 3395ms (1.0x)   |
| Unpack (Prebundle) 3.6.1   | 2756ms (1.4x)   | 109ms (1.0x) ◆ | 90ms (1.4x)   | 3652ms (1.1x)   |
| Next.js (Turbopack) 16.0.6 | 40492ms (21.3x) | 475ms (4.4x)   | 64ms (1.0x) ◆ | 24790ms (7.5x)  |
| Vite (Rolldown) 7.2.10     | 11070ms (5.8x)  | 685ms (6.3x)   | 142ms (2.2x)  | 3706ms (1.1x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.1kB (1.5x)   |
| Rspack CLI 1.6.6           | 7325.8kB (1.1x)   | 1671.1kB (1.0x)   |
| Rsbuild 1.6.12             | 7312.1kB (1.1x)   | 1669.2kB (1.0x) ◆ |
| Unpack 3.6.1               | 7383.1kB (1.1x)   | 1704.1kB (1.0x)   |
| Unpack (Prebundle) 3.6.1   | 7383.1kB (1.1x)   | 1704.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.6 | 7915.2kB (1.2x)   | 2013.9kB (1.2x)   |
| Vite (Rolldown) 7.2.10     | 6878.4kB (1.0x) ◆ | 1797.8kB (1.1x)   |
<!-- BENCHMARK:END -->



























































































