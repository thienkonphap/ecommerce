import requests

url = 'http://localhost:3000/login'
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

url = 'http://localhost:3000/products'
data = {
            'product_id': '644fc2ddfce4510a2cb99ee0',
            'user_id':'644fc3d6fce4510a2cb99ee1',
            'quantity': 1
        }

response = requests.post(url, json=data)

if response.status_code == 200:
    print('Request was successful.')
    print('Response:', response.json())
else:
    print('Request failed with status code:', response.status_code)
