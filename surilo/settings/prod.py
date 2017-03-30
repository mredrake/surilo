SECRET_KEY = 'h213#j$de_t&uor8y0dfvjw^%o)gxe$5be(4cb!w7q^3$6@b(x'
DEBUG = False
ALLOWED_HOSTS = ['surilo.com', 'surilo.awecode.com']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'surilo',
        'USER': 'surilo',
        'PASSWORD': 'password',
        'HOST': '',
        'PORT': '',
    }
}
