import sqlite3
import settings

def database_connect():
    db_name = settings.DATABASES["default"] if not settings.PRODUCTION else settings.DATABASES["production"]
    conn = sqlite3.connect(db_name)
    return conn


def get_or_insert_data(query, params=tuple(), insert=False):
    conn = database_connect()
    cursor = conn.cursor()
    cursor.execute(query, params)
    if insert:
        conn.commit()
        r =  cursor.lastrowid
    else:
        r = cursor.fetchall() if len(params) < 1 else cursor.fetchone()
    conn.close()
    return r

