#!/bin/bash
cd "$(dirname "$0")"

# update indices of content
python3 scripts/index-books.py

# build website
npm run build

# publish to surge
echo 'bcolberg.surge.sh' > CNAME
surge

# back to website folder
cd ..