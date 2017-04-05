**Requirements**  
* Python 3
* pip
* virtualenv
* npm

**Setup Instructions**

```
mkdir surilo
cd surilo
virtualenv env
source env/bin/activate
git clone https://github.com/awecode/surilo app
cd app
pip install -r requirements/dev.txt
cp surilo/settings/env.sample.py surilo/settings/env.py
npm install
```

**Dev URL**

[http://localhost:8000](http://localhost:8000)


**Running Project**

```
source surilo/env/bin/activate
cd surilo/app/
./manage.py runserver
```

```
webpack --watch

```
 