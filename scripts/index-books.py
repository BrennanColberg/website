import os
import json

books = []

# scan the book directory for valid books
files = os.listdir("src/assets/books/")
for file in files:
  if file.endswith('.json'):
    name = file[:-5]
    print('Adding book:', name)
    books.append(name)

# put sorted book file names in the book index file
books.sort()
with open("src/assets/book-index.json", "w") as file:
  json.dump(books, file, sort_keys=True, indent=2)