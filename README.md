# Date Anagrammer

You ever have one of those nights where you can't sleep because, for whatever reason, your brain came up with a meaningless logic puzzle and won't let it go? Yeah. Well, here we are.

# Setup

Clone this bad boy and run `yarn install`.

# Usage

To use the script, run `node date-anagram.js`. You can optionally pass in a single parameter - a year. So, to find all the matches for the year 2011, you could run it as `npm date-anagram.js 2011`. If you don't pass it a year, it'll just take the current year instead.

This script takes a year in `YYYY` format (e.g., `2018`) and finds every month/day combination in `MM/DD` format that is an anagram for the year. So, for example, the year 2018 has six day/month combinations that are anagrams for `2018`:

```
01-28-2018
02-18-2018
08-12-2018
08-21-2018
10-28-2018
12-08-2018
```

Ok, that's it. I'm going to bed now.
