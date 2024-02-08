import unittest
import requests

class TestReadProducer(unittest.TestCase):
    BASE_URL = 'http://localhost:4000'

    def test_get_producers(self):
        response = requests.get(f'{self.BASE_URL}/producers')
        if response.status_code == 200:
            self.assertIsInstance(response.json(), list)
        elif response.status_code == 404:
            self.fail("Erro ao obter produtores")

    def test_get_producer_by_id(self):
        response = requests.get(f'{self.BASE_URL}/producers/8')
        if response.status_code == 200:
            self.assertIn('id', response.json())
        elif response.status_code == 400:
            self.fail("Produtor não encontrado")

    def test_get_producer_by_invalid_id(self):
        response = requests.get(f'{self.BASE_URL}/producers/invalid_id')
        if response.status_code == 500:
            self.assertIn('error', response.json())
            print("Erro ao obter produtor com ID inválido:", response.json())
        else:
            self.fail("Erro inesperado ao obter produtor com ID inválido")

    def test_get_producer_by_nonexistent_id(self):
        response = requests.get(f'{self.BASE_URL}/producers/999')
        if response.status_code == 404:
            self.assertIn('error', response.json())
            print("Produtor não encontrado:", response.json())
        else:
            self.fail("Erro inesperado ao obter produtor com ID inexistente")

if __name__ == '__main__':
    unittest.main()
