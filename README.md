Webapp do Clube de Código das Minas
=============

Web application do cc:Minas.

### Instalação
```
$ cd webapp
$ . env/bin/activate
$ export CCMINAS_SETTINGS=config.py
$ pip install --editable .
$ export FLASK_APP=ccminas
$ flask initdb
```

### Executar
```
$ flask run
```

A aplicação estará ativa no endereço http://localhost:5000/ .

### Testes
```
$ cd webapp
$ . env/bin/activate
$ python setup.py test
```

### Autoria
- @Dayof
	- Dayanne Fernandes da Cunha
	- dayannefernandesc@gmail.com

- @lenamiroux
	- Helena Quintas Neves Simões
	- helena.simoes@me.com
