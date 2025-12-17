# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-17`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B76%2C60%2C79%2C99%2C100%2C76%2C58%2C93%2C18%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A114.99999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B7431%2C1987%2C1451%2C1420%2C1171%2C11100%2C19369%2C7171%2C11431%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A22274.35%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B741%2C740%2C427%2C489%2C372%2C288%2C7922%2C27%2C1017%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9110.3%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B198%2C268%2C187%2C157%2C108%2C283%2C362%2C87%2C2231%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2565.6499999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B129%2C248%2C211%2C144%2C101%2C21%2C114%2C53%2C2196%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2525.3999999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B7598%2C1747%2C1683%2C1554%2C1607%2C9136%2C2484%2C2021%2C12144%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A13965.599999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10724.3%2C7214.8%2C7438.9%2C7579.4%2C7579.4%2C8023.5%2C6972.9%2C6972.9%2C7420%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12332.944999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.3%27%2C%27Unpack+%28Prebundle%29+3.7.3%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.104.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2507.9%2C1703.2%2C1571.6%2C1329.7%2C1329.7%2C2036.3%2C1824.4%2C1824.4%2C1876.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28173%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28104%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28191%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.085%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR        | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | --------------- | -------------- |
| Farm 1.7.11                     | 76    | 7431ms (6.3x)   | 741ms (27.4x)   | 198ms (2.3x)   | 129ms (6.1x)    | 7598ms (4.9x)  |
| Rspack CLI 1.6.7                | 60    | 1987ms (1.7x)   | 740ms (27.4x)   | 268ms (3.1x)   | 248ms (11.8x)   | 1747ms (1.1x)  |
| Rsbuild 1.6.14                  | 79    | 1451ms (1.2x)   | 427ms (15.8x)   | 187ms (2.1x)   | 211ms (10.0x)   | 1683ms (1.1x)  |
| Unpack 3.7.3                    | 99    | 1420ms (1.2x)   | 489ms (18.1x)   | 157ms (1.8x)   | 144ms (6.9x)    | 1554ms (1.0x)  |
| Unpack (Prebundle) 3.7.3        | 100   | 1171ms (1.0x)   | 372ms (13.8x)   | 108ms (1.2x)   | 101ms (4.8x)    | 1607ms (1.0x)  |
| Next.js (Turbopack) 16.0.8      | 76    | 11100ms (9.5x)  | 288ms (10.7x)   | 283ms (3.3x)   | 21ms (1.0x)     | 9136ms (5.9x)  |
| Vite 8.0.0-beta.2               | 58    | 19369ms (16.5x) | 7922ms (293.4x) | 362ms (4.2x)   | 114ms (5.4x)    | 2484ms (1.6x)  |
| Vite (Full Bundle) 8.0.0-beta.2 | 93    | 7171ms (6.1x)   | 27ms (1.0x)     | 87ms (1.0x)    | 53ms (2.5x)     | 2021ms (1.3x)  |
| webpack (SWC) 5.104.0           | 18    | 11431ms (9.8x)  | 1017ms (37.7x)  | 2231ms (25.6x) | 2196ms (104.6x) | 12144ms (7.8x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10724.3kB (1.5x) | 2507.9kB (1.9x) |
| Rspack CLI 1.6.7                | 7214.8kB (1.0x)  | 1703.2kB (1.3x) |
| Rsbuild 1.6.14                  | 7438.9kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.7.3                    | 7579.4kB (1.1x)  | 1329.7kB (1.0x) |
| Unpack (Prebundle) 3.7.3        | 7579.4kB (1.1x)  | 1329.7kB (1.0x) |
| Next.js (Turbopack) 16.0.8      | 8023.5kB (1.2x)  | 2036.3kB (1.5x) |
| Vite 8.0.0-beta.2               | 6972.9kB (1.0x)  | 1824.4kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.2 | 6972.9kB (1.0x)  | 1824.4kB (1.4x) |
| webpack (SWC) 5.104.0           | 7420.0kB (1.1x)  | 1876.1kB (1.4x) |
<!-- BENCHMARK:END -->



























































































































































