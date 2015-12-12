#Charif Mews Static Website

The challenge was to create a website where the html/css/js files are combined under 64kB gzipped. Used greensock
animation library and inline svg's (optimized with svgo).

### Page Analysis

| Page size (gzip)|   Requests    | 
| --------------- |:-------------:| 
| Total: 58.3 kB  |  4            | 
| JS: 39.2 kB     |  1            |   
| HTML: 12.1 kB   |  1            |    
| Images: 6.9 kB  |  2            |    

### Performance

Performance matters and I used a pre-loader to lower the speed index score (Lower is better)
in combination with a webpack compiled js defer script in the head.

#### Pagespeed insights

Pagespeed insights is used for speed and user experience:

Mobile score is 99/100
Desktop score is 97/100

[Check for yourself](https://developers.google.com/speed/pagespeed/insights/?url=charifmews.com)

#### Tools.pingdom.com speed test

| Location        |   Load time   | 
| --------------- |:-------------:| 
| San Jose        |  135ms        |    
| Dallas (Texas)  |  346ms        | 
| New York        |  507ms        |   
| Amsterdam       |  769ms        |   
| Stockholm       |  936ms        |   
| Melbourne       |  995ms        |   

### SSL

SSL is optional (don't force it for a informational website).

#### SSL-labs

SSL-report: A+

[Check for yourself](https://www.ssllabs.com/ssltest/analyze.html?d=charifmews.com&latest)

### Future improvements

The gzipped size is now at 63.8kB, not many room for extra content. However I can save some extra space because I don't
use all of the TweenMax included JS files. Code can also be cleaner.


