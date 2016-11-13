
# formatNumber v1.0.1 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
formatNumber = require "formatNumber"

formatNumber 1e6, "commas" # => "1,000,000"

formatNumber 1e6, "short" # => "1M"

formatNumber 120, "duration" # => "2:00"
```

