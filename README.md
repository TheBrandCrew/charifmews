#Charif Mews Static Website

The challenge was to create a website where the html/css/js files are combined under 64kB gzipped. Used greensock
animation library and inline svg's (optimized with svgo).

### Performance

Performance matters and I used a pre-loader to lower the speed index score (Lower is better)
in combination with a webpack compiled js defer script in the head.

#### Pagespeed insights

Pagespeed insights is used for speed and user experience:

Mobile score is 100/100
Desktop score is 97/100

[Check for yourself](https://developers.google.com/speed/pagespeed/insights/?url=charifmews.com)

#### Tools.pingdom.com speed test

Dallas (Texas) - Load time around 350 ms
New York - Load time around 550 ms
San Jose - Load time around 150 ms (Server is located in San Francisco)
Amsterdam - Load time around 980 ms
Stockholm - Load time around 940 ms
Melbourne - Load time around 1150 ms


### SSL

SSL is optional (don't force it for a informational website).

#### SSL-labs

SSL-report: A+

[Check for yourself](https://www.ssllabs.com/ssltest/analyze.html?d=charifmews.com&latest)

### Future improvements

The gzipped size is now at 63.8kB, not many room for extra content. However I can save some extra space because I don't
use all of the TweenMax included JS files. Code can also be cleaner.


