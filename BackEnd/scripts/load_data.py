import csv
import psycopg2

def load_products():
    conn = psycopg2.connect(dbname="ecommerce", user="postgres", password="password", host="localhost", port="5432")
    cur = conn.cursor()
    with open('../src/main/resources/products.csv', 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            cur.execute(
                "INSERT INTO product (id, name, category, quantity_sold, stock) VALUES (%s, %s, %s, %s, %s)",
                (row['id'], row['name'], row['category'], row['quantity_sold'], row['stock'])
            )
    conn.commit()
    cur.close()
    conn.close()

if __name__ == '__main__':
    load_products()