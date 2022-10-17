import requests
from bs4 import BeautifulSoup

URL = 'https://www.nytimes.com/interactive/2022/us/abortion-laws-roe-v-wade.html'
page = requests.get(URL)
scrubbed = []

content = BeautifulSoup(page.content, 'html.parser')

results = content.find_all("div", class_='g-table-text')
# print(results)



state_name = content.select('.state')
for tags in state_name:
    print(tags.get_text())

# scrubbed.append(state_name.text)
print(state_name)
    

print(scrubbed)
