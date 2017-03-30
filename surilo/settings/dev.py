import os
from .base import INSTALLED_APPS, MIDDLEWARE, TEMPLATES, BASE_DIR

SECRET_KEY = 'h213#j$de_t&uor8y0dfvjw^%o)gxe$5be(4cb!w7qxxxxxb(^'

DEBUG = True
# TEMPLATES[0]['DEBUG'] = DEBUG

# INSTALLED_APPS += [
#     'debug_toolbar',
# ]
# 
# MIDDLEWARE += [
#     'debug_toolbar.middleware.DebugToolbarMiddleware',
# ]

# 
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'surilo',
        'USER': 'postgres',
        'PASSWORD': 'password',
        'HOST': '',
        'PORT': '',
    }
}

AUTH_PASSWORD_VALIDATORS = []

STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.StaticFilesStorage'
STATIC_ROOT = os.path.join(BASE_DIR, '..', '..', 'static')

DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'
MEDIA_ROOT = os.path.join(BASE_DIR, '..', '..', 'media')
