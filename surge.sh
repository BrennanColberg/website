#!/bin/bash
cd "$(dirname "$0")"

# update content storage
python3 scripts/compile-markdown.py
python3 scripts/update-indices.py

# build website
npm run build
cd build

# publish to surge
echo 'bcolberg.surge.sh' > CNAME
surge

# back to website folder
cd ..