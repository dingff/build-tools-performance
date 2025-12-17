# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-17`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B57%2C57%2C82%2C90%2C96%2C77%2C66%2C93%2C14%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A110.39999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B7114%2C1749%2C1363%2C1604%2C1126%2C11280%2C19755%2C6871%2C11496%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A22718.25%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B770%2C706%2C409%2C527%2C371%2C368%2C7458%2C40%2C1045%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A8576.699999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B197%2C267%2C183%2C153%2C116%2C207%2C197%2C62%2C2276%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2617.3999999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B200%2C238%2C174%2C138%2C114%2C20%2C85%2C53%2C2234%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2569.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B7416%2C1667%2C1577%2C1642%2C1594%2C9563%2C1992%2C2083%2C12306%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14151.9%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10724.3%2C7214.8%2C7438.9%2C7579.4%2C7579.4%2C8023.4%2C6972.9%2C6972.9%2C7420%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12332.944999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2507.9%2C1703.2%2C1571.6%2C1329.7%2C1329.7%2C2036.4%2C1824.4%2C1824.4%2C1876.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.085%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR        | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | --------------- | -------------- |
| Farm 1.7.11                     | 57    | 7114ms (6.3x)   | 770ms (19.3x)   | 197ms (3.2x)   | 200ms (10.0x)   | 7416ms (4.7x)  |
| Rspack CLI 1.6.7                | 57    | 1749ms (1.6x)   | 706ms (17.6x)   | 267ms (4.3x)   | 238ms (11.9x)   | 1667ms (1.1x)  |
| Rsbuild 1.6.14                  | 82    | 1363ms (1.2x)   | 409ms (10.2x)   | 183ms (3.0x)   | 174ms (8.7x)    | 1577ms (1.0x)  |
| Unpack 3.7.3                    | 90    | 1604ms (1.4x)   | 527ms (13.2x)   | 153ms (2.5x)   | 138ms (6.9x)    | 1642ms (1.0x)  |
| Unpack (Prebundle) 3.7.3        | 96    | 1126ms (1.0x)   | 371ms (9.3x)    | 116ms (1.9x)   | 114ms (5.7x)    | 1594ms (1.0x)  |
| Next.js (Turbopack) 16.0.8      | 77    | 11280ms (10.0x) | 368ms (9.2x)    | 207ms (3.3x)   | 20ms (1.0x)     | 9563ms (6.1x)  |
| Vite 8.0.0-beta.2               | 66    | 19755ms (17.5x) | 7458ms (186.4x) | 197ms (3.2x)   | 85ms (4.3x)     | 1992ms (1.3x)  |
| Vite (Full Bundle) 8.0.0-beta.2 | 93    | 6871ms (6.1x)   | 40ms (1.0x)     | 62ms (1.0x)    | 53ms (2.6x)     | 2083ms (1.3x)  |
| webpack (SWC) 5.104.0           | 14    | 11496ms (10.2x) | 1045ms (26.1x)  | 2276ms (36.7x) | 2234ms (111.7x) | 12306ms (7.8x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10724.3kB (1.5x) | 2507.9kB (1.9x) |
| Rspack CLI 1.6.7                | 7214.8kB (1.0x)  | 1703.2kB (1.3x) |
| Rsbuild 1.6.14                  | 7438.9kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.7.3                    | 7579.4kB (1.1x)  | 1329.7kB (1.0x) |
| Unpack (Prebundle) 3.7.3        | 7579.4kB (1.1x)  | 1329.7kB (1.0x) |
| Next.js (Turbopack) 16.0.8      | 8023.4kB (1.2x)  | 2036.4kB (1.5x) |
| Vite 8.0.0-beta.2               | 6972.9kB (1.0x)  | 1824.4kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.2 | 6972.9kB (1.0x)  | 1824.4kB (1.4x) |
| webpack (SWC) 5.104.0           | 7420.0kB (1.1x)  | 1876.1kB (1.4x) |
<!-- BENCHMARK:END -->





























































































































































