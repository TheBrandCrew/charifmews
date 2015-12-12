#Charif Mews Static Website

The challenge was to create a website where the html/css/js files combined are sized under 64kB gzipped. I used the greensock
animation library and inline svg's (optimized with svgo).

### Page Analysis

| Page size (gzip)|   Requests    | 
| --------------- |:-------------:| 
| JS: 39.2 kB     |  1            |   
| HTML: 12.1 kB   |  1            |    
| Images: 6.9 kB  |  2            |   
| Total: 58.3 kB  |  4            | 


### Performance

Performance matters and that's why I used a pre-loader to lower the speed index score (how fast the website is shown, lower is better) in combination with a webpack compiled js defer script in the head (defer script in head is much faster than in the body).

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

The gzipped size is now at 58.3kB. Code can also be cleaner and will test different cdn's for a faster load time worldwide (if possible). 


