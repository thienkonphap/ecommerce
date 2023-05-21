import requests

url = 'http://localhost:3000/users'
data = {
            'email': "test",
            'password': "test"
        }

response = requests.post(url, json=data)

if response.status_code == 200:
    print('Request was successful.')
    print('Response:', response.json())
else:
    print('Request failed with status code:', response.status_code)
