# Build Tools Performance

Benchmark comparing JavaScript bundlers and build tools.
<!-- BENCHMARK:START -->


## Results

- Case: `large`
- Date: `2025-12-11`


<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27DX+Score+%28Higher+is+better%29%27%2Cdata%3A%5B56%2C60%2C73%2C80%2C85%2C88%2C71%2C65%2C86%2C13%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27DX+Score+%28Higher+is+better%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A101.19999999999999%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Startup%27%2Cdata%3A%5B7550%2C1878%2C1550%2C1442%2C1996%2C2370%2C11662%2C20764%2C7294%2C12391%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Startup+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A23878.6%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Page+Reload%27%2Cdata%3A%5B1093%2C744%2C428%2C524%2C644%2C730%2C432%2C7916%2C50%2C1082%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Page+Reload+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A9103.4%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Root+HMR%27%2Cdata%3A%5B237%2C276%2C252%2C211%2C195%2C130%2C211%2C177%2C101%2C2396%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Root+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2755.3999999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Leaf+HMR%27%2Cdata%3A%5B173%2C271%2C219%2C200%2C146%2C119%2C23%2C93%2C97%2C2406%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Leaf+HMR+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2766.8999999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Prod+Build%27%2Cdata%3A%5B8270%2C1862%2C1938%2C1742%2C1817%2C1856%2C10298%2C2132%2C2171%2C12750%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Prod+Build+%28ms%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A14662.499999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Output+size%27%2Cdata%3A%5B10730.8%2C7219%2C7440.6%2C7523.1%2C7523.1%2C7523.1%2C8027.4%2C6977.3%2C6977.3%2C7438.6%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Output+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A12340.419999999998%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

<picture>
	<img src="https://quickchart.io/chart?c=%7Btype%3A%27horizontalBar%27%2Cdata%3A%7Blabels%3A%5B%27Farm+1.7.11%27%2C%27Rspack+CLI+1.6.7%27%2C%27Rsbuild+1.6.14%27%2C%27Unpack+3.7.1%27%2C%27Unpack+%28Prebundle%29+3.7.1%27%2C%27Unpack+%28Prebundle+Plus%29+3.7.1%27%2C%27Next.js+%28Turbopack%29+16.0.8%27%2C%27Vite+8.0.0-beta.1%27%2C%27Vite+%28Full+Bundle%29+8.0.0-beta.1%27%2C%27webpack+%28SWC%29+5.103.0%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Gzipped+size%27%2Cdata%3A%5B2510.2%2C1704.5%2C1572.3%2C1609.5%2C1609.5%2C1609.5%2C2037.6%2C1825.8%2C1825.8%2C1878.1%5D%2CbackgroundColor%3A%5B%27hsla%2846%2C+79%25%2C+50%25%2C+0.7%29%27%2C%27hsla%2884%2C+76%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28318%2C+80%25%2C+45%25%2C+0.7%29%27%2C%27hsla%28204%2C+71%25%2C+43%25%2C+0.7%29%27%2C%27hsla%28314%2C+77%25%2C+53%25%2C+0.7%29%27%2C%27hsla%28256%2C+74%25%2C+49%25%2C+0.7%29%27%2C%27hsla%28206%2C+72%25%2C+57%25%2C+0.7%29%27%2C%27hsla%28335%2C+74%25%2C+54%25%2C+0.7%29%27%2C%27hsla%28236%2C+68%25%2C+50%25%2C+0.7%29%27%2C%27hsla%28179%2C+81%25%2C+52%25%2C+0.7%29%27%5D%7D%5D%7D%2Coptions%3A%7Btitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Gzipped+size+%28kB%29%27%7D%2Clegend%3A%7Bdisplay%3Afalse%7D%2Cscales%3A%7BxAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%2Cticks%3A%7Bdisplay%3Afalse%2Cmin%3A0%2CsuggestedMax%3A2886.7299999999996%7D%7D%5D%2CyAxes%3A%5B%7BgridLines%3A%7Bdisplay%3Afalse%7D%7D%5D%7D%2Cplugins%3A%7Bdatalabels%3A%7Banchor%3A%27end%27%2Calign%3A%27right%27%7D%7D%7D%7D&w=500&h=300&ref=qc-js&bkg=transparent&f=svg&v=2.9.4">
</picture>

**Build performance**

| Name                            | DX Score | Startup         | Page Reload     | Root HMR       | Leaf HMR        | Prod Build     |
| ------------------------------- | -------- | --------------- | --------------- | -------------- | --------------- | -------------- |
| Farm 1.7.11                     | 56       | 7550ms (5.2x)   | 1093ms (21.9x)  | 237ms (2.3x)   | 173ms (7.5x)    | 8270ms (4.7x)  |
| Rspack CLI 1.6.7                | 60       | 1878ms (1.3x)   | 744ms (14.9x)   | 276ms (2.7x)   | 271ms (11.8x)   | 1862ms (1.1x)  |
| Rsbuild 1.6.14                  | 73       | 1550ms (1.1x)   | 428ms (8.6x)    | 252ms (2.5x)   | 219ms (9.5x)    | 1938ms (1.1x)  |
| Unpack 3.7.1                    | 80       | 1442ms (1.0x)   | 524ms (10.5x)   | 211ms (2.1x)   | 200ms (8.7x)    | 1742ms (1.0x)  |
| Unpack (Prebundle) 3.7.1        | 85       | 1996ms (1.4x)   | 644ms (12.9x)   | 195ms (1.9x)   | 146ms (6.3x)    | 1817ms (1.0x)  |
| Unpack (Prebundle Plus) 3.7.1   | 88       | 2370ms (1.6x)   | 730ms (14.6x)   | 130ms (1.3x)   | 119ms (5.2x)    | 1856ms (1.1x)  |
| Next.js (Turbopack) 16.0.8      | 71       | 11662ms (8.1x)  | 432ms (8.6x)    | 211ms (2.1x)   | 23ms (1.0x)     | 10298ms (5.9x) |
| Vite 8.0.0-beta.1               | 65       | 20764ms (14.4x) | 7916ms (158.3x) | 177ms (1.8x)   | 93ms (4.0x)     | 2132ms (1.2x)  |
| Vite (Full Bundle) 8.0.0-beta.1 | 86       | 7294ms (5.1x)   | 50ms (1.0x)     | 101ms (1.0x)   | 97ms (4.2x)     | 2171ms (1.2x)  |
| webpack (SWC) 5.103.0           | 13       | 12391ms (8.6x)  | 1082ms (21.6x)  | 2396ms (23.7x) | 2406ms (104.6x) | 12750ms (7.3x) |

**Bundle sizes**

| Name                            | Output size      | Gzipped size    |
| ------------------------------- | ---------------- | --------------- |
| Farm 1.7.11                     | 10730.8kB (1.5x) | 2510.2kB (1.6x) |
| Rspack CLI 1.6.7                | 7219.0kB (1.0x)  | 1704.5kB (1.1x) |
| Rsbuild 1.6.14                  | 7440.6kB (1.1x)  | 1572.3kB (1.0x) |
| Unpack 3.7.1                    | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Unpack (Prebundle) 3.7.1        | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Unpack (Prebundle Plus) 3.7.1   | 7523.1kB (1.1x)  | 1609.5kB (1.0x) |
| Next.js (Turbopack) 16.0.8      | 8027.4kB (1.2x)  | 2037.6kB (1.3x) |
| Vite 8.0.0-beta.1               | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
| Vite (Full Bundle) 8.0.0-beta.1 | 6977.3kB (1.0x)  | 1825.8kB (1.2x) |
| webpack (SWC) 5.103.0           | 7438.6kB (1.1x)  | 1878.1kB (1.2x) |
<!-- BENCHMARK:END -->




















































































































































