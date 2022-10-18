import requests
from bs4 import BeautifulSoup

URL = 'https://www.nytimes.com/interactive/2022/us/abortion-laws-roe-v-wade.html'
page = requests.get(URL)
scrubbed = []

content = BeautifulSoup(page.content, 'html.parser')

state_names = content.select('.g-table-rows-td-0 .state')
statuses = content.select('.g-table-rows-td-1')
whens = content.select('.g-table-rows-td-2')
whys = content.select('.g-table-rows-td-3')

ran = range(0, len(state_names), 1)
for i in ran:
    state = state_names[i].getText().strip()
    status = statuses[i].getText().strip()
    when = whens[i].getText().strip()
    why = whys[i].getText().strip()

    temp = dict(stateName=state, statusOf=status, effectTime=when, notes=why)
    scrubbed.append(temp)
    

print(scrubbed)
