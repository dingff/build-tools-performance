# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-12`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B55%2C59%2C75%2C74%2C91%2C99%2C80%2C70%2C93%2C17%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A113.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B7292%2C1697%2C1457%2C1559%2C1733%2C1733%2C11316%2C20229%2C6650%2C12124%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A23263.35%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B831%2C714%2C424%2C570%2C577%2C446%2C390%2C9071%2C50%2C1078%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A10431.65%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B219%2C290%2C224%2C181%2C197%2C130%2C208%2C163%2C92%2C2471%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2841.6499999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B227%2C264%2C212%2C223%2C146%2C125%2C21%2C64%2C53%2C2352%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2704.7999999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B7678%2C1731%2C1827%2C1760%2C1521%2C1603%2C10262%2C2179%2C2137%2C12690%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14593.499999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10730.8%2C7219%2C7440.6%2C7523.1%2C7523.1%2C7523.1%2C8027.5%2C6977.3%2C6977.3%2C7438.6%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2510.2%2C1704.5%2C1572.3%2C1609.5%2C1609.5%2C1609.5%2C2037.6%2C1825.8%2C1825.8%2C1878.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR        | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | --------------- | -------------- |
| Farm 1.7.11                     | 55    | 7292ms (5.0x)   | 831ms (16.6x)   | 219ms (2.4x)   | 227ms (10.8x)   | 7678ms (5.0x)  |
| Rspack CLI 1.6.7                | 59    | 1697ms (1.2x)   | 714ms (14.3x)   | 290ms (3.2x)   | 264ms (12.6x)   | 1731ms (1.1x)  |
| Rsbuild 1.6.14                  | 75    | 1457ms (1.0x)   | 424ms (8.5x)    | 224ms (2.4x)   | 212ms (10.1x)   | 1827ms (1.2x)  |
| Unpack 3.7.2                    | 74    | 1559ms (1.1x)   | 570ms (11.4x)   | 181ms (2.0x)   | 223ms (10.6x)   | 1760ms (1.2x)  |
| Unpack (Prebundle) 3.7.2        | 91    | 1733ms (1.2x)   | 577ms (11.5x)   | 197ms (2.1x)   | 146ms (7.0x)    | 1521ms (1.0x)  |
| Unpack (Prebundle Plus) 3.7.2   | 99    | 1733ms (1.2x)   | 446ms (8.9x)    | 130ms (1.4x)   | 125ms (6.0x)    | 1603ms (1.1x)  |
| Next.js (Turbopack) 16.0.8      | 80    | 11316ms (7.8x)  | 390ms (7.8x)    | 208ms (2.3x)   | 21ms (1.0x)     | 10262ms (6.7x) |
| Vite 8.0.0-beta.2               | 70    | 20229ms (13.9x) | 9071ms (181.4x) | 163ms (1.8x)   | 64ms (3.0x)     | 2179ms (1.4x)  |
| Vite (Full Bundle) 8.0.0-beta.2 | 93    | 6650ms (4.6x)   | 50ms (1.0x)     | 92ms (1.0x)    | 53ms (2.5x)     | 2137ms (1.4x)  |
| webpack (SWC) 5.103.0           | 17    | 12124ms (8.3x)  | 1078ms (21.6x)  | 2471ms (26.9x) | 2352ms (112.0x) | 12690ms (8.3x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10730.8kB (1.5x) | 2510.2kB (1.6x) |
| Rspack CLI 1.6.7                | 7219.0kB (1.0x)  | 1704.5kB (1.1x) |
| Rsbuild 1.6.14                  | 7440.6kB (1.1x)  | 1572.3kB (1.0x) |
| Unpack 3.7.2                    | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Unpack (Prebundle) 3.7.2        | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Unpack (Prebundle Plus) 3.7.2   | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Next.js (Turbopack) 16.0.8      | 8027.5kB (1.2x)  | 2037.6kB (1.3x) |
| Vite 8.0.0-beta.2               | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
| Vite (Full Bundle) 8.0.0-beta.2 | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
| webpack (SWC) 5.103.0           | 7438.6kB (1.1x)  | 1878.1kB (1.2x) |
<!-- BENCHMARK:END -->























































































































































