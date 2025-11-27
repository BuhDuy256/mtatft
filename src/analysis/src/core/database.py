from sqlalchemy import create_engine
from core.config import DB_URL

def get_engine():
    try:
        engine = create_engine(DB_URL, echo=False)
        return engine
    except Exception as e:
        print(f"Error connecting to database: {e}")
        raise e