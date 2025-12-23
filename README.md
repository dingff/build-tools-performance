# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-23`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B58%2C58%2C82%2C92%2C96%2C82%2C73%2C70%2C91%2C12%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A110.39999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B4259%2C1609%2C1416%2C1480%2C1170%2C1156%2C2838%2C14001%2C7295%2C12096%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A16101.15%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B805%2C702%2C419%2C494%2C371%2C505%2C474%2C7015%2C49%2C1083%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A8067.249999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B240%2C258%2C184%2C149%2C119%2C184%2C243%2C141%2C98%2C2419%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2781.85%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B179%2C236%2C173%2C147%2C117%2C166%2C127%2C17%2C105%2C2493%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2866.95%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B5895%2C1701%2C1621%2C1508%2C1484%2C1369%2C9117%2C2253%2C2085%2C12467%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14337.05%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10725%2C7214.8%2C7438.9%2C7579.4%2C7579.4%2C7579.4%2C7380%2C7006.3%2C7006.3%2C7418.9%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12333.749999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.8%27%2C%27Unpack+%28Prebundle%29+3.7.8%27%2C%27Unpack+%28Cache%29+3.7.8%27%2C%27Next.js+%28Turbopack%29+16.1.1%27%2C%27Vite+8.0.0-beta.4%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.4%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2507.9%2C1703.2%2C1571.6%2C1329.6%2C1329.6%2C1329.6%2C1871.2%2C1821.7%2C1821.7%2C1875.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28336%2C+72%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28151%2C+76%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28233%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28234%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28200%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28100%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.085%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR        | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | --------------- | -------------- |
| Farm 1.7.11                     | 58    | 4259ms (3.7x)   | 805ms (16.4x)   | 240ms (2.4x)   | 179ms (10.5x)   | 5895ms (4.3x)  |
| Rspack CLI 1.6.8                | 58    | 1609ms (1.4x)   | 702ms (14.3x)   | 258ms (2.6x)   | 236ms (13.9x)   | 1701ms (1.2x)  |
| Rsbuild 1.6.15                  | 82    | 1416ms (1.2x)   | 419ms (8.6x)    | 184ms (1.9x)   | 173ms (10.2x)   | 1621ms (1.2x)  |
| Unpack 3.7.8                    | 92    | 1480ms (1.3x)   | 494ms (10.1x)   | 149ms (1.5x)   | 147ms (8.6x)    | 1508ms (1.1x)  |
| Unpack (Prebundle) 3.7.8        | 96    | 1170ms (1.0x)   | 371ms (7.6x)    | 119ms (1.2x)   | 117ms (6.9x)    | 1484ms (1.1x)  |
| Unpack (Cache) 3.7.8            | 82    | 1156ms (1.0x)   | 505ms (10.3x)   | 184ms (1.9x)   | 166ms (9.8x)    | 1369ms (1.0x)  |
| Next.js (Turbopack) 16.1.1      | 73    | 2838ms (2.5x)   | 474ms (9.7x)    | 243ms (2.5x)   | 127ms (7.5x)    | 9117ms (6.7x)  |
| Vite 8.0.0-beta.4               | 70    | 14001ms (12.1x) | 7015ms (143.2x) | 141ms (1.4x)   | 17ms (1.0x)     | 2253ms (1.6x)  |
| Vite (Full Bundle) 8.0.0-beta.4 | 91    | 7295ms (6.3x)   | 49ms (1.0x)     | 98ms (1.0x)    | 105ms (6.2x)    | 2085ms (1.5x)  |
| webpack (SWC) 5.104.1           | 12    | 12096ms (10.5x) | 1083ms (22.1x)  | 2419ms (24.7x) | 2493ms (146.6x) | 12467ms (9.1x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10725.0kB (1.5x) | 2507.9kB (1.9x) |
| Rspack CLI 1.6.8                | 7214.8kB (1.0x)  | 1703.2kB (1.3x) |
| Rsbuild 1.6.15                  | 7438.9kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.7.8                    | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Unpack (Prebundle) 3.7.8        | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Unpack (Cache) 3.7.8            | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Next.js (Turbopack) 16.1.1      | 7380.0kB (1.1x)  | 1871.2kB (1.4x) |
| Vite 8.0.0-beta.4               | 7006.3kB (1.0x)  | 1821.7kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.4 | 7006.3kB (1.0x)  | 1821.7kB (1.4x) |
| webpack (SWC) 5.104.1           | 7418.9kB (1.1x)  | 1875.8kB (1.4x) |
<!-- BENCHMARK:END -->


































































































































































