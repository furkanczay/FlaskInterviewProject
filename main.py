from routes import *
app.secret_key = settings.SECRET_KEY


if __name__ == '__main__':
    app.debug = settings.DEBUG
    app.run()