import unittest
import requests

class TestUpdateProducer(unittest.TestCase):
    BASE_URL = 'http://localhost:4000'

    def test_update_producer(self):
        producer_data = {
            "nomeFazenda": "Nova Fazenda pimpolho feliz"
        }
        response = requests.put(f'{self.BASE_URL}/producers/8', json=producer_data)
        if response.status_code == 200:
            self.assertEqual(response.json()['nomeFazenda'], 'Nova Fazenda pimpolho feliz')
        elif response.status_code == 400:
            self.fail("Update validation failed")
        elif response.status_code == 404:
            self.fail("Produtor não encontrado")
        else:
            self.fail("Falha ao atualizar produtor")

    def test_update_producer_invalid_data(self):
        producer_data = {
            "nomeFazenda": ""  # Nome de fazenda vazio
        }
        response = requests.put(f'{self.BASE_URL}/producers/3', json=producer_data)
        self.assertEqual(response.status_code, 400)
        self.assertIn('error', response.json())
        print("Log do teste update_producer_invalid_data:", response.json())

    def test_update_producer_nonexistent_id(self):
        producer_data = {
            "nomeFazenda": "Nova Fazenda"
        }
        response = requests.put(f'{self.BASE_URL}/producers/999', json=producer_data)
        self.assertEqual(response.status_code, 404)
        self.assertIn('error', response.json())
        print("Log do teste update_producer_nonexistent_id:", response.json())

    def test_update_producer_invalid_total_area(self):
        producer_data = {
            "areaTotal": 500,
            "areaAgricultavel": 300,
            "areaVegetacao": 200
        }
        response = requests.put(f'{self.BASE_URL}/producers/3', json=producer_data)
        self.assertEqual(response.status_code, 400)
        self.assertIn('error', response.json())
        print("Log do teste update_producer_invalid_total_area:", response.json())

if __name__ == '__main__':
    unittest.main()
