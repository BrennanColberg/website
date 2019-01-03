import os
import json

def compile_markdown(folder):
  files = os.listdir("src/assets/" + folder)
  for file in files:
    if file.endswith('.md') and (file[:-3] + ".json") in files:
      data = None
      # gets content of the json
      with open("src/assets/" + folder + "/" + file[:-3] + ".json") as json_file:
        data = json.load(json_file)
      # changes 'content' attribute of the JSON to be the value of the markdown file
      with open("src/assets/" + folder + "/" + file) as md_file:
        data['content'] = md_file.read()
      # puts everything back into the original json
      with open("src/assets/" + folder + "/" + file[:-3] + ".json", "w") as json_file:
        json.dump(data, json_file, indent=2)
      print("compiled", folder + "/" + file)

def main():
  print()
  compile_markdown("blog")
  compile_markdown("books")
  compile_markdown("projects")

if __name__ == "__main__":
  main()