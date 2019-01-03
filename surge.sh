#!/bin/bash
cd "$(dirname "$0")"

# update indices of content
python3 scripts/index-projects.py
python3 scripts/index-books.py
python3 scripts/index-blog.py

# build website
npm run build

# publish to surge
echo 'bcolberg.surge.sh' > CNAME
surge

# back to website folder
cd ..