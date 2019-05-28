# pre-clean
rm -rf brennancolberg.github.io

# clone website repository into folder
git clone https://github.com/BrennanColberg/brennancolberg.github.io

# move build files into it
react-scripts build
rsync -a build/ brennancolberg.github.io/
rm -rf build

# commit
cd brennancolberg.github.io
git add -A
git commit -m "deployed website"
git push

# clean up
cd ..
rm -rf brennancolberg.github.io