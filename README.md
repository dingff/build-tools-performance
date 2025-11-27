# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-11-27`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B21494%2C4873%2C2824%2C4452%2C3314%2C109306%2C19618%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A125701.9%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B640%2C710%2C414%2C611%2C207%2C1474%2C652%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1695.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B254%2C578%2C322%2C357%2C202%2C126%2C190%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A664.6999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B27445%2C6535%2C6233%2C7920%2C7889%2C46293%2C8779%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A53236.95%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%2710633.4%27%2C%277403.8%27%2C%277396.3%27%2C%277485.9%27%2C%277485.9%27%2C%277915.1%27%2C%276878.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12228.409999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.5%27%2C%27Rsbuild+1.6.9%27%2C%27Unpack+3.5.4%27%2C%27Unpack+%28Prebundle%29+3.5.4%27%2C%27Next.js+%28Turbopack%29+16.0.5%27%2C%27Vite+%28Rolldown%29+7.2.8%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%272514.1%27%2C%271674.6%27%2C%271672.3%27%2C%271708.1%27%2C%271708.1%27%2C%272014.1%27%2C%271797.7%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28294%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28113%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28204%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2876%2C+77%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28341%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2865%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2891.2149999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Dev cold start   | Root HMR       | Leaf HMR       | Prod build      |
| -------------------------- | ---------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                | 21494ms (7.6x)   | 640ms (3.1x)   | 254ms (2.0x)   | 27445ms (4.4x)  |
| Rspack CLI 1.6.5           | 4873ms (1.7x)    | 710ms (3.4x)   | 578ms (4.6x)   | 6535ms (1.0x)   |
| Rsbuild 1.6.9              | 2824ms (1.0x) ◆  | 414ms (2.0x)   | 322ms (2.6x)   | 6233ms (1.0x) ◆ |
| Unpack 3.5.4               | 4452ms (1.6x)    | 611ms (3.0x)   | 357ms (2.8x)   | 7920ms (1.3x)   |
| Unpack (Prebundle) 3.5.4   | 3314ms (1.2x)    | 207ms (1.0x) ◆ | 202ms (1.6x)   | 7889ms (1.3x)   |
| Next.js (Turbopack) 16.0.5 | 109306ms (38.7x) | 1474ms (7.1x)  | 126ms (1.0x) ◆ | 46293ms (7.4x)  |
| Vite (Rolldown) 7.2.8      | 19618ms (6.9x)   | 652ms (3.1x)   | 190ms (1.5x)   | 8779ms (1.4x)   |

**Bundle sizes**

| Name                       | Total size        | Gzipped size      |
| -------------------------- | ----------------- | ----------------- |
| Farm 1.7.11                | 10633.4kB (1.5x)  | 2514.1kB (1.5x)   |
| Rspack CLI 1.6.5           | 7403.8kB (1.1x)   | 1674.6kB (1.0x)   |
| Rsbuild 1.6.9              | 7396.3kB (1.1x)   | 1672.3kB (1.0x) ◆ |
| Unpack 3.5.4               | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Unpack (Prebundle) 3.5.4   | 7485.9kB (1.1x)   | 1708.1kB (1.0x)   |
| Next.js (Turbopack) 16.0.5 | 7915.1kB (1.2x)   | 2014.1kB (1.2x)   |
| Vite (Rolldown) 7.2.8      | 6878.3kB (1.0x) ◆ | 1797.7kB (1.1x)   |
<!-- BENCHMARK:END -->




































































