# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `medium`
- Date: `2025-11-06`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dev+cold+start%27%2Cdata%3A%5B6342%2C527%2C681%2C1037%2C1480%2C31794%2C4915%2C7575%2C8814%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Dev+cold+start+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A34973.4%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B675%2C85%2C85%2C76%2C91%2C173%2C83%2C425%2C1093%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1202.3000000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B153%2C83%2C102%2C95%2C69%2C80%2C111%2C98%2C863%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A949.3000000000001%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+build%27%2Cdata%3A%5B6068%2C1195%2C1647%2C1611%2C1744%2C16601%2C1488%2C10071%2C11749%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A18261.100000000002%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Total+size%27%2Cdata%3A%5B%273574.5%27%2C%272882.7%27%2C%272922.1%27%2C%272922.1%27%2C%272922.1%27%2C%273701.7%27%2C%272655.2%27%2C%272575.9%27%2C%272962.5%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Total+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A4071.8700000000003%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rsbuild+1.6.2%27%2C%27Unpack+%28Native+Watcher%29+3.3.6%27%2C%27Unpack+3.3.6%27%2C%27Unpack+%28Prebundle%29+3.3.6%27%2C%27Next.js+%28Turbopack%29+16.0.1%27%2C%27Vite+%28Rolldown%29+7.2.1%27%2C%27Vite+%28SWC%29+7.2.1%27%2C%27webpack+%28SWC%29+5.102.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B%27827.3%27%2C%27680.6%27%2C%27698.7%27%2C%27698.7%27%2C%27698.7%27%2C%27982.7%27%2C%27726.8%27%2C%27689.3%27%2C%27746.0%27%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28216%2C+77%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28139%2C+79%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28222%2C+76%25%2C+48%25%2C+0.7%29%27%2C%27hsla%28334%2C+76%25%2C+43%25%2C+0.7%29%27%2C%27hsla%2842%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28261%2C+78%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28357%2C+81%25%2C+55%25%2C+0.7%29%27%2C%27hsla%28207%2C+79%25%2C+55%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A1080.97%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                          | Dev cold start  | Root HMR       | Leaf HMR      | Prod build      |
| ----------------------------- | --------------- | -------------- | ------------- | --------------- |
| Farm 1.7.11                   | 6342ms (12.0x)  | 675ms (8.9x)   | 153ms (2.2x)  | 6068ms (5.1x)   |
| Rsbuild 1.6.2                 | 527ms (1.0x) ◆  | 85ms (1.1x)    | 83ms (1.2x)   | 1195ms (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.6 | 681ms (1.3x)    | 85ms (1.1x)    | 102ms (1.5x)  | 1647ms (1.4x)   |
| Unpack 3.3.6                  | 1037ms (2.0x)   | 76ms (1.0x) ◆  | 95ms (1.4x)   | 1611ms (1.3x)   |
| Unpack (Prebundle) 3.3.6      | 1480ms (2.8x)   | 91ms (1.2x)    | 69ms (1.0x) ◆ | 1744ms (1.5x)   |
| Next.js (Turbopack) 16.0.1    | 31794ms (60.3x) | 173ms (2.3x)   | 80ms (1.2x)   | 16601ms (13.9x) |
| Vite (Rolldown) 7.2.1         | 4915ms (9.3x)   | 83ms (1.1x)    | 111ms (1.6x)  | 1488ms (1.2x)   |
| Vite (SWC) 7.2.1              | 7575ms (14.4x)  | 425ms (5.6x)   | 98ms (1.4x)   | 10071ms (8.4x)  |
| webpack (SWC) 5.102.1         | 8814ms (16.7x)  | 1093ms (14.4x) | 863ms (12.5x) | 11749ms (9.8x)  |

**Bundle sizes**

| Name                          | Total size        | Gzipped size     |
| ----------------------------- | ----------------- | ---------------- |
| Farm 1.7.11                   | 3574.5kB (1.4x)   | 827.3kB (1.2x)   |
| Rsbuild 1.6.2                 | 2882.7kB (1.1x)   | 680.6kB (1.0x) ◆ |
| Unpack (Native Watcher) 3.3.6 | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack 3.3.6                  | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Unpack (Prebundle) 3.3.6      | 2922.1kB (1.1x)   | 698.7kB (1.0x)   |
| Next.js (Turbopack) 16.0.1    | 3701.7kB (1.4x)   | 982.7kB (1.4x)   |
| Vite (Rolldown) 7.2.1         | 2655.2kB (1.0x)   | 726.8kB (1.1x)   |
| Vite (SWC) 7.2.1              | 2575.9kB (1.0x) ◆ | 689.3kB (1.0x)   |
| webpack (SWC) 5.102.1         | 2962.5kB (1.2x)   | 746.0kB (1.1x)   |
<!-- BENCHMARK:END -->














