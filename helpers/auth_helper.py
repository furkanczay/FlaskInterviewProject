from flask import session
import requests


def check_user(email, password):
    r = requests.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDL1-5NTplE45oP_sz2EBv8pnJJGdOxa0Y', 
                        data={"email": email, "password": password})
    if r.status_code == 200:
        return r.json()
    else:
        return None
    

def user_is_authenticated():
    return True if "user_info" in session else False