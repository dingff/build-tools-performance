# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-19`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B61%2C58%2C83%2C85%2C96%2C88%2C76%2C61%2C93%2C14%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A110.39999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B4294%2C1667%2C1373%2C1588%2C1258%2C1199%2C1872%2C11962%2C6778%2C12074%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A13885.099999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B821%2C703%2C417%2C509%2C378%2C500%2C353%2C6255%2C39%2C1004%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A7193.249999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B196%2C284%2C186%2C175%2C110%2C182%2C46%2C321%2C78%2C2292%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2635.7999999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B187%2C235%2C169%2C156%2C110%2C150%2C199%2C52%2C41%2C2375%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2731.25%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B5409%2C1524%2C1521%2C1609%2C1554%2C1410%2C8738%2C2019%2C1946%2C12509%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14385.349999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10725%2C7214.8%2C7438.9%2C7579.4%2C7579.4%2C7579.4%2C7380%2C6966.2%2C6966.2%2C7420%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12333.749999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.8%27%2C%27Rsbuild+1.6.15%27%2C%27Unpack+3.7.7%27%2C%27Unpack+%28Prebundle%29+3.7.7%27%2C%27Unpack+%28Cache%29+3.7.7%27%2C%27Next.js+%28Turbopack%29+16.1.0%27%2C%27Vite+8.0.0-beta.3%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.3%27%2C%27webpack+%28SWC%29+5.104.1%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2507.9%2C1703.2%2C1571.6%2C1329.6%2C1329.6%2C1329.6%2C1871.2%2C1820.3%2C1820.3%2C1876.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28158%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%2833%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28112%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28165%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%2898%2C+78%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28309%2C+73%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28186%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%2826%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28266%2C+71%25%2C+49%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2884.085%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | Score | Startup         | Page Reload     | Root HMR       | Leaf HMR       | Prod Build     |
| ------------------------------- | ----- | --------------- | --------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                     | 61    | 4294ms (3.6x)   | 821ms (21.1x)   | 196ms (4.3x)   | 187ms (4.6x)   | 5409ms (3.8x)  |
| Rspack CLI 1.6.8                | 58    | 1667ms (1.4x)   | 703ms (18.0x)   | 284ms (6.2x)   | 235ms (5.7x)   | 1524ms (1.1x)  |
| Rsbuild 1.6.15                  | 83    | 1373ms (1.1x)   | 417ms (10.7x)   | 186ms (4.0x)   | 169ms (4.1x)   | 1521ms (1.1x)  |
| Unpack 3.7.7                    | 85    | 1588ms (1.3x)   | 509ms (13.1x)   | 175ms (3.8x)   | 156ms (3.8x)   | 1609ms (1.1x)  |
| Unpack (Prebundle) 3.7.7        | 96    | 1258ms (1.0x)   | 378ms (9.7x)    | 110ms (2.4x)   | 110ms (2.7x)   | 1554ms (1.1x)  |
| Unpack (Cache) 3.7.7            | 88    | 1199ms (1.0x)   | 500ms (12.8x)   | 182ms (4.0x)   | 150ms (3.7x)   | 1410ms (1.0x)  |
| Next.js (Turbopack) 16.1.0      | 76    | 1872ms (1.6x)   | 353ms (9.1x)    | 46ms (1.0x)    | 199ms (4.9x)   | 8738ms (6.2x)  |
| Vite 8.0.0-beta.3               | 61    | 11962ms (10.0x) | 6255ms (160.4x) | 321ms (7.0x)   | 52ms (1.3x)    | 2019ms (1.4x)  |
| Vite (Full Bundle) 8.0.0-beta.3 | 93    | 6778ms (5.7x)   | 39ms (1.0x)     | 78ms (1.7x)    | 41ms (1.0x)    | 1946ms (1.4x)  |
| webpack (SWC) 5.104.1           | 14    | 12074ms (10.1x) | 1004ms (25.7x)  | 2292ms (49.8x) | 2375ms (57.9x) | 12509ms (8.9x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10725.0kB (1.5x) | 2507.9kB (1.9x) |
| Rspack CLI 1.6.8                | 7214.8kB (1.0x)  | 1703.2kB (1.3x) |
| Rsbuild 1.6.15                  | 7438.9kB (1.1x)  | 1571.6kB (1.2x) |
| Unpack 3.7.7                    | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Unpack (Prebundle) 3.7.7        | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Unpack (Cache) 3.7.7            | 7579.4kB (1.1x)  | 1329.6kB (1.0x) |
| Next.js (Turbopack) 16.1.0      | 7380.0kB (1.1x)  | 1871.2kB (1.4x) |
| Vite 8.0.0-beta.3               | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| Vite (Full Bundle) 8.0.0-beta.3 | 6966.2kB (1.0x)  | 1820.3kB (1.4x) |
| webpack (SWC) 5.104.1           | 7420.0kB (1.1x)  | 1876.1kB (1.4x) |
<!-- BENCHMARK:END -->

































































































































































