# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `medium`
- Date: `2025-11-11`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B7725%2C834%2C792%2C1203%2C999%2C1334%2C22483%2C6836%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A25855.449999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B1246%2C106%2C117%2C179%2C149%2C109%2C293%2C189%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1432.8999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B179%2C97%2C103%2C100%2C91%2C66%2C115%2C131%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A205.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B7133%2C1600%2C1668%2C1739%2C2091%2C1635%2C17391%2C1674%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A19999.649999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%273574.5%27%2C%272850.4%27%2C%272882.7%27%2C%272922.1%27%2C%272922.1%27%2C%272922.1%27%2C%273701.8%27%2C%272654.0%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A4257.07%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.1%27%2C%27Rsbuild+1.6.3%27%2C%27Unpack+%28Native+Watcher%29+3.4.2%27%2C%27Unpack+3.4.2%27%2C%27Unpack+%28Prebundle%29+3.4.2%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.3%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%27827.3%27%2C%27679.4%27%2C%27680.6%27%2C%27698.7%27%2C%27698.7%27%2C%27698.7%27%2C%27982.7%27%2C%27726.3%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28355%2C+75%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28141%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28226%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28208%2C+71%25%2C+45%25%2C+0.7%29%27%2C%27hsla%2886%2C+75%25%2C+55%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2851%2C+78%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1130.105%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 7725ms (9.8x)   | 1246ms (11.8x) | 179ms (2.7x)  | 7133ms (4.5x)   |
| Rspack CLI 1.6.1              | 834ms (1.1x)    | 106ms (1.0x) ◆ | 97ms (1.5x)   | 1600ms (1.0x) ◆ |
| Rsbuild 1.6.3                 | 792ms (1.0x) ◆  | 117ms (1.1x)   | 103ms (1.6x)  | 1668ms (1.0x)   |
| Unpack (Native Watcher) 3.4.2 | 1203ms (1.5x)   | 179ms (1.7x)   | 100ms (1.5x)  | 1739ms (1.1x)   |
| Unpack 3.4.2                  | 999ms (1.3x)    | 149ms (1.4x)   | 91ms (1.4x)   | 2091ms (1.3x)   |
| Unpack (Prebundle) 3.4.2      | 1334ms (1.7x)   | 109ms (1.0x)   | 66ms (1.0x) ◆ | 1635ms (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 22483ms (28.4x) | 293ms (2.8x)   | 115ms (1.7x)  | 17391ms (10.9x) |
| Vite (Rolldown) 7.2.3         | 6836ms (8.6x)   | 189ms (1.8x)   | 131ms (2.0x)  | 1674ms (1.0x)   |

**Bundle sizes**

| Name                          | Total size        | Gzipped size     |
| ----------------------------- | ----------------- | ---------------- |
| Farm 1.7.11                   | 3574.5kB (1.3x)   | 827.3kB (1.2x)   |
| Rspack CLI 1.6.1              | 2850.4kB (1.1x)   | 679.4kB (1.0x) ◆ |
| Rsbuild 1.6.3                 | 2882.7kB (1.1x)   | 680.6kB (1.0x)   |
| Unpack (Native Watcher) 3.4.2 | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack 3.4.2                  | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack (Prebundle) 3.4.2      | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 3701.8kB (1.4x)   | 982.7kB (1.4x)   |
| Vite (Rolldown) 7.2.3         | 2654.0kB (1.0x) ◆ | 726.3kB (1.1x)   |
<!-- BENCHMARK:END -->





























