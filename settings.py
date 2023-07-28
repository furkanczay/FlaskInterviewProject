SECRET_KEY = 'GF%6-,"codlgk4542'
STATIC_URL = '/assets' #Startswith /
STATIC_FOLDER = 'assets'
DEBUG = True
PRODUCTION = True

DATABASES = {
    'default': 'project.db',
    'production': 'production.db'
}
