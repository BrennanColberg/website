import os
import json

blog = []

# scan the blog directory for valid posts
files = os.listdir("src/assets/blog/")
for file in files:
  if file.endswith('.json'):
    name = file[:-5]
    print('Adding blog post:', name)
    blog.append(name)

# put sorted post file names in the blog index file
blog.sort()
with open("src/assets/blog-index.json", "w") as file:
  json.dump(blog, file, sort_keys=True, indent=2)