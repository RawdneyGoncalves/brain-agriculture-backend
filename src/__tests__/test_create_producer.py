import unittest
import requests

class TestCreateProducer(unittest.TestCase):
    BASE_URL = 'http://localhost:4000'

    def test_create_producer(self):
        producer_data = {
            "cpfCnpj": "14116763438",
            "nomeProdutor": "RAwdney Mendes",
            "nomeFazenda": "Fazenda teste colheita feliz",
            "cidade": "Pernambuco",
            "estado": "PE",
            "areaTotal": 1000,
            "areaAgricultavel": 800,
            "areaVegetacao": 200,
            "culturasPlantadas": ["Milho", "algodao"]
        }
        response = requests.post(f'{self.BASE_URL}/producers', json=producer_data)
        print("Resultado da API:", response.json())
        if response.status_code == 201:
            self.assertIn('id', response.json())
        else:
            self.fail("Falha ao criar produtor")

    def test_create_producer_with_invalid_data(self):
        producer_data = {
            "cpfCnpj": "invalid_cpf_cnpj",  # CPF/CNPJ inválido
            "nomeProdutor": 12345,  # Nome inválido
            "nomeFazenda": "Fazenda teste",
            "cidade": "Pernambuco",
            "estado": "PE",
            "areaTotal": 1000,
            "areaAgricultavel": 800,
            "areaVegetacao": 200,
            "culturasPlantadas": ["Milho", "algodao"]
        }
        response = requests.post(f'{self.BASE_URL}/producers', json=producer_data)
        print("Resultado da API:", response.json())
        if response.status_code == 500:
            self.assertIn('error', response.json())  
        else:
            self.fail("Criação com dados inválidos não retornou status 500")

    def test_create_producer_with_missing_data(self):
        producer_data = {
            # Dados ausentes
        }
        response = requests.post(f'{self.BASE_URL}/producers', json=producer_data)
        print("Resultado da API:", response.json())
        if response.status_code == 500:
            self.assertIn('error', response.json())  
        else:
            self.fail("Criação com dados ausentes não retornou status 400")

if __name__ == '__main__':
    unittest.main()
