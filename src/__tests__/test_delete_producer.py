import unittest
import requests

class TestDeleteProducer(unittest.TestCase):
    BASE_URL = 'http://localhost:4000'

    def test_delete_producer(self):
        # Testa a exclusão de um produtor existente
        response = requests.delete(f'{self.BASE_URL}/producers/13')
        if response.status_code == 200:
            self.assertIn('deletedProducer', response.json())
            print("Log do teste delete_producer:", response.json())
        elif response.status_code == 404:
            self.fail("Producer not found for deletion")
        else:
            self.fail("Failed to delete producer")

    def test_delete_producer_invalid_id(self):
        # Testa a exclusão com um ID inválido
        response = requests.delete(f'{self.BASE_URL}/producers/invalid_id')
        self.assertEqual(response.status_code, 500)
        self.assertIn('error', response.json())
        print("Log do teste delete_producer_invalid_id:", response.json())

    def test_delete_producer_nonexistent_id(self):
        # Testa a exclusão de um produtor que não existe
        response = requests.delete(f'{self.BASE_URL}/producers/9999')
        self.assertEqual(response.status_code, 404)
        self.assertIn('error', response.json())
        print("Log do teste delete_producer_nonexistent_id:", response.json())

    def test_delete_producer_empty_id(self):
        # Testa a exclusão sem fornecer um ID
        response = requests.delete(f'{self.BASE_URL}/producers/')
        self.assertEqual(response.status_code, 404)
        self.assertIn('error', response.json())
        print("Log do teste delete_producer_empty_id:", response.json())

if __name__ == '__main__':
    unittest.main()
