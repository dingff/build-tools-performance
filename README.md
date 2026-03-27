# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2026-03-27`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Score+%28Higher+is+better%29%27%2Cdata%3A%5B74%2C60%2C67%2C66%2C93%2C94%2C69%2C15%2C13%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A108.1%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B4212%2C2440%2C2155%2C2191%2C2102%2C2029%2C56300%2C4761%2C14487%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A64744.99999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B933%2C997%2C806%2C899%2C756%2C114%2C45971%2C0%2C1811%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A52866.649999999994%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B246%2C386%2C346%2C272%2C179%2C52%2C210%2C0%2C2928%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3367.2%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B217%2C299%2C273%2C303%2C140%2C112%2C113%2C0%2C2623%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A3016.45%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B4113%2C1540%2C1349%2C1528%2C1547%2C8215%2C2106%2C2069%2C12115%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A13932.249999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B8144.2%2C5628.1%2C6165%2C6249.3%2C6249.3%2C6138.2%2C5649.3%2C5649.3%2C5882.2%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9365.83%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.7.10%27%2C%27Rsbuild+1.7.4%27%2C%27Unpack+4.8.0%27%2C%27Unpack+%28Prebundle%29+4.8.0%27%2C%27Next.js+%28Turbopack%29+16.2.1%27%2C%27Vite+8.0.3%27%2C%27Vite+%28Full+Bundle%29+8.0.3%27%2C%27webpack+%28SWC%29+5.105.4%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B1804.5%2C1458.1%2C1019.4%2C1055.1%2C1055.1%2C1607.7%2C1464.2%2C1464.2%2C1587.8%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28117%2C+81%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28189%2C+80%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28281%2C+78%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2824%2C+73%25%2C+49%25%2C+0.7%29%27%2C%27hsla%2880%2C+68%25%2C+56%25%2C+0.7%29%27%2C%27hsla%28116%2C+79%25%2C+46%25%2C+0.7%29%27%2C%27hsla%28344%2C+76%25%2C+56%25%2C+0.7%29%27%2C%27hsla%2811%2C+68%25%2C+56%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2075.1749999999997%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                       | Score | Startup         | Page Reload      | Root HMR       | Leaf HMR       | Prod Build     |
| -------------------------- | ----- | --------------- | ---------------- | -------------- | -------------- | -------------- |
| Farm 1.7.11                | 74    | 4212ms (2.1x)   | 933ms (8.2x)     | 246ms (4.7x)   | 217ms (1.9x)   | 4113ms (3.0x)  |
| Rspack CLI 1.7.10          | 60    | 2440ms (1.2x)   | 997ms (8.7x)     | 386ms (7.4x)   | 299ms (2.7x)   | 1540ms (1.1x)  |
| Rsbuild 1.7.4              | 67    | 2155ms (1.1x)   | 806ms (7.1x)     | 346ms (6.7x)   | 273ms (2.4x)   | 1349ms (1.0x)  |
| Unpack 4.8.0               | 66    | 2191ms (1.1x)   | 899ms (7.9x)     | 272ms (5.2x)   | 303ms (2.7x)   | 1528ms (1.1x)  |
| Unpack (Prebundle) 4.8.0   | 93    | 2102ms (1.0x)   | 756ms (6.6x)     | 179ms (3.4x)   | 140ms (1.3x)   | 1547ms (1.1x)  |
| Next.js (Turbopack) 16.2.1 | 94    | 2029ms (1.0x)   | 114ms (1.0x)     | 52ms (1.0x)    | 112ms (1.0x)   | 8215ms (6.1x)  |
| Vite 8.0.3                 | 69    | 56300ms (27.7x) | 45971ms (403.3x) | 210ms (4.0x)   | 113ms (1.0x)   | 2106ms (1.6x)  |
| Vite (Full Bundle) 8.0.3   | 15    | 4761ms (2.3x)   | Failed           | Failed         | Failed         | 2069ms (1.5x)  |
| webpack (SWC) 5.105.4      | 13    | 14487ms (7.1x)  | 1811ms (15.9x)   | 2928ms (56.3x) | 2623ms (23.4x) | 12115ms (9.0x) |

**Bundle sizes**

| Name                       | Output size     | Gzipped size    |
| -------------------------- | --------------- | --------------- |
| Farm 1.7.11                | 8144.2kB (1.4x) | 1804.5kB (1.8x) |
| Rspack CLI 1.7.10          | 5628.1kB (1.0x) | 1458.1kB (1.4x) |
| Rsbuild 1.7.4              | 6165.0kB (1.1x) | 1019.4kB (1.0x) |
| Unpack 4.8.0               | 6249.3kB (1.1x) | 1055.1kB (1.0x) |
| Unpack (Prebundle) 4.8.0   | 6249.3kB (1.1x) | 1055.1kB (1.0x) |
| Next.js (Turbopack) 16.2.1 | 6138.2kB (1.1x) | 1607.7kB (1.6x) |
| Vite 8.0.3                 | 5649.3kB (1.0x) | 1464.2kB (1.4x) |
| Vite (Full Bundle) 8.0.3   | 5649.3kB (1.0x) | 1464.2kB (1.4x) |
| webpack (SWC) 5.105.4      | 5882.2kB (1.0x) | 1587.8kB (1.6x) |
<!-- BENCHMARK:END -->












































































































































































