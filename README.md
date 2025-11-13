# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `medium`
- Date: `2025-11-13`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B9516%2C1923%2C1355%2C3027%2C1489%2C1950%2C36616%2C10516%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A42108.399999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B624%2C163%2C181%2C132%2C179%2C167%2C472%2C451%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A717.5999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B155%2C137%2C165%2C152%2C124%2C131%2C183%2C173%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A210.45%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B7762%2C1945%2C3487%2C2514%2C3546%2C2663%2C17654%2C2786%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A20302.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%273574.5%27%2C%272850.4%27%2C%272882.7%27%2C%272922.2%27%2C%272922.2%27%2C%272922.2%27%2C%273701.8%27%2C%272654.0%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A4257.07%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.3%27%2C%27Rsbuild+1.6.5%27%2C%27Unpack+%28Native+Watcher%29+3.5.0%27%2C%27Unpack+3.5.0%27%2C%27Unpack+%28Prebundle%29+3.5.0%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%27827.4%27%2C%27679.3%27%2C%27680.6%27%2C%27698.7%27%2C%27698.7%27%2C%27698.7%27%2C%27982.8%27%2C%27726.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28145%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28290%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2833%2C+71%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28265%2C+72%25%2C+52%25%2C+0.7%29%27%2C%27hsla%2815%2C+78%25%2C+47%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1130.2199999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR       | Prod build      |
| ----------------------------- | --------------- | -------------- | -------------- | --------------- |
| Farm 1.7.11                   | 9516ms (7.0x)   | 624ms (4.7x)   | 155ms (1.3x)   | 7762ms (4.0x)   |
| Rspack CLI 1.6.3              | 1923ms (1.4x)   | 163ms (1.2x)   | 137ms (1.1x)   | 1945ms (1.0x) ◆ |
| Rsbuild 1.6.5                 | 1355ms (1.0x) ◆ | 181ms (1.4x)   | 165ms (1.3x)   | 3487ms (1.8x)   |
| Unpack (Native Watcher) 3.5.0 | 3027ms (2.2x)   | 132ms (1.0x) ◆ | 152ms (1.2x)   | 2514ms (1.3x)   |
| Unpack 3.5.0                  | 1489ms (1.1x)   | 179ms (1.4x)   | 124ms (1.0x) ◆ | 3546ms (1.8x)   |
| Unpack (Prebundle) 3.5.0      | 1950ms (1.4x)   | 167ms (1.3x)   | 131ms (1.1x)   | 2663ms (1.4x)   |
| Next.js (Turbopack) 16.0.2    | 36616ms (27.0x) | 472ms (3.6x)   | 183ms (1.5x)   | 17654ms (9.1x)  |
| Vite (Rolldown) 7.2.5         | 10516ms (7.8x)  | 451ms (3.4x)   | 173ms (1.4x)   | 2786ms (1.4x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size     |
| ----------------------------- | ----------------- | ---------------- |
| Farm 1.7.11                   | 3574.5kB (1.3x)   | 827.4kB (1.2x)   |
| Rspack CLI 1.6.3              | 2850.4kB (1.1x)   | 679.3kB (1.0x) ◆ |
| Rsbuild 1.6.5                 | 2882.7kB (1.1x)   | 680.6kB (1.0x)   |
| Unpack (Native Watcher) 3.5.0 | 2922.2kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack 3.5.0                  | 2922.2kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack (Prebundle) 3.5.0      | 2922.2kB (1.1x)   | 698.7kB (1.0x)   |
| Next.js (Turbopack) 16.0.2    | 3701.8kB (1.4x)   | 982.8kB (1.4x)   |
| Vite (Rolldown) 7.2.5         | 2654.0kB (1.0x) ◆ | 726.3kB (1.1x)   |
<!-- BENCHMARK:END -->







































