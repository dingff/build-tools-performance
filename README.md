# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `medium`
- Date: `2025-11-13`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B9472%2C1218%2C988%2C947%2C1518%2C2172%2C31399%2C9455%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A36108.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B824%2C115%2C211%2C114%2C93%2C110%2C240%2C217%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A947.5999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B203%2C116%2C80%2C88%2C94%2C74%2C102%2C104%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A233.45%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B7166%2C2687%2C2270%2C2876%2C1691%2C2495%2C18451%2C2723%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A21218.649999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%273574.5%27%2C%272850.4%27%2C%272882.8%27%2C%272922.1%27%2C%272922.1%27%2C%272922.1%27%2C%273701.8%27%2C%272654.0%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A4257.07%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.2%27%2C%27Rsbuild+1.6.4%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.2%27%2C%27Vite+%28Rolldown%29+7.2.5%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%27827.4%27%2C%27679.3%27%2C%27680.5%27%2C%27698.7%27%2C%27698.7%27%2C%27698.7%27%2C%27982.8%27%2C%27726.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2870%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%285%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28117%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28322%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1130.2199999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR      | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | ------------- | ------------- | --------------- |
| Farm 1.7.11                   | 9472ms (10.0x)  | 824ms (8.9x)  | 203ms (2.7x)  | 7166ms (4.2x)   |
| Rspack CLI 1.6.2              | 1218ms (1.3x)   | 115ms (1.2x)  | 116ms (1.6x)  | 2687ms (1.6x)   |
| Rsbuild 1.6.4                 | 988ms (1.0x)    | 211ms (2.3x)  | 80ms (1.1x)   | 2270ms (1.3x)   |
| Unpack (Native Watcher) 3.4.2 | 947ms (1.0x) ◆  | 114ms (1.2x)  | 88ms (1.2x)   | 2876ms (1.7x)   |
| Unpack 3.4.2                  | 1518ms (1.6x)   | 93ms (1.0x) ◆ | 94ms (1.3x)   | 1691ms (1.0x) ◆ |
| Unpack (Prebundle) 3.4.2      | 2172ms (2.3x)   | 110ms (1.2x)  | 74ms (1.0x) ◆ | 2495ms (1.5x)   |
| Next.js (Turbopack) 16.0.2    | 31399ms (33.2x) | 240ms (2.6x)  | 102ms (1.4x)  | 18451ms (10.9x) |
| Vite (Rolldown) 7.2.5         | 9455ms (10.0x)  | 217ms (2.3x)  | 104ms (1.4x)  | 2723ms (1.6x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size     |
| ----------------------------- | ----------------- | ---------------- |
| Farm 1.7.11                   | 3574.5kB (1.3x)   | 827.4kB (1.2x)   |
| Rspack CLI 1.6.2              | 2850.4kB (1.1x)   | 679.3kB (1.0x) ◆ |
| Rsbuild 1.6.4                 | 2882.8kB (1.1x)   | 680.5kB (1.0x)   |
| Unpack (Native Watcher) 3.4.2 | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack 3.4.2                  | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack (Prebundle) 3.4.2      | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Next.js (Turbopack) 16.0.2    | 3701.8kB (1.4x)   | 982.8kB (1.4x)   |
| Vite (Rolldown) 7.2.5         | 2654.0kB (1.0x) ◆ | 726.3kB (1.1x)   |
<!-- BENCHMARK:END -->

































