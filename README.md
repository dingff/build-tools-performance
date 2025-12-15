# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-15`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B64%2C59%2C82%2C81%2C99%2C79%2C70%2C93%2C17%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A113.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B7032%2C1654%2C1437%2C1707%2C1694%2C11406%2C19497%2C7281%2C11978%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A22421.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B829%2C779%2C435%2C574%2C466%2C389%2C8772%2C49%2C1097%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A10087.8%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B276%2C262%2C198%2C169%2C127%2C237%2C170%2C70%2C2246%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2582.8999999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B167%2C269%2C186%2C194%2C135%2C28%2C20%2C74%2C2379%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2735.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B7445%2C1619%2C1787%2C1577%2C1556%2C9018%2C1984%2C1895%2C12653%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14550.949999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10730.8%2C7219%2C7440.6%2C7523.1%2C7523.1%2C8027.5%2C6977.3%2C6977.3%2C7438.6%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2510.2%2C1704.5%2C1572.3%2C1609.5%2C1609.5%2C2037.5%2C1825.8%2C1825.8%2C1878.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR        | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | --------------- | -------------- |
| Farm 1.7.11                     | 64    | 7032ms (4.9x)   | 829ms (16.9x)   | 276ms (3.9x)   | 167ms (8.3x)    | 7445ms (4.8x)  |
| Rspack CLI 1.6.7                | 59    | 1654ms (1.2x)   | 779ms (15.9x)   | 262ms (3.7x)   | 269ms (13.4x)   | 1619ms (1.0x)  |
| Rsbuild 1.6.14                  | 82    | 1437ms (1.0x)   | 435ms (8.9x)    | 198ms (2.8x)   | 186ms (9.3x)    | 1787ms (1.1x)  |
| Unpack 3.7.2                    | 81    | 1707ms (1.2x)   | 574ms (11.7x)   | 169ms (2.4x)   | 194ms (9.7x)    | 1577ms (1.0x)  |
| Unpack (Prebundle) 3.7.2        | 99    | 1694ms (1.2x)   | 466ms (9.5x)    | 127ms (1.8x)   | 135ms (6.8x)    | 1556ms (1.0x)  |
| Next.js (Turbopack) 16.0.8      | 79    | 11406ms (7.9x)  | 389ms (7.9x)    | 237ms (3.4x)   | 28ms (1.4x)     | 9018ms (5.8x)  |
| Vite 8.0.0-beta.2               | 70    | 19497ms (13.6x) | 8772ms (179.0x) | 170ms (2.4x)   | 20ms (1.0x)     | 1984ms (1.3x)  |
| Vite (Full Bundle) 8.0.0-beta.2 | 93    | 7281ms (5.1x)   | 49ms (1.0x)     | 70ms (1.0x)    | 74ms (3.7x)     | 1895ms (1.2x)  |
| webpack (SWC) 5.103.0           | 17    | 11978ms (8.3x)  | 1097ms (22.4x)  | 2246ms (32.1x) | 2379ms (119.0x) | 12653ms (8.1x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10730.8kB (1.5x) | 2510.2kB (1.6x) |
| Rspack CLI 1.6.7                | 7219.0kB (1.0x)  | 1704.5kB (1.1x) |
| Rsbuild 1.6.14                  | 7440.6kB (1.1x)  | 1572.3kB (1.0x) |
| Unpack 3.7.2                    | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Unpack (Prebundle) 3.7.2        | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Next.js (Turbopack) 16.0.8      | 8027.5kB (1.2x)  | 2037.5kB (1.3x) |
| Vite 8.0.0-beta.2               | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
| Vite (Full Bundle) 8.0.0-beta.2 | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
| webpack (SWC) 5.103.0           | 7438.6kB (1.1x)  | 1878.1kB (1.2x) |
<!-- BENCHMARK:END -->
























































































































































