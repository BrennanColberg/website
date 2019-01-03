import os
import json

def update_index(indexName, folder):

  entries = []

  # scan the directory for valid articles
  files = os.listdir("src/assets/" + folder)
  for file in files:
    if file.endswith('.json'):
      name = file[:-5]
      entries.append(name)
      print("loaded", folder + "/" + file)

  # put sorted project file names in the project index file
  entries.sort()
  with open("src/assets/" + indexName + ".json", "w") as file:
    json.dump(entries, file, sort_keys=True, indent=2)

def main():
  print()
  update_index("project-index", "projects")
  update_index("book-index", "books")
  update_index("blog-index", "blog")

if __name__ == "__main__":
  main()