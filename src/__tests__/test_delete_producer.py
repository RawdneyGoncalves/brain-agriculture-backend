import unittest
import requests

class TestDeleteProducer(unittest.TestCase):
    BASE_URL = 'http://localhost:4000'

    def test_delete_producer(self):
        response = requests.delete(f'{self.BASE_URL}/producers/3')
        if response.status_code == 204:
            pass  
        elif response.status_code == 404:
            self.fail("Producer not found for deletion")
        else:
            self.fail("Failed to delete producer")

    def test_delete_producer_invalid_id(self):
        response = requests.delete(f'{self.BASE_URL}/producers/invalid_id')
        self.assertEqual(response.status_code, 400)
        self.assertIn('error', response.json())
        print("Log do teste delete_producer_invalid_id:", response.json())

if __name__ == '__main__':
    unittest.main()
