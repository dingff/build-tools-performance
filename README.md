# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-12`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27DX+Score+%28Higher+is+better%29%27%2Cdata%3A%5B52%2C65%2C83%2C86%2C93%2C99%2C67%2C58%2C86%2C13%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27DX+Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A113.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B7072%2C1667%2C1337%2C1564%2C1767%2C1616%2C10880%2C21821%2C7089%2C11826%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A25094.149999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B821%2C710%2C412%2C503%2C612%2C437%2C371%2C8486%2C48%2C1033%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9758.9%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B211%2C274%2C210%2C188%2C161%2C125%2C260%2C258%2C84%2C2453%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2820.95%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B240%2C250%2C189%2C181%2C150%2C116%2C25%2C85%2C71%2C2335%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2685.25%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B7629%2C1588%2C1535%2C1485%2C1447%2C1399%2C8890%2C1994%2C1963%2C12437%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14302.55%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10730.8%2C7219%2C7440.6%2C7523.1%2C7523.1%2C7523.1%2C8027.5%2C6977.3%2C6977.3%2C7438.6%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.2%27%2C%27Unpack+%28Prebundle%29+3.7.2%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.2%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.2%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.2%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2510.2%2C1704.5%2C1572.3%2C1609.5%2C1609.5%2C1609.5%2C2037.6%2C1825.8%2C1825.8%2C1878.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28248%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28179%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28120%2C+75%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28111%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28311%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | DX Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------- | -------- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                     | 52       | 7072ms (5.3x)   | 821ms (17.1x)   | 211ms (2.5x)   | 240ms (9.6x)   | 7629ms (5.5x)  |
| Rspack CLI 1.6.7                | 65       | 1667ms (1.2x)   | 710ms (14.8x)   | 274ms (3.3x)   | 250ms (10.0x)  | 1588ms (1.1x)  |
| Rsbuild 1.6.14                  | 83       | 1337ms (1.0x)   | 412ms (8.6x)    | 210ms (2.5x)   | 189ms (7.6x)   | 1535ms (1.1x)  |
| Unpack 3.7.2                    | 86       | 1564ms (1.2x)   | 503ms (10.5x)   | 188ms (2.2x)   | 181ms (7.2x)   | 1485ms (1.1x)  |
| Unpack (Prebundle) 3.7.2        | 93       | 1767ms (1.3x)   | 612ms (12.8x)   | 161ms (1.9x)   | 150ms (6.0x)   | 1447ms (1.0x)  |
| Unpack (Prebundle Plus) 3.7.2   | 99       | 1616ms (1.2x)   | 437ms (9.1x)    | 125ms (1.5x)   | 116ms (4.6x)   | 1399ms (1.0x)  |
| Next.js (Turbopack) 16.0.8      | 67       | 10880ms (8.1x)  | 371ms (7.7x)    | 260ms (3.1x)   | 25ms (1.0x)    | 8890ms (6.4x)  |
| Vite 8.0.0-beta.2               | 58       | 21821ms (16.3x) | 8486ms (176.8x) | 258ms (3.1x)   | 85ms (3.4x)    | 1994ms (1.4x)  |
| Vite (Full Bundle) 8.0.0-beta.2 | 86       | 7089ms (5.3x)   | 48ms (1.0x)     | 84ms (1.0x)    | 71ms (2.8x)    | 1963ms (1.4x)  |
| webpack (SWC) 5.103.0           | 13       | 11826ms (8.8x)  | 1033ms (21.5x)  | 2453ms (29.2x) | 2335ms (93.4x) | 12437ms (8.9x) |

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





















































































































































