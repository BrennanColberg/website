import os
import json

projects = []

# scan the projects directory for valid projects
files = os.listdir("src/assets/projects/")
for file in files:
  if file.endswith('.json'):
    name = file[:-5]
    print('Adding project:', name)
    projects.append(name)

# put sorted project file names in the project index file
projects.sort()
with open("src/assets/project-index.json", "w") as file:
  json.dump(projects, file, sort_keys=True, indent=2)